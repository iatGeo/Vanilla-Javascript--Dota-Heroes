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
        'spells': ['Acid Spray', 'Unstable Concoction', 'Corrosive Weaponry', 'Chemical Rage', {'shard': 'Berserk Potion'}]
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
        'spells': ['Mana Break', 'Blink', 'Counterspell', 'Mana Void', {'shard': 'Counterspell Ally', 'scepter': 'Blink Fragment'}]
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
        'spells': ["Wild Axes", ["Call of the Wild Boar", "Call of the Wild Hawk"], "Inner Beast", "Primal Roar", {'scepter': 'Drums of Slom'}]
    },
    'bloodseeker': {
        'type': 'Agility',
        'mainInfo': `CHASES DOWN LOW HEALTH ENEMIES WITH INCREASED SPEED`,
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Bloodrage', 'Blood Rite', 'Thirst', 'Rupture', {'scepter': 'Blood Mist'}]
    },
    'bounty hunter': {
        'type': 'Agility',
        'mainInfo': `LOOTS AND COLLECTS BOUNTIES OFF OF HIS ENEMIES`,
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Shuriken Toss', 'Jinada', 'Shadow Walk', 'Track', {'shard': 'Friendly Shadow'}]
    },
    'brewmaster': {
        'type': 'Universal',
        'mainInfo': 'SPLITS INTO THREE ELEMENTAL SPIRITS WITH UNIQUE ABILITIES',
        'attackType': 'Melee',
        'complexity': 3,
        'spells': ['Thunder Clap', 'Cinder Brew', 'Drunken Brawler', 'Primal Split', {'scepter': 'Primal Companion'}]
    },
    'bristleback': {
        'type': 'Strength',
        'mainInfo': 'TAKES REDUCED DAMAGE WHEN FACING AWAY FROM ENEMIES',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Viscous Nasal Goo', 'Quill Spray', 'Bristleback', 'Warpath', {'shard': 'Hairball'}]
    },
    'broodmother': {
        'type': 'Universal',
        'mainInfo': 'HUNTS WITH HER ARMY OF SPIDERLINGS',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Insatiable Hunger', 'Spin Web', 'Silken Bola', 'Spawn Spiderlings', {'scepter': "Spinner's Snare"}]
    },
    'centaur warrunner': {
        'type': 'Strength',
        'mainInfo': 'REFLECTS DAMAGE BACK TO HIS ATTACKERS',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Hoof Stomp', 'Double Edge', 'Retaliate', 'Stampede', {'scepter': 'Hitch a Ride'}]
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
        'spells': ['Strafe', 'Tar Bomb', 'Death Pact', 'Skeleton Walk', {'shard': 'Burning Barrage', 'scepter': 'Burning Army'}]
    },
    'clockwerk': {
        'type': 'Universal',
        'mainInfo': 'LAUNCHES HIMSELF INTO ENEMIES WITH HIS HOOKSHOT',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Battery Assault', 'Power Cogs', 'Rocket Flare', 'Hookshot', {'shard': 'Jetpack', 'scepter': 'Overclocking'}]
    },
    'crystal maiden': {
        'type': 'Intelligence',
        'mainInfo': 'UNLEASHES A HIGH DAMAGE BLIZZARD UPON HER FOES',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Crystal Nova', 'Frostbite', 'Arcane Aura', 'Freezing Field', {'shard': 'Crystal Clone'}]
    },
    'dark seer': {
        'type': 'Universal',
        'mainInfo': "PULLS AND MANIPULATES HIS ENEMIES' POSITIONS",
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Vacuum', 'Ion Shell', 'Surge', 'Wall of Replica', {'scepter' : 'Normal Punch'}]
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
        'spells': ['Breathe Fire', 'Dragon Tail', 'Dragon Blood', 'Elder Dragon Form', {'shard': 'Fireball'}]
    },
    'drow ranger': {
        'type': 'Agility',
        'mainInfo': 'SLOWS WITH HER FROST-TIPPED ARROWS',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Frost Arrows', 'Gust', 'Multishot', 'Marksmanship', {'shard': 'Glacier'}]
    },
    'earth spirit': {
        'type': 'Strength',
        'mainInfo': 'DISABLES AND REPOSITIONS HIS ENEMIES',
        'attackType': 'Melee',
        'complexity': 3,
        'spells': ['Boulder Smash', 'Rolling Boulder', 'Geomagnetic Grip', 'Stone Remnant', 'Magnetize', {'scepter': 'Enchant Remnant'}]
    },
    'earthshaker': {
        'type': 'Stength',
        'mainInfo': 'DISRUPTS ENEMY TEAM WITH HIS CHAIN STUNS',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Fissure', 'Enchant Totem', 'Aftershock', 'Echo Slam']
    },
    'elder titan': {
        'type': 'Strength',
        'mainInfo': 'DAMAGES AND DISABLES WITH HIS ASTRAL SPIRIT',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Echo Stomp', 'Astral Spirit', 'Natural Order', 'Earth Splitter']
    },
    'ember spirit': {
        'type': 'Agility',
        'mainInfo': 'RAPIDLY STRIKES AND CHAINS HIS FOES',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Searing Chains', 'Sleight of Fist', 'Flame Guard', 'Activate Fire Remnant', 'Fire Remnant']
    },
    'enchantress': {
        'type': 'Intelligence',
        'mainInfo': 'ENCHANTS NEUTRAL CREEPS TO DO HER BIDDING',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Impetus', 'Enchant', "Nature's Attendants", 'Untouchable', {'shard': 'Sproink', 'scepter': 'Little Friends'}]
    },
    'enigma': {
        'type': 'Universal',
        'mainInfo': 'TRAPS AND DAMAGES ENEMIES IN A BLACK HOLE',
        'attackType': 'Ranged',
        'complexity': '2',
        'spells': ['Malefice', 'Demonic Summoning', 'Midnight Pulse', 'Black Hole']
    },
    'faceless void': {
        'type': 'Agility',
        'mainInfo': 'CAN FREEZE HIS ENEMIES IN TIME',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Time Walk', 'Time Dilation', 'Time Lock', 'Chronosphere', {'shard': 'Reverse Time Walk'}]
    },
    'grimstroke': {
        'type': 'Intelligence',
        'mainInfo': 'DISABLES ENEMIES WITH A SWIPE OF HIS BRUSH',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Stroke of Fate', "Phantom's Embrace", 'Ink Swell', 'Soulbind', {'scepter': 'Dark Portrait'}]
    },
    'gyrocopter': {
        'type': 'Agility',
        'mainInfo': 'BARRAGES WITH HIS CANNON AND HOMING MISSILES',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Rocket Barrage', 'Homing Missile', 'Flak Cannon', 'Call Down']
    },
    'hoodwink': {
        'type': 'Agility',
        'mainInfo': 'SHACKLES HER ENEMIES TO TREES',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Acorn Shot', 'Bushwhack', 'Scurry', 'Sharpshooter', {'shard': "Hunter's Boomerang", 'scepter': 'Decoy'}]
    },
    'huskar': {
        'type': 'Strength',
        'mainInfo': 'SACRIFICES HIS HEALTH TO DEAL MORE DAMAGE',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Inner Fire', 'Burning Spear', "Berserker's Blood", 'Life Break']
    },
    'invoker': {
        'type': 'Universal',
        'mainInfo': 'WEAVES MAGIC WITH AN ARRAY OF SPELL COMBOS',
        'attackType': 'Ranged',
        'complexity': 3,
        'spells': ['Quas', 'Wex', 'Exort', 'Invoke', ['Cold Snap', 'Ghost Walk', 'Ice Wall', 'E.M.P.', 'Tornado', 'Alacrity', 'Sunstrike', 'Forge Spirit', 'Chaos Meteor', 'Defeaning Blast']]
    },
    'io': {
        'type': 'Universal',
        'mainInfo': 'LINKS TO ITS ALLIES TO BUFF THEM',
        'attackType': 'Ranged',
        'complexity': 3,
        'spells': ['Tether', 'Spirits', 'Overcharge', ['Spirits In', 'Spirits Out'], 'Relocate']
    },
    'jakiro': {
        'type': 'Intelligence',
        'mainInfo': 'FREEZES AND BURNS ENEMIES WITH MAGIC',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Dual Breath', 'Ice Path', 'Liquid Fire', 'Macropyre', {'shard': 'Liquid Frost'}]
    },
    'juggernaut': {
        'type': 'Agility',
        'mainInfo': 'SLICES THROUGH HIS ENEMIES WITH PRECISE STRIKES',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Blade Fury', 'Healing Ward', 'Blade Dance', 'Omnislash', {'scepter': 'Swiftslash'}]
    },
    'keeper of the light': {
        'type': 'Intelligence',
        'mainInfo': 'PROVIDES INSTANT MANA TO ALLIES',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Illuminate', 'Blinding Light', 'Chakra Magic', 'Solar Bind', 'Spirit Form', {'shard': 'Recall', 'scepter': 'Will-O-Wisp'}]
    },
    'kunkka': {
        'type': 'Strength',
        'mainInfo': 'DISRUPTS ENEMY POSITIONING AND DISABLES THEM',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Torrent', 'Tidebringer', 'X Marks the Spot', 'Ghostship', {'shard': 'Tidal Wave', 'scepter': 'Torrent Storm'}]
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