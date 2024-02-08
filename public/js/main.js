const baseUrl = 'http://localhost:8000/heroes'
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
            if( document.getElementById('checkboxRanged').checked ){
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
            if( document.getElementById('checkboxMelee').checked ){
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
            if( document.getElementById('checkboxAgi').checked || document.getElementById('checkboxInt').checked || document.getElementById('checkboxUni').checked ){
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
            if( document.getElementById('checkboxStr').checked || document.getElementById('checkboxInt').checked || document.getElementById('checkboxUni').checked ){
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
            if( document.getElementById('checkboxStr').checked || document.getElementById('checkboxAgi').checked || document.getElementById('checkboxUni').checked ){
                document.querySelector(`.${hero['name']}`).classList.toggle('hidden')
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
            if( document.getElementById('checkboxStr').checked || document.getElementById('checkboxAgi').checked || document.getElementById('checkboxInt').checked ){
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