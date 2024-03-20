const baseUrl = "http://localhost:8000/heroes";
const reset = document.getElementById("reset");
const list = document.getElementById("stats");
const checkboxMelee = document.getElementById("checkboxMelee");
const checkboxRanged = document.getElementById("checkboxRanged");
const checkboxStr = document.getElementById("checkboxStr");
const checkboxAgi = document.getElementById("checkboxAgi");
const checkboxInt = document.getElementById("checkboxInt");
const checkboxUni = document.getElementById("checkboxUni");
const checkboxes = [
   checkboxMelee,
   checkboxRanged,
   checkboxStr,
   checkboxAgi,
   checkboxInt,
   checkboxUni,
];

//Assigning eventListener on reset checkbox
reset.addEventListener("click", resetFilters);

//Loop through all navbar-checkboxes to add eventListeners
const filters = document.querySelectorAll(".filterHeroes");
for (let i = 0; i < filters.length; i++) {
   filters[i].addEventListener("click", filterHeroes);
}

//Loop through all images to add eventListeners
const images = document.querySelectorAll("img");
console.log(images);
for (let i = 0; i < images.length; i++) {
   images[i].addEventListener("click", selectImage);
}

//Fetching the heroes data to pass on to the CBFs
async function getHeroes() {
   try {
      const response = await fetch(baseUrl);
      const data = await response.json();
      const heroes = Object.keys(data).map((key) => data[key]);
      return heroes;
   } catch (error) {
      console.error(error);
   }
}

//eventListener: filterHeroes
async function filterHeroes() {
   try {
      //If an 'attack-type' filter is checked, disable the other one
      checkboxRanged.checked
         ? (checkboxMelee.disabled = true)
         : (checkboxMelee.disabled = false);
      checkboxMelee.checked
         ? (checkboxRanged.disabled = true)
         : (checkboxRanged.disabled = false);

      //Isolate the filters that are being used
      let filtered = [];
      for (let i = 0; i < checkboxes.length; i++) {
         if (checkboxes[i].checked) {
            let str = checkboxes[i].name;
            filtered.includes(str) ? null : filtered.push(str);
         }
      }

      //Loop through all heroes and apply filters at the corresponding images
      const heroes = await getHeroes();
      heroes.forEach((hero) => {
         const targetHero = document.querySelector(`.${hero["name"]}`);

         if (filtered.length === 0) targetHero.classList.remove("hidden");

         if (filtered.length === 1) {
            filtered.includes(hero["attackType"]) ||
            filtered.includes(hero["type"])
               ? targetHero.classList.remove("hidden")
               : targetHero.classList.add("hidden");
         }

         if (
            filtered.length >= 2 &&
            (filtered.includes("Melee") || filtered.includes("Ranged"))
         ) {
            filtered.includes(hero["attackType"]) &&
            filtered.includes(hero["type"])
               ? targetHero.classList.remove("hidden")
               : targetHero.classList.add("hidden");
         }

         if (
            filtered.length >= 2 &&
            !(filtered.includes("Melee") || filtered.includes("Ranged"))
         ) {
            filtered.includes(hero["attackType"]) ||
            filtered.includes(hero["type"])
               ? targetHero.classList.remove("hidden")
               : targetHero.classList.add("hidden");
         }
      });
   } catch (error) {
      console.error(error);
   }
}

//eventListener: selectImage
async function selectImage(event) {
   try {
      const clickedImage = event.target;
      const selectedHero = clickedImage.className;
      let selectedHeroCache = false;

      if (!clickedImage.hasAttribute("id")) {
         clickedImage.id = "selected";

         // Disable checkboxes when image is selected
         selectedHeroCache = true;
         checkboxes.forEach(
            (box) => selectedHeroCache && (box.disabled = true)
         );

         const heroes = await getHeroes();
         heroes.forEach((hero) => {
            const targetHero = document.querySelector(`.${hero["name"]}`);
            targetHero.id !== "selected" && targetHero.classList.add("hidden");
         });

         const stats = heroes.filter(
            (hero) => hero["name"] === selectedHero
         )[0];

         // Show each hero-property on an HTML list
         for (const property in stats) {
            const listItem = document.createElement("li");
            const spanProperty = document.createElement("span");

            //  Formating the hero's properties as pair of key / val
            let key = property.slice();
            if (key === "mainInfo") key = "main info";
            if (key === "attackType") key = "attack type";
            key = key.slice(0, 1).toUpperCase() + key.slice(1);

            let val =
               typeof stats[property] === "number"
                  ? stats[property]
                  : stats[property].slice();

            // Name & Main info edit
            if (property === "name") {
               val = val
                  .replace(/[_]/g, " ")
                  .split(" ")
                  .map((word) =>
                     word === "of" || word === "the"
                        ? word
                        : word.slice(0, 1).toUpperCase() +
                          word.slice(1).toLowerCase()
                  )
                  .join(" ");
            }
            if (property === "mainInfo") {
               val = val.slice(0, 1).toUpperCase() + val.slice(1).toLowerCase();
            }

            // Complexity edit
            if (property === "complexity") {
               val = `${val} (${val}/3)`;
            }

            // Spells edit
            if (property === "spells") {
               val = val
                  .map((elem) => {
                     if (typeof elem === "object") {
                        // Check if 'shard' property exists
                        const shardText = elem.shard
                           ? `Shard upgrade: ${elem.shard}`
                           : "";
                        // Check if 'scepter' property exists
                        const scepterText = elem.scepter
                           ? `Scepter upgrade: ${elem.scepter}`
                           : "";
                        // Combine the texts (if available)
                        return [shardText, scepterText]
                           .filter(Boolean)
                           .join(", ");
                     }
                     return elem;
                  })
                  .join(", ");
            }

            // Set the text content of the <span>
            spanProperty.textContent = `${key}: ${val}`;
            // Append the <span> to the <li>
            listItem.appendChild(spanProperty);
            // Append the <li> to the <ul>
            list.appendChild(listItem);
         }
      } else {
         clickedImage.removeAttribute("id");
         checkboxes.forEach((box) => (box.disabled = false));
         list.textContent = "";

         const heroes = await getHeroes();
         heroes.forEach((hero) => {
            document
               .querySelector(`.${hero["name"]}`)
               .classList.remove("hidden");
         });
         filterHeroes();
      }
   } catch (error) {
      console.error(error);
   }
}

//eventListener: resetFilters
async function resetFilters() {
   checkboxes.forEach((box) => ((box.checked = false), (box.disabled = false)));
   list.textContent = "";
   const heroes = await getHeroes();
   heroes.forEach((hero) => {
      const targetHero = document.querySelector(`.${hero["name"]}`);
      targetHero.removeAttribute("id");
   });
   await filterHeroes();
}
