const baseUrl = 'http://localhost:8000/heroes'
const checkboxMelee = document.getElementById('checkboxMelee')
const checkboxRanged = document.getElementById('checkboxRanged')
const checkboxStr = document.getElementById('checkboxStr')
const checkboxAgi = document.getElementById('checkboxAgi')
const checkboxInt = document.getElementById('checkboxInt')
const checkboxUni = document.getElementById('checkboxUni')
const checkboxes = [checkboxMelee, checkboxRanged, checkboxStr, checkboxAgi, checkboxInt, checkboxUni]


//Loop through all navbar-checkboxes to add eventListeners
const filters = document.querySelectorAll('.filterHeroes')
for (let i=0; i<filters.length; i++) {
    filters[i].addEventListener('click', filterHeroes)
}


//Fetching the heroes data to pass on to the CBFs
async function getHeroes(){
    try {
        const response = await fetch(baseUrl)
        const data = await response.json()
        const heroes = Object.keys(data).map(key => data[key])
        return heroes
    } catch (error) {
        console.error(error)
    }
}


//Fetching the heroes data to pass on to the CBFs
async function getHeroes(){
    try {
        const response = await fetch(baseUrl)
        const data = await response.json()
        const heroes = Object.keys(data).map(key => data[key])
        return heroes
    } catch (error) {
        console.error(error)
    }
}

// EventListeners' CBFunction
async function filterHeroes () {
    try {
        //If an 'attack-type' filter is checked, disable the other one
        checkboxRanged.checked ? checkboxMelee.disabled = true : checkboxMelee.disabled = false
        checkboxMelee.checked ? checkboxRanged.disabled = true : checkboxRanged.disabled = false

        //Isolate the filters that are being used
        let filtered = []
        for (let i=0; i<checkboxes.length; i++) {
            if (checkboxes[i].checked) {
                let str = checkboxes[i].name
                filtered.includes(str) ? null : filtered.push(str)
            }
        }

        //Loop through all heroes and apply filters at the corresponding images
        const heroes = await getHeroes()
        heroes.forEach(hero => {
            const targetHero = document.querySelector(`.${hero['name']}`)

            if (filtered.length===0) targetHero.classList.remove('hidden')

            if (filtered.length===1) {
                filtered.includes(hero['attackType']) || filtered.includes(hero['type']) ? targetHero.classList.remove('hidden') : targetHero.classList.add('hidden')
            }

            if (filtered.length>=2 && (filtered.includes('Melee') || filtered.includes('Ranged'))) {
                filtered.includes(hero['attackType']) && filtered.includes(hero['type']) ? targetHero.classList.remove('hidden') : targetHero.classList.add('hidden')
            }

            if (filtered.length>=2 && !(filtered.includes('Melee') || filtered.includes('Ranged'))) {
                filtered.includes(hero['attackType']) || filtered.includes(hero['type']) ? targetHero.classList.remove('hidden') : targetHero.classList.add('hidden')
            }
        })
    } catch (error) {
        console.error(error)
    }
}