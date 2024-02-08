const baseUrl = 'http://localhost:8000/heroes'
document.querySelector('.meleeFilter').addEventListener('click', filterMelee)
document.querySelector('.rangedFilter').addEventListener('click', filterRanged)

//Fetching the heroes database
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