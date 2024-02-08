const baseUrl = 'http://localhost:8000/heroes'
document.querySelector('.meleeFilter').addEventListener('click', filterMelee)

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
            if( hero['attackType']!=='Melee' ){
                document.querySelector(`.${hero['name']}`).classList.toggle('hidden')
            } 
        })
    } catch (error) {
        console.error(error)
    }
}