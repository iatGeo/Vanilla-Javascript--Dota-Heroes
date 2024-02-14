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

// All eventListeners' CBFs
async function filterMelee(){
    try {
        const data = await getHeroes()
        data.forEach(hero => {
            const targetHero = document.querySelector(`.${hero['name']}`)

            if( checkboxStr.checked ){
                let results = data.filter(elem => elem['type']==='Strength')
                results.forEach(elem => {
                    if( elem['attackType']!=='Melee' ){
                        document.querySelector(`.${elem['name']}`).classList.toggle('hidden')
                    }
                })
            }

            checkboxMelee.checked ? checkboxRanged.disabled = true 
                : checkboxRanged.disabled = false

            // if( !checkboxMelee.checked && hero['attackType']!=='Melee' ){
            //     targetHero.classList.remove('hidden')
            // }
        })
    } catch (error) {
        console.error(error)
    }
}

async function filterRanged(){
    try {
        const data = await getHeroes()
        data.forEach(hero => {
            const targetHero = document.querySelector(`.${hero['name']}`)


            if( checkboxStr.checked ){
                let results = data.filter(elem => elem['type']==='Strength')
                results.forEach(elem => {
                    if( elem['attackType']!=='Ranged' ){
                        document.querySelector(`.${elem['name']}`).classList.toggle('hidden')
                    }
                })
            }

            // if( checkboxStr.checked ){
            //     hero['type']==='Strength' ? targetHero.classList.remove('hidden') 
            //         : targetHero.classList.add('hidden')
            // }

            // if( checkboxAgi.checked ){
            //     hero['type']==='Agility' ? targetHero.classList.remove('hidden') 
            //         : targetHero.classList.add('hidden')
            // }

            // if( checkboxInt.checked ){
            //     hero['type']==='Intelligence' ? targetHero.classList.remove('hidden') 
            //         : targetHero.classList.add('hidden')
            // }

            // if( checkboxUni.checked ){
            //     hero['type']==='Universal' ? targetHero.classList.remove('hidden') 
            //         : targetHero.classList.add('hidden')
            // }
            
            checkboxRanged.checked ? checkboxMelee.disabled = true 
                : checkboxMelee.disabled = false

            if( !checkboxRanged.checked && hero['attackType']!=='Ranged' ){
                targetHero.classList.remove('hidden')
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
            const targetHero = document.querySelector(`.${hero['name']}`)

            if( hero['type']!=='Strength' ) targetHero.classList.toggle('hidden')

        })
    } catch (error) {
        console.error(error)
    }
}

async function filterAgi(){
    try {
        const data = await getHeroes()
        data.forEach(hero => {
            const targetHero = document.querySelector(`.${hero['name']}`)

            if( hero['type']!=='Agility' ){
                targetHero.classList.add('hidden')
            }else{
                targetHero.classList.remove('hidden')
            }

            if( !checkboxAgi.checked && hero['type']!=='Agility' ){
                targetHero.classList.remove('hidden')
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
            const targetHero = document.querySelector(`.${hero['name']}`)

            if( hero['type']!=='Intelligence' ){
                targetHero.classList.add('hidden')
            }else{
                targetHero.classList.remove('hidden')
            }

            if( !checkboxInt.checked && hero['type']!=='Intelligence' ){
                targetHero.classList.remove('hidden')
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
            const targetHero = document.querySelector(`.${hero['name']}`)

            if( hero['type']!=='Universal' ){
                targetHero.classList.add('hidden')
            }else{
                targetHero.classList.remove('hidden')
            }

            if( !checkboxUni.checked && hero['type']!=='Universal' ){
                targetHero.classList.remove('hidden')
            }
        })
    } catch (error) {
        console.error(error)
    }
}