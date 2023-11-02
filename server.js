const express = require('express')
const app = express()
const PORT = 8000


const heroes = {
    'abaddon': {
        'type': 'Universal',
        'mainInfo': `SHIELDS HIS ALLIES OR HIMSELF FROM ATTACKS`,
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Mist Coil', 'Aphotic Shield', 'Curse of Avernus', 'Borrowed time']
    },
    'alchemist': {
        'type': 'Strength',
        'mainInfo': `EARNS EXTRA GOLD FROM UNIT KILLS AND BOUNTY RUNES`,
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Acid Spray', 'Unstable Concoction', 'Corrosive Weaponry', 'Chemical Rage']
    },
    'ancient apparition': {
        'type': 'Intelligence',
        'mainInfo': `LAUNCHES A POWERFUL ICY BLAST FROM ANYWHERE ON THE MAP`,
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Cold Feet', 'Ice Vortex', 'Chilling Touch', 'Ice Blast']
    },
    'antimage': {
        'type': 'Agility',
        'mainInfo': `SLASHES HIS FOES WITH MANA-DRAINING ATTACKS`,
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Mana Break', 'Blink', 'Counterspell', 'Mana Void']
    },
    'arc warden': {
        'type': 'Agility',
        'mainInfo': `CREATES A COPY OF HIMSELF TO SPLIT PUSH`,
        'attackType': 'Ranged',
        'complexity': 3,
        'spells': ['Flux', 'Magnetic Field', 'Spark Wraith', 'Tempest Double']
    },
    'axe': {
        'type': 'Strength',
        'mainInfo': `TAUNTS AND FORCES ENEMIES TO ATTACK HIM`,
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ["Berserker's Call", 'Battle Hunger', 'Counter Helix', 'Culling Blade']
    },
    'bane': {
        'type': 'Universal',
        'mainInfo': `PUTS HIS ENEMIES TO SLEEP, INCAPACITATING THEM`,
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Enfeeble', 'Brain Sap', 'Nightmare', "Fiend's Grip"]
    },
    'batrider': {
        'type': 'Universal',
        'mainInfo': `CAN LASSO AN ENEMY AWAY FROM HIS TEAM`,
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Sticky Napalm', 'Flamebreak', 'Firefly', 'Flaming Lasso']
    },
    'beastmaster': {
        'type': 'Universal',
        'mainInfo': `SUMMONS BEASTS TO AID HIS HUNT`,
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ["Wild Axes", ["Call of the Wild Boar", "Call of the Wild Hawk"], "Inner Beast", "Primal Roar"]
    },
    'bloodseeker': {
        'type': 'Agility',
        'mainInfo': `CHASES DOWN LOW HEALTH ENEMIES WITH INCREASED SPEED`,
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Bloodrage', 'Blood Rite', 'Thirst', 'Rupture']
    },
    'bounty hunter': {
        'type': 'Agility',
        'mainInfo': `LOOTS AND COLLECTS BOUNTIES OFF OF HIS ENEMIES`,
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Shuriken Toss', 'Jinada', 'Shadow Walk', 'Track']
    },
    'brewmaster': {
        'type': 'Universal',
        'mainInfo': 'SPLITS INTO THREE ELEMENTAL SPIRITS WITH UNIQUE ABILITIES',
        'attackType': 'Melee',
        'complexity': 3,
        'spells': ['Thunder Clap', 'Cinder Brew', 'Drunken Brawler', 'Primal Split']
    },
    'bristleback': {
        'type': 'Strength',
        'mainInfo': 'TAKES REDUCED DAMAGE WHEN FACING AWAY FROM ENEMIES',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Viscous Nasal Goo', 'Quill Spray', 'Bristleback', 'Warpath']
    },
    'broodmother': {
        'type': 'Universal',
        'mainInfo': 'HUNTS WITH HER ARMY OF SPIDERLINGS',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Insatiable Hunger', 'Spin Web', 'Silken Bola', 'Spawn Spiderlings']
    },
    'centaur warrunner': {
        'type': 'Strength',
        'mainInfo': 'REFLECTS DAMAGE BACK TO HIS ATTACKERS',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Hoof Stomp', 'Double Edge', 'Retaliate', 'Stampede']
    },
    'chaos knight': {
        'type': 'Strength',
        'mainInfo': 'HAS STRONG BUT RANDOM DAMAGE OUTPUT',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Chaos Bolt', 'Reality Rift', 'Chaos Strike', 'Phantasm']
    },
    'chen': {
        'type': 'Universal',
        'mainInfo': 'CONVERTS CREEPS TO HIS CAUSE, BUILDING AN ARMY',
        'attackType': 'Ranged',
        'complexity': 3,
        'spells': ['Penitence', 'Holy Persuasion', 'Divine Favor', 'Hand of God']
    },
    'clinkz': {
        'type': 'Agility',
        'mainInfo': 'STALKS INVISIBLY TO AMBUSH LONE ENEMIES',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Strafe', 'Tar Bomb', 'Death Pact', 'Skeleton Walk']
    },
    'clockwerk': {
        'type': 'Universal',
        'mainInfo': 'LAUNCHES HIMSELF INTO ENEMIES WITH HIS HOOKSHOT',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Battery Assault', 'Power Cogs', 'Rocket Flare', 'Hookshot']
    },
    'crystal maiden': {
        'type': 'Intelligence',
        'mainInfo': 'UNLEASHES A HIGH DAMAGE BLIZZARD UPON HER FOES',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Crystal Nova', 'Frostbite', 'Arcane Aura', 'Freezing Field']
    },
    'dark seer': {
        'type': 'Universal',
        'mainInfo': "PULLS AND MANIPULATES HIS ENEMIES' POSITIONS",
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Vacuum', 'Ion Shell', 'Surge', 'Wall of Replica']
    },
    'dark willow': {
        'type': 'Universal',
        'mainInfo': 'HAS AN ARSENAL OF DISABLES AT HER DISPOSAL',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Bramble Maze', 'Shadow Realm', 'Cursed Crown', ['Bedlam', 'Terrorize']]
    },
    'dawnbreaker': {
        'type': 'Strength',
        'mainInfo': 'LEAPS TO AID HER ALLIES, WHEREVER THEY ARE ON THE MAP',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Starbreaker', 'Celestial Hammer', 'Luminosity', 'Solar Guardian']
    },
    'dazzle': {
        'type': 'Universal',
        'mainInfo': 'POWERFUL HEALER WHO CAN BRIEFLY PREVENT DEATH',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Poison Touch', 'Shallow Grave', 'Shadow Wave', 'Bad Juju']
    },
    'death prophet': {
        'type': 'Intelligence',
        'mainInfo': 'SUMMONS AN ARMY OF GHOSTS TO ATTACK',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Crypt Swarm', 'Silence', 'Spirit Siphon', 'Exorcism']
    },
    'disruptor': {
        'type': 'Intelligence',
        'mainInfo': 'TRAPS AND SILENCES FOES IN HIS STATIC STORM',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Thunder Strike', 'Glimpse', 'Kinetic Field', 'Static Storm']
    },
    'doom': {
        'type': 'Strength',
        'mainInfo': 'CAN PREVENT SINGLE OR MULTIPLE ENEMIES FROM USING ABILTIES AND ITEMS',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Devour', 'Scorched Earth', 'Infernal Blade', 'Doom']
    },
    'dragon knight': {
        'type': 'Strength',
        'mainInfo': 'TRANSFORMS INTO A FORMIDABLE RANGED DRAGON',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Breathe Fire', 'Dragon Tail', 'Dragon Blood', 'Elder Dragon Form']
    },
    'drow ranger': {
        'type': 'Agility',
        'mainInfo': 'SLOWS WITH HER FROST-TIPPED ARROWS',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Frost Arrows', 'Gust', 'Multishot', 'Marksmanship']
    },
    'unknown': {
        'message': 'data not available'
    }
}

// 'name': {
//     'type': ,
//     'mainInfo': ,
//     'attackType': ,
//     'complexity': ,
//     'spells': []
// },


app.get('/', (req,res) => {
    res.send('<h1>Dota heroes API</h1>')
})

app.get('/api', (req,res) => {
    res.json(heroes)
})

app.get('/api/:dotaHero', (req,res) => {
    const dotaHero = req.params.dotaHero.toLowerCase()
    if(heroes[dotaHero]){
        res.json(heroes[dotaHero])
    }else{
        res.json(heroes['unknown'])
    }
})


app.listen(process.env.PORT || PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})