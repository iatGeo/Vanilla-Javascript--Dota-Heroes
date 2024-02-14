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

<<<<<<< HEAD
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

// All eventListeners' CBFs
async function filterMelee(){
    try {
        const data = await getHeroes()
        data.forEach(hero => {
            const targetHero = document.querySelector(`.${hero['name']}`)

            if( hero['attackType']!=='Melee' ) targetHero.classList.toggle('hidden')

            checkboxMelee.checked ? checkboxRanged.disabled = true 
                : checkboxRanged.disabled = false
        })
=======

//Fetching the heroes data to pass on to the CBFs
async function getHeroes(){
    try {
        const response = await fetch(baseUrl)
        const data = await response.json()
        const heroes = Object.keys(data).map(key => data[key])
        return heroes
>>>>>>> a9a56010de700765c431a9d284e55cf72e5859ab
    } catch (error) {
        console.error(error)
    }
}

// EventListeners' CBFunction
async function filterHeroes () {
    try {
<<<<<<< HEAD
        const data = await getHeroes()
        data.forEach(hero => {
            const targetHero = document.querySelector(`.${hero['name']}`)

            if( hero['attackType']!=='Ranged' ) targetHero.classList.toggle('hidden')

            checkboxRanged.checked ? checkboxMelee.disabled = true 
=======
        //If an 'attack-type' filter is checked, disable the other one
        checkboxRanged.checked ? checkboxMelee.disabled = true 
>>>>>>> a9a56010de700765c431a9d284e55cf72e5859ab
                : checkboxMelee.disabled = false
        checkboxMelee.checked ? checkboxRanged.disabled = true 
                : checkboxRanged.disabled = false

        //Check which checkboxes are checked
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