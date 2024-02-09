const baseUrl = 'http://localhost:8000/heroes'
const checkboxRanged = document.getElementById('checkboxRanged')
const checkboxMelee = document.getElementById('checkboxMelee')
const checkboxStr = document.getElementById('checkboxStr')
const checkboxAgi = document.getElementById('checkboxAgi')
const checkboxInt = document.getElementById('checkboxInt')
const checkboxUni = document.getElementById('checkboxUni')

document.querySelector('.meleeFilter').addEventListener('click', filterMelee)
document.querySelector('.rangedFilter').addEventListener('click', filterRanged)
document.querySelector('.strFilter').addEventListener('click', filterStr)
document.querySelector('.agiFilter').addEventListener('click', filterAgi)
document.querySelector('.intFilter').addEventListener('click', filterInt)
document.querySelector('.uniFilter').addEventListener('click', filterUni)


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


//All eventListeners' CBFs
async function filterMelee(){
    try {
        const data = await getHeroes()
        data.forEach(hero => {
            if( checkboxRanged.checked ){
                document.querySelector(`.${hero['name']}`).classList.toggle('hidden')
            }
            if( hero['attackType']!=='Melee' ){
                document.querySelector(`.${hero['name']}`).classList.toggle('hidden')
            }
        })
    } catch (error) {
        console.error(error)
    }
}

async function filterRanged(){
    try {
        const data = await getHeroes()
        data.forEach(hero => {
            if( checkboxMelee.checked ){
                document.querySelector(`.${hero['name']}`).classList.toggle('hidden')
            }
            if( hero['attackType']!=='Ranged' ){
                document.querySelector(`.${hero['name']}`).classList.toggle('hidden')
            }
        })
    } catch (error) {
        console.error(error)
    }
}

async function filterStr(){
    try {
        const data = await getHeroes()
        data.forEach(hero => {
            if( checkboxAgi.checked || checkboxInt.checked || checkboxUni.checked ){
                document.querySelector(`.${hero['name']}`).classList.toggle('hidden')
            }
            if( hero['type']!=='Strength' ){
                document.querySelector(`.${hero['name']}`).classList.toggle('hidden')
            }
        })
    } catch (error) {
        console.error(error)
    }
}

async function filterAgi(){
    try {
        const data = await getHeroes()
        data.forEach(hero => {
            if( checkboxStr.checked || checkboxInt.checked || checkboxUni.checked ){
                document.querySelector(`.${hero['name']}`).classList.toggle('hidden')
            }
            if( hero['type']!=='Agility' ){
                document.querySelector(`.${hero['name']}`).classList.toggle('hidden')
            }
        })
    } catch (error) {
        console.error(error)
    }
}

async function filterInt(){
    try {
        const data = await getHeroes()
        data.forEach(hero => {
            if( checkboxStr.checked || checkboxAgi.checked || checkboxUni.checked ){
                document.querySelector(`.${hero['name']}`).classList.toggle('hidden')
            }
            if( checkboxRanged.checked ){
                hero['attackType']!=='Melee' ? document.querySelector(`.${hero['name']}`).classList.remove('hidden') : document.querySelector(`.${hero['name']}`).classList.add('hidden')
            }
            if( hero['type']!=='Intelligence' ){
                document.querySelector(`.${hero['name']}`).classList.toggle('hidden')
            }
        })
    } catch (error) {
        console.error(error)
    }
}

async function filterUni(){
    try {
        const data = await getHeroes()
        data.forEach(hero => {
            if( checkboxStr.checked || checkboxAgi.checked || checkboxInt.checked ){
                document.querySelector(`.${hero['name']}`).classList.toggle('hidden')
            }
            if( hero['type']!=='Universal' ){
                document.querySelector(`.${hero['name']}`).classList.toggle('hidden')
            }
        })
    } catch (error) {
        console.error(error)
    }
}