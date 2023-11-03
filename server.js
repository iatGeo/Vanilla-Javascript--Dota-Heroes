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
    'legion commander': {
        'type': 'Strength',
        'mainInfo': 'INCREASES POWER WITH EACH DUEL VICTORY',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Overwhelming Odds', 'Press the Attack', 'Moment of Courage', 'Duel']
    },
    'leshrac': {
        'type': 'Intelligence',
        'mainInfo': 'CAN DEAL HEAVY DAMAGE IN AN AURA AROUND HIMSELF',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Split Earth', 'Diabolic Edict', 'Lighting Storm', 'Pulse Nova', {'scepter': 'Nihilism'}]
    },
    'lich': {
        'type': 'Intelligence',
        'mainInfo': 'UNLEASHES A POWERFUL ATTACK THAT BOUNCES BETWEEN ENEMIES',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Frost Blast', 'Frost Shield', 'Sinister Gaze', 'Chain Frost', {'shard': 'Ice Spire'}]
    },
    'lifestealer': {
        'type': 'Strength',
        'mainInfo': 'INFESTS OTHER UNITS FOR MOBILITY AND STRENGTH',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Rage', 'Feast', 'Ghoul Frenzy', 'Infest', {'shard': 'Open Wounds'}]
    },
    'lina': {
        'type': 'Intelligence',
        'mainInfo': 'INCREASES ATTACK AND SPEED WITH EVERY SPELL',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Dragon Slave', 'Light Strike Array', 'Fiery Soul', 'Laguna Blade', {'scepter': 'Flame Cloak'}]
    },
    'lion': {
        'type': 'Intelligence',
        'mainInfo': 'STEALS ENEMY MANA TO FUEL HIS OWN ABILITIES',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Earth Spike', 'Hex', 'Mana Drain', 'Finger of Death']
    },
    'lone druid': {
        'type': 'Universal',
        'mainInfo': 'COMMANDS A POWERFUL SPIRIT BEAR IN BATTLE',
        'attackType': 'Ranged',
        'complexity': 3,
        'spells': ['Summon Spirit Bear', 'Spirit Link', 'Savage Roar', 'True Form']
    },
    'luna': {
        'type': 'Agility',
        'mainInfo': 'TEARS INTO HER ENEMIES WITH BOUNCING ATTACKS',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Lucent Beam', 'Moon Glaives', 'Lunar Blessing', 'Eclipse']
    },
    'lycan': {
        'type': 'Universal',
        'mainInfo': 'SHAPESHIFTS INTO A FEROCIOUS BEAST',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Summon Wolves', 'Howl', 'Feral Impulse', 'Shapeshift', {'scepter': 'Wolf Bite'}]
    },
    'magnus': {
        'type': 'Universal',
        'mainInfo': 'CHARGES IN TO REPOSITION HIS ENEMIES',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Shockwave', 'Empower', 'Skewer', 'Reverse Polarity', {'scepter': 'Horn Toss'}]
    },
    'marci': {
        'type': 'Universal',
        'mainInfo': 'DASHES AROUND PUMMELING ENEMIES WITH RAPID ATTACKS',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Dispose', 'Rebound', 'Sidekick', 'Unleash']
    },
    'mars': {
        'type': 'Strength',
        'mainInfo': 'TRAPS HIS FOES IN AN INESCAPABLE ARENA',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Spear of Mars', "God's Rebuke", 'Bulwark', 'Arena of Blood']
    },
    'medusa': {
        'type': 'Agility',
        'mainInfo': 'IMMOBILIZES HER ENEMIES WITH HER STONE GAZE',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Split Shot', 'Mystic Snake', 'Mana Shiel', 'Stone Gaze', {'scepter': 'Cold Blooded'}]
    },
    'meepo': {
        'type': 'Agility',
        'mainInfo': 'FIVE ARE STRONGER THAN ONE',
        'attackType': 'Melee',
        'complexity': 3,
        'spells': ['Earthbind', 'Poof', 'Ransack', 'Divided We Stand', {'shard': 'Dig', 'scepter': 'Megameepo'}]
    },
    'mirana': {
        'type': 'Universal',
        'mainInfo': 'STUNS ENEMIES WITH PRECISE ARROWS FROM AFAR',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Starstorm', 'Sacred Arrow', 'Leap', 'Moonlight Shadow']
    },
    'monkey king': {
        'type': 'Agility',
        'mainInfo': 'SPRINGS FROM THE COVER OF THE TREE TOPS',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Boundless Strike', 'Tree Dance', 'Jingu Mastery', "Wukong's Command"]
    },
    'morphling': {
        'type': 'Agility',
        'mainInfo': 'RIDES THE WAVES TO FLANK ENEMIES',
        'attackType': 'Ranged',
        'complexity': 3,
        'spells': ['Waveform', ['Adaptive Strike (Agility)', 'Adaptive Strike (Strength)'], ['Attribute Shift (Agility Gain)', 'Attribute Shift (Strength Gain)'], 'Morph']
    },
    'muerta': {
        'type': 'Intelligence',
        'mainInfo': 'BLASTS FEARSOME TRICKSHOTS AND UNLEASHES ETHEREAL RUIN',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Dead Shot', 'The Calling', 'Gunslinger', 'Pierce the Veil', {'scepter': 'Parting Shot'}]
    },
    'naga siren': {
        'type': 'Agility',
        'mainInfo': 'ABLE TO CAPITIVATE AND DISABLE ENEMIES WITH HER SONG',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Mirror Image', 'Ensnare', 'Rip Tide', 'Song of the Siren', {'scepter': 'Reel In'}]
    },
    "nature's prophet": {
        'type': 'Intelligence',
        'mainInfo': 'ABLE TO TELEPORT TO ANY LOCATION ON THE MAP AT WILL',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Sprout', 'Teleportation', "Nature's Call", 'Wrath of Nature', {'shard': 'Curse of the Oldgrowth'}]
    },
    'necrophos': {
        'type': 'Intelligence',
        'mainInfo': 'DAMAGES ENEMIES AND HEALS ALLIES SIMULTANEOUSLY',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Death Pulse', 'Ghost Shroud', 'Heartstopper Aura', "Reaper's Scythe", {'shard': 'Death Seeker'}]
    },
    'night stalker': {
        'type': 'Strength',
        'mainInfo': 'ENPOWERED BY THE SHADOWS OF NIGHTFALL',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Void', 'Crippling Fear', 'Hunter in the Night', 'Dark Ascension']
    },
    'nyx assassin': {
        'type': 'Universal',
        'mainInfo': 'REFLECTS ENEMY DAMAGE AND STUNS',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Impale', 'Mind Flare', 'Spiked Carapace', 'Vendetta', {'scepter': 'Burrow'}]
    },
    'ogre magi': {
        'type': 'Strength',
        'mainInfo': 'USES A TOUCH OF LUCK TO AMPLIFY HIS SKILLS',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Fireblast', 'Ignite', 'Bloodlust', 'Dumb Luck', 'Multicast', {'shard': 'Fire Shield', 'scepter': 'Unrefined Fireblast'}]
    },
    'omniknight': {
        'type': 'Strength',
        'mainInfo': 'TANKY FRONTLINER WHO PROTECTS AND HEALS HIS ALLIES',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Purification', 'Repel', 'Hammer of Purity', 'Guardian Angel']
    },
    'oracle': {
        'type': 'Intelligence',
        'mainInfo': 'ALTERS THE FATES OF HEROES WITH HIS BUFFS AND NUKES',
        'attackType': 'Ranged',
        'complexity': 3,
        'spells': ["Fortune's End", "Fate's Edict", 'Purifying Flames', 'False Promise', {'shard': 'Rain of Destiny'}]
    },
    'outworld destroyer': {
        'type': 'Intelligence',
        'mainInfo': 'CAN IMPRISON A HERO, MAKING THEM INVULNERABLE',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Arcane Orb', 'Astral Imprisonment', 'Essence Flux', "Sanity's Eclipse"]
    },
    'pangolier': {
        'type': 'Universal',
        'mainInfo': 'DASHES AND ROLLS IN TO DISRUPT ENEMY MOVEMENTS',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Swashbuckle', 'Shield Crash', 'Lucky Shot', 'Rolling Thunder', {'shard': 'Roll Up'}]
    },
    'phantom assassin': {
        'type': 'Agility',
        'mainInfo': 'BLINKS ONTO HER FOES WITH CRITICAL STRIKES',
        'attackType': 'Melee',
        'complexity': '1',
        'spells': ['Stifling Dagger', 'Phantom Strike', 'Blur', 'Coup de Grace', {'shard': 'Fan of Knives'}]
    },
    'phantom lancer': {
        'type': 'Agility',
        'mainInfo': 'CREATES ILLUSIONS OF HIMSELF TO TRICK OR ATTACK FOES',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Spirit Lance', 'Doppelganger', 'Phantom Rush', 'Juxtapose']
    },
    'phoenix': {
        'type': 'Universal',
        'mainInfo': 'HEALS AND DAMAGES AT THE SACRIFICE OF ITS OWN HEALTH',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Icarus Dive', 'Fire Spirits', 'Sun Ray', 'Supernova']
    },
    'primal beast': {
        'type': 'Strength',
        'mainInfo': 'STOMPS OVER EVERYTHING AND SMASHES ENEMIES INTO MESSY BITS',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Onslaught', 'Trample', 'Uproar', 'Pulverize', {'shard': 'Rock Throw'}]
    },
    'puck': {
        'type': 'Intelligence',
        'mainInfo': 'ORBS TO ENEMIES AND SILENCES THEM',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Illusory Orb', 'Waning Rift', 'Phase Shift', 'Dream Coil']
    },
    'pudge': {
        'type': 'Strength',
        'mainInfo': 'HOOKS AND PULLS ENEMIES TOWARDS HIM',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Meat Hook', 'Rot', 'Flesh Heap', 'Dismember']
    },
    'pugna': {
        'type': 'Intelligence',
        'mainInfo': 'DRAINS ENEMY LIFE TO HEAL HIMSELF',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Nether Blast', 'Decrepify', 'Nether Ward', 'Life Drain']
    },
    'queen of pain': {
        'type': 'Intelligence',
        'mainInfo': 'BLINKS IN TO DEAL MASSIVE MAGICAL DAMAGE',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Shadow Strike', 'Blink', 'Scream of Pain', 'Sonic Wave']
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