const heroes = [
    {
        'name': 'abaddon',
        'type': 'Universal',
        'mainInfo': `SHIELDS HIS ALLIES OR HIMSELF FROM ATTACKS`,
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Mist Coil', 'Aphotic Shield', 'Curse of Avernus', 'Borrowed time']
    },
    {
        'name': 'alchemist',
        'type': 'Strength',
        'mainInfo': `EARNS EXTRA GOLD FROM UNIT KILLS AND BOUNTY RUNES`,
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Acid Spray', 'Unstable Concoction', 'Corrosive Weaponry', 'Chemical Rage', {'shard': 'Berserk Potion'}]
    },
    {
        'name': 'ancient_apparition',
        'type': 'Intelligence',
        'mainInfo': `LAUNCHES A POWERFUL ICY BLAST FROM ANYWHERE ON THE MAP`,
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Cold Feet', 'Ice Vortex', 'Chilling Touch', 'Ice Blast']
    },
    {
        'name': 'antimage',
        'type': 'Agility',
        'mainInfo': `SLASHES HIS FOES WITH MANA-DRAINING ATTACKS`,
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Mana Break', 'Blink', 'Counterspell', 'Mana Void', {'shard': 'Counterspell Ally', 'scepter': 'Blink Fragment'}]
    },
    {
        'name': 'arc_warden',
        'type': 'Agility',
        'mainInfo': `CREATES A COPY OF HIMSELF TO SPLIT PUSH`,
        'attackType': 'Ranged',
        'complexity': 3,
        'spells': ['Flux', 'Magnetic Field', 'Spark Wraith', 'Tempest Double']
    },
    {
        'name': 'axe',
        'type': 'Strength',
        'mainInfo': `TAUNTS AND FORCES ENEMIES TO ATTACK HIM`,
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ["Berserker's Call", 'Battle Hunger', 'Counter Helix', 'Culling Blade']
    },
    {
        'name': 'bane',
        'type': 'Universal',
        'mainInfo': `PUTS HIS ENEMIES TO SLEEP, INCAPACITATING THEM`,
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Enfeeble', 'Brain Sap', 'Nightmare', "Fiend's Grip"]
    },
    {
        'name': 'batrider',
        'type': 'Universal',
        'mainInfo': `CAN LASSO AN ENEMY AWAY FROM HIS TEAM`,
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Sticky Napalm', 'Flamebreak', 'Firefly', 'Flaming Lasso']
    },
    {
        'name': 'beastmaster',
        'type': 'Universal',
        'mainInfo': `SUMMONS BEASTS TO AID HIS HUNT`,
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ["Wild Axes", ["Call of the Wild Boar", "Call of the Wild Hawk"], "Inner Beast", "Primal Roar", {'scepter': 'Drums of Slom'}]
    },
    {
        'name': 'bloodseeker',
        'type': 'Agility',
        'mainInfo': `CHASES DOWN LOW HEALTH ENEMIES WITH INCREASED SPEED`,
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Bloodrage', 'Blood Rite', 'Thirst', 'Rupture', {'scepter': 'Blood Mist'}]
    },
    {
        'name': 'bounty_hunter',
        'type': 'Agility',
        'mainInfo': `LOOTS AND COLLECTS BOUNTIES OFF OF HIS ENEMIES`,
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Shuriken Toss', 'Jinada', 'Shadow Walk', 'Track', {'shard': 'Friendly Shadow'}]
    },
    {
        'name': 'brewmaster',
        'type': 'Universal',
        'mainInfo': 'SPLITS INTO THREE ELEMENTAL SPIRITS WITH UNIQUE ABILITIES',
        'attackType': 'Melee',
        'complexity': 3,
        'spells': ['Thunder Clap', 'Cinder Brew', 'Drunken Brawler', 'Primal Split', {'scepter': 'Primal Companion'}]
    },
    {
        'name': 'bristleback',
        'type': 'Strength',
        'mainInfo': 'TAKES REDUCED DAMAGE WHEN FACING AWAY FROM ENEMIES',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Viscous Nasal Goo', 'Quill Spray', 'Bristleback', 'Warpath', {'shard': 'Hairball'}]
    },
    {
        'name': 'broodmother',
        'type': 'Universal',
        'mainInfo': 'HUNTS WITH HER ARMY OF SPIDERLINGS',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Insatiable Hunger', 'Spin Web', 'Silken Bola', 'Spawn Spiderlings', {'scepter': "Spinner's Snare"}]
    },
    {
        'name': 'centaur_warrunner',
        'type': 'Strength',
        'mainInfo': 'REFLECTS DAMAGE BACK TO HIS ATTACKERS',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Hoof Stomp', 'Double Edge', 'Retaliate', 'Stampede', {'scepter': 'Hitch a Ride'}]
    },
    {
        'name': 'chaos_knight',
        'type': 'Strength',
        'mainInfo': 'HAS STRONG BUT RANDOM DAMAGE OUTPUT',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Chaos Bolt', 'Reality Rift', 'Chaos Strike', 'Phantasm']
    },
    {
        'name': 'chen',
        'type': 'Universal',
        'mainInfo': 'CONVERTS CREEPS TO HIS CAUSE, BUILDING AN ARMY',
        'attackType': 'Ranged',
        'complexity': 3,
        'spells': ['Penitence', 'Holy Persuasion', 'Divine Favor', 'Hand of God']
    },
    {
        'name': 'clinkz',
        'type': 'Agility',
        'mainInfo': 'STALKS INVISIBLY TO AMBUSH LONE ENEMIES',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Strafe', 'Tar Bomb', 'Death Pact', 'Skeleton Walk', {'shard': 'Burning Barrage', 'scepter': 'Burning Army'}]
    },
    {
        'name': 'clockwerk',
        'type': 'Universal',
        'mainInfo': 'LAUNCHES HIMSELF INTO ENEMIES WITH HIS HOOKSHOT',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Battery Assault', 'Power Cogs', 'Rocket Flare', 'Hookshot', {'shard': 'Jetpack', 'scepter': 'Overclocking'}]
    },
    {
        'name': 'crystal_maiden',
        'type': 'Intelligence',
        'mainInfo': 'UNLEASHES A HIGH DAMAGE BLIZZARD UPON HER FOES',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Crystal Nova', 'Frostbite', 'Arcane Aura', 'Freezing Field', {'shard': 'Crystal Clone'}]
    },
    {
        'name': 'dark_seer',
        'type': 'Universal',
        'mainInfo': "PULLS AND MANIPULATES HIS ENEMIES' POSITIONS",
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Vacuum', 'Ion Shell', 'Surge', 'Wall of Replica', {'scepter' : 'Normal Punch'}]
    },
    {
        'name': 'dark_willow',
        'type': 'Universal',
        'mainInfo': 'HAS AN ARSENAL OF DISABLES AT HER DISPOSAL',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Bramble Maze', 'Shadow Realm', 'Cursed Crown', ['Bedlam', 'Terrorize']]
    },
    {
        'name': 'dawnbreaker',
        'type': 'Strength',
        'mainInfo': 'LEAPS TO AID HER ALLIES, WHEREVER THEY ARE ON THE MAP',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Starbreaker', 'Celestial Hammer', 'Luminosity', 'Solar Guardian']
    },
    {
        'name': 'dazzle',
        'type': 'Universal',
        'mainInfo': 'POWERFUL HEALER WHO CAN BRIEFLY PREVENT DEATH',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Poison Touch', 'Shallow Grave', 'Shadow Wave', 'Bad Juju']
    },
    {
        'name': 'death_prophet',
        'type': 'Intelligence',
        'mainInfo': 'SUMMONS AN ARMY OF GHOSTS TO ATTACK',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Crypt Swarm', 'Silence', 'Spirit Siphon', 'Exorcism']
    },
    {
        'name': 'disruptor',
        'type': 'Intelligence',
        'mainInfo': 'TRAPS AND SILENCES FOES IN HIS STATIC STORM',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Thunder Strike', 'Glimpse', 'Kinetic Field', 'Static Storm']
    },
    {
        'name': 'doom',
        'type': 'Strength',
        'mainInfo': 'CAN PREVENT SINGLE OR MULTIPLE ENEMIES FROM USING ABILTIES AND ITEMS',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Devour', 'Scorched Earth', 'Infernal Blade', 'Doom']
    },
    {
        'name': 'dragon_knight',
        'type': 'Strength',
        'mainInfo': 'TRANSFORMS INTO A FORMIDABLE RANGED DRAGON',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Breathe Fire', 'Dragon Tail', 'Dragon Blood', 'Elder Dragon Form', {'shard': 'Fireball'}]
    },
    {
        'name': 'drow_ranger',
        'type': 'Agility',
        'mainInfo': 'SLOWS WITH HER FROST-TIPPED ARROWS',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Frost Arrows', 'Gust', 'Multishot', 'Marksmanship', {'shard': 'Glacier'}]
    },
    {
        'name': 'earth_spirit',
        'type': 'Strength',
        'mainInfo': 'DISABLES AND REPOSITIONS HIS ENEMIES',
        'attackType': 'Melee',
        'complexity': 3,
        'spells': ['Boulder Smash', 'Rolling Boulder', 'Geomagnetic Grip', 'Stone Remnant', 'Magnetize', {'scepter': 'Enchant Remnant'}]
    },
    {
        'name': 'earthshaker',
        'type': 'Stength',
        'mainInfo': 'DISRUPTS ENEMY TEAM WITH HIS CHAIN STUNS',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Fissure', 'Enchant Totem', 'Aftershock', 'Echo Slam']
    },
    {
        'name': 'elder_titan',
        'type': 'Strength',
        'mainInfo': 'DAMAGES AND DISABLES WITH HIS ASTRAL SPIRIT',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Echo Stomp', 'Astral Spirit', 'Natural Order', 'Earth Splitter']
    },
    {
        'name': 'ember_spirit',
        'type': 'Agility',
        'mainInfo': 'RAPIDLY STRIKES AND CHAINS HIS FOES',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Searing Chains', 'Sleight of Fist', 'Flame Guard', 'Activate Fire Remnant', 'Fire Remnant']
    },
    {
        'name': 'enchantress',
        'type': 'Intelligence',
        'mainInfo': 'ENCHANTS NEUTRAL CREEPS TO DO HER BIDDING',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Impetus', 'Enchant', "Nature's Attendants", 'Untouchable', {'shard': 'Sproink', 'scepter': 'Little Friends'}]
    },
    {
        'name': 'enigma',
        'type': 'Universal',
        'mainInfo': 'TRAPS AND DAMAGES ENEMIES IN A BLACK HOLE',
        'attackType': 'Ranged',
        'complexity': '2',
        'spells': ['Malefice', 'Demonic Summoning', 'Midnight Pulse', 'Black Hole']
    },
    {
        'name': 'faceless_void',
        'type': 'Agility',
        'mainInfo': 'CAN FREEZE HIS ENEMIES IN TIME',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Time Walk', 'Time Dilation', 'Time Lock', 'Chronosphere', {'shard': 'Reverse Time Walk'}]
    },
    {
        'name': 'grimstroke',
        'type': 'Intelligence',
        'mainInfo': 'DISABLES ENEMIES WITH A SWIPE OF HIS BRUSH',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Stroke of Fate', "Phantom's Embrace", 'Ink Swell', 'Soulbind', {'scepter': 'Dark Portrait'}]
    },
    {
        'name': 'gyrocopter',
        'type': 'Agility',
        'mainInfo': 'BARRAGES WITH HIS CANNON AND HOMING MISSILES',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Rocket Barrage', 'Homing Missile', 'Flak Cannon', 'Call Down']
    },
    {
        'name': 'hoodwink',
        'type': 'Agility',
        'mainInfo': 'SHACKLES HER ENEMIES TO TREES',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Acorn Shot', 'Bushwhack', 'Scurry', 'Sharpshooter', {'shard': "Hunter's Boomerang", 'scepter': 'Decoy'}]
    },
    {
        'name': 'huskar',
        'type': 'Strength',
        'mainInfo': 'SACRIFICES HIS HEALTH TO DEAL MORE DAMAGE',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Inner Fire', 'Burning Spear', "Berserker's Blood", 'Life Break']
    },
    {
        'name': 'invoker',
        'type': 'Universal',
        'mainInfo': 'WEAVES MAGIC WITH AN ARRAY OF SPELL COMBOS',
        'attackType': 'Ranged',
        'complexity': 3,
        'spells': ['Quas', 'Wex', 'Exort', 'Invoke', ['Cold Snap', 'Ghost Walk', 'Ice Wall', 'E.M.P.', 'Tornado', 'Alacrity', 'Sunstrike', 'Forge Spirit', 'Chaos Meteor', 'Defeaning Blast']]
    },
    {
        'name': 'io',
        'type': 'Universal',
        'mainInfo': 'LINKS TO ITS ALLIES TO BUFF THEM',
        'attackType': 'Ranged',
        'complexity': 3,
        'spells': ['Tether', 'Spirits', 'Overcharge', ['Spirits In', 'Spirits Out'], 'Relocate']
    },
    {
        'name': 'jakiro',
        'type': 'Intelligence',
        'mainInfo': 'FREEZES AND BURNS ENEMIES WITH MAGIC',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Dual Breath', 'Ice Path', 'Liquid Fire', 'Macropyre', {'shard': 'Liquid Frost'}]
    },
    {
        'name': 'juggernaut',
        'type': 'Agility',
        'mainInfo': 'SLICES THROUGH HIS ENEMIES WITH PRECISE STRIKES',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Blade Fury', 'Healing Ward', 'Blade Dance', 'Omnislash', {'scepter': 'Swiftslash'}]
    },
    {
        'name': 'keeper_of_the_light',
        'type': 'Intelligence',
        'mainInfo': 'PROVIDES INSTANT MANA TO ALLIES',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Illuminate', 'Blinding Light', 'Chakra Magic', 'Solar Bind', 'Spirit Form', {'shard': 'Recall', 'scepter': 'Will-O-Wisp'}]
    },
    {
        'name': 'kunkka',
        'type': 'Strength',
        'mainInfo': 'DISRUPTS ENEMY POSITIONING AND DISABLES THEM',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Torrent', 'Tidebringer', 'X Marks the Spot', 'Ghostship', {'shard': 'Tidal Wave', 'scepter': 'Torrent Storm'}]
    },
    {
        'name': 'legion_commander',
        'type': 'Strength',
        'mainInfo': 'INCREASES POWER WITH EACH DUEL VICTORY',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Overwhelming Odds', 'Press the Attack', 'Moment of Courage', 'Duel']
    },
    {
        'name': 'leshrac',
        'type': 'Intelligence',
        'mainInfo': 'CAN DEAL HEAVY DAMAGE IN AN AURA AROUND HIMSELF',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Split Earth', 'Diabolic Edict', 'Lighting Storm', 'Pulse Nova', {'scepter': 'Nihilism'}]
    },
    {
        'name': 'lich',
        'type': 'Intelligence',
        'mainInfo': 'UNLEASHES A POWERFUL ATTACK THAT BOUNCES BETWEEN ENEMIES',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Frost Blast', 'Frost Shield', 'Sinister Gaze', 'Chain Frost', {'shard': 'Ice Spire'}]
    },
    {
        'name': 'lifestealer',
        'type': 'Strength',
        'mainInfo': 'INFESTS OTHER UNITS FOR MOBILITY AND STRENGTH',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Rage', 'Feast', 'Ghoul Frenzy', 'Infest', {'shard': 'Open Wounds'}]
    },
    {
        'name': 'lina',
        'type': 'Intelligence',
        'mainInfo': 'INCREASES ATTACK AND SPEED WITH EVERY SPELL',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Dragon Slave', 'Light Strike Array', 'Fiery Soul', 'Laguna Blade', {'scepter': 'Flame Cloak'}]
    },
    {
        'name': 'lion',
        'type': 'Intelligence',
        'mainInfo': 'STEALS ENEMY MANA TO FUEL HIS OWN ABILITIES',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Earth Spike', 'Hex', 'Mana Drain', 'Finger of Death']
    },
    {
        'name': 'lone_druid',
        'type': 'Universal',
        'mainInfo': 'COMMANDS A POWERFUL SPIRIT BEAR IN BATTLE',
        'attackType': 'Ranged',
        'complexity': 3,
        'spells': ['Summon Spirit Bear', 'Spirit Link', 'Savage Roar', 'True Form']
    },
    {
        'name': 'luna',
        'type': 'Agility',
        'mainInfo': 'TEARS INTO HER ENEMIES WITH BOUNCING ATTACKS',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Lucent Beam', 'Moon Glaives', 'Lunar Blessing', 'Eclipse']
    },
    {
        'name': 'lycan',
        'type': 'Universal',
        'mainInfo': 'SHAPESHIFTS INTO A FEROCIOUS BEAST',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Summon Wolves', 'Howl', 'Feral Impulse', 'Shapeshift', {'scepter': 'Wolf Bite'}]
    },
    {
        'name': 'magnus',
        'type': 'Universal',
        'mainInfo': 'CHARGES IN TO REPOSITION HIS ENEMIES',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Shockwave', 'Empower', 'Skewer', 'Reverse Polarity', {'scepter': 'Horn Toss'}]
    },
    {
        'name': 'marci',
        'type': 'Universal',
        'mainInfo': 'DASHES AROUND PUMMELING ENEMIES WITH RAPID ATTACKS',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Dispose', 'Rebound', 'Sidekick', 'Unleash']
    },
    {
        'name': 'mars',
        'type': 'Strength',
        'mainInfo': 'TRAPS HIS FOES IN AN INESCAPABLE ARENA',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Spear of Mars', "God's Rebuke", 'Bulwark', 'Arena of Blood']
    },
    {
        'name': 'medusa',
        'type': 'Agility',
        'mainInfo': 'IMMOBILIZES HER ENEMIES WITH HER STONE GAZE',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Split Shot', 'Mystic Snake', 'Mana Shiel', 'Stone Gaze', {'scepter': 'Cold Blooded'}]
    },
    {
        'name': 'meepo',
        'type': 'Agility',
        'mainInfo': 'FIVE ARE STRONGER THAN ONE',
        'attackType': 'Melee',
        'complexity': 3,
        'spells': ['Earthbind', 'Poof', 'Ransack', 'Divided We Stand', {'shard': 'Dig', 'scepter': 'Megameepo'}]
    },
    {
        'name': 'mirana',
        'type': 'Universal',
        'mainInfo': 'STUNS ENEMIES WITH PRECISE ARROWS FROM AFAR',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Starstorm', 'Sacred Arrow', 'Leap', 'Moonlight Shadow']
    },
    {
        'name': 'monkey_king',
        'type': 'Agility',
        'mainInfo': 'SPRINGS FROM THE COVER OF THE TREE TOPS',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Boundless Strike', 'Tree Dance', 'Jingu Mastery', "Wukong's Command"]
    },
    {
        'name': 'morphling',
        'type': 'Agility',
        'mainInfo': 'RIDES THE WAVES TO FLANK ENEMIES',
        'attackType': 'Ranged',
        'complexity': 3,
        'spells': ['Waveform', ['Adaptive Strike (Agility)', 'Adaptive Strike (Strength)'], ['Attribute Shift (Agility Gain)', 'Attribute Shift (Strength Gain)'], 'Morph']
    },
    {
        'name': 'muerta',
        'type': 'Intelligence',
        'mainInfo': 'BLASTS FEARSOME TRICKSHOTS AND UNLEASHES ETHEREAL RUIN',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Dead Shot', 'The Calling', 'Gunslinger', 'Pierce the Veil', {'scepter': 'Parting Shot'}]
    },
    {
        'name': 'naga_siren',
        'type': 'Agility',
        'mainInfo': 'ABLE TO CAPITIVATE AND DISABLE ENEMIES WITH HER SONG',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Mirror Image', 'Ensnare', 'Rip Tide', 'Song of the Siren', {'scepter': 'Reel In'}]
    },
    {
        'name': "natures_prophet",
        'type': 'Intelligence',
        'mainInfo': 'ABLE TO TELEPORT TO ANY LOCATION ON THE MAP AT WILL',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Sprout', 'Teleportation', "Nature's Call", 'Wrath of Nature', {'shard': 'Curse of the Oldgrowth'}]
    },
    {
        'name': 'necrophos',
        'type': 'Intelligence',
        'mainInfo': 'DAMAGES ENEMIES AND HEALS ALLIES SIMULTANEOUSLY',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Death Pulse', 'Ghost Shroud', 'Heartstopper Aura', "Reaper's Scythe", {'shard': 'Death Seeker'}]
    },
    {
        'name': 'night_stalker',
        'type': 'Strength',
        'mainInfo': 'ENPOWERED BY THE SHADOWS OF NIGHTFALL',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Void', 'Crippling Fear', 'Hunter in the Night', 'Dark Ascension']
    },
    {
        'name': 'nyx_assassin',
        'type': 'Universal',
        'mainInfo': 'REFLECTS ENEMY DAMAGE AND STUNS',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Impale', 'Mind Flare', 'Spiked Carapace', 'Vendetta', {'scepter': 'Burrow'}]
    },
    {
        'name': 'ogre_magi',
        'type': 'Strength',
        'mainInfo': 'USES A TOUCH OF LUCK TO AMPLIFY HIS SKILLS',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Fireblast', 'Ignite', 'Bloodlust', 'Dumb Luck', 'Multicast', {'shard': 'Fire Shield', 'scepter': 'Unrefined Fireblast'}]
    },
    {
        'name': 'omniknight',
        'type': 'Strength',
        'mainInfo': 'TANKY FRONTLINER WHO PROTECTS AND HEALS HIS ALLIES',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Purification', 'Repel', 'Hammer of Purity', 'Guardian Angel']
    },
    {
        'name': 'oracle',
        'type': 'Intelligence',
        'mainInfo': 'ALTERS THE FATES OF HEROES WITH HIS BUFFS AND NUKES',
        'attackType': 'Ranged',
        'complexity': 3,
        'spells': ["Fortune's End", "Fate's Edict", 'Purifying Flames', 'False Promise', {'shard': 'Rain of Destiny'}]
    },
    {
        'name': 'outworld_destroyer',
        'type': 'Intelligence',
        'mainInfo': 'CAN IMPRISON A HERO, MAKING THEM INVULNERABLE',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Arcane Orb', 'Astral Imprisonment', 'Essence Flux', "Sanity's Eclipse"]
    },
    {
        'name': 'pangolier',
        'type': 'Universal',
        'mainInfo': 'DASHES AND ROLLS IN TO DISRUPT ENEMY MOVEMENTS',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Swashbuckle', 'Shield Crash', 'Lucky Shot', 'Rolling Thunder', {'shard': 'Roll Up'}]
    },
    {
        'name': 'phantom_assassin',
        'type': 'Agility',
        'mainInfo': 'BLINKS ONTO HER FOES WITH CRITICAL STRIKES',
        'attackType': 'Melee',
        'complexity': '1',
        'spells': ['Stifling Dagger', 'Phantom Strike', 'Blur', 'Coup de Grace', {'shard': 'Fan of Knives'}]
    },
    {
        'name': 'phantom_lancer',
        'type': 'Agility',
        'mainInfo': 'CREATES ILLUSIONS OF HIMSELF TO TRICK OR ATTACK FOES',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Spirit Lance', 'Doppelganger', 'Phantom Rush', 'Juxtapose']
    },
    {
        'name': 'phoenix',
        'type': 'Universal',
        'mainInfo': 'HEALS AND DAMAGES AT THE SACRIFICE OF ITS OWN HEALTH',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Icarus Dive', 'Fire Spirits', 'Sun Ray', 'Supernova']
    },
    {
        'name': 'primal_beast',
        'type': 'Strength',
        'mainInfo': 'STOMPS OVER EVERYTHING AND SMASHES ENEMIES INTO MESSY BITS',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Onslaught', 'Trample', 'Uproar', 'Pulverize', {'shard': 'Rock Throw'}]
    },
    {
        'name': 'puck',
        'type': 'Intelligence',
        'mainInfo': 'ORBS TO ENEMIES AND SILENCES THEM',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Illusory Orb', 'Waning Rift', 'Phase Shift', 'Dream Coil']
    },
    {
        'name': 'pudge',
        'type': 'Strength',
        'mainInfo': 'HOOKS AND PULLS ENEMIES TOWARDS HIM',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Meat Hook', 'Rot', 'Flesh Heap', 'Dismember']
    },
    {
        'name': 'pugna',
        'type': 'Intelligence',
        'mainInfo': 'DRAINS ENEMY LIFE TO HEAL HIMSELF',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Nether Blast', 'Decrepify', 'Nether Ward', 'Life Drain']
    },
    {
        'name': 'queen_of_pain',
        'type': 'Intelligence',
        'mainInfo': 'BLINKS IN TO DEAL MASSIVE MAGICAL DAMAGE',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Shadow Strike', 'Blink', 'Scream of Pain', 'Sonic Wave']
    },
    {
        'name': 'razor',
        'type': 'Agility',
        'mainInfo': 'STEALS ENEMY DAMAGE TO ADD TO HIS OWN',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Plasma Field', 'Static Link', 'Storm Surge', 'Eye of the Storm']
    },
    {
        'name': 'riki',
        'type': 'Agility',
        'mainInfo': 'REMAINS PERMANENTLY INVISIBLE UNTIL THE MOMENT TO STRIKE',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Smoke Screen', 'Blink Strike', 'Tricks of the Trade', 'Cloak and Dagger']
    },
    {
        'name': 'rubick',
        'type': 'Intelligence',
        'mainInfo': 'STEALS THE SPELLS OF HIS ENEMIES TO USE AGAINST THEM',
        'attackType': 'Ranged',
        'complexity': 3,
        'spells': ['Telekinesis', 'Fade Bolt', 'Arcane Supremacy', 'Spell Steal']
    },
    {
        'name': 'sand_king',
        'type': 'Universal',
        'mainInfo': 'BURROWS TO STUN AND SLOW ENEMIES',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Burrowstrike', 'Sand Storm', 'Caustic Finale', 'Epicenter']
    },
    {
        'name': 'shadow_demon',
        'type': 'Intelligence',
        'mainInfo': 'STACKS EXPONENTIAL POISON DAMAGE AGAINST HIS FOES',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Disruption', 'Disseminate', 'Shadow Poison', 'Demonic Purge', {'shard': 'Demonic Cleanse'}]
    },
    {
        'name': 'shadow_fiend',
        'type': 'Agility',
        'mainInfo': 'UNLEASHES THE SOULS OF FALLEN ENEMIES FOR DAMAGE',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Shadowraze', 'Necromastery', 'Presence of the Dark Lord', 'Requiem of Souls']
    },
    {
        'name': 'shadow_shaman',
        'type': 'Intelligence',
        'mainInfo': 'SUMMONS POWERFUL SERPENT WARDS TO DEAL DAMAGE',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Ether Shock', 'Hex', 'Shackles', 'Mass Serpent Ward']
    },
    {
        'name': 'silencer',
        'type': 'Intelligence',
        'mainInfo': 'CAN SILENCE ALL ENEMIES ON THE MAP',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Arcance Curse', 'Glaives of Wisdom', 'Last Word', 'Global Silence']
    },
    {
        'name': 'skywrath_mage',
        'type': 'Intelligence',
        'mainInfo': 'CASTS HIGH DAMAGE MAGICAL SPELLS ON A SINGLE TARGET',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Arcane Bolt', 'Concussive Shot', 'Ancient Seal', 'Mystic Flare', {'shard': 'Shield of the Scion'}]
    },
    {
        'name': 'slardar',
        'type': 'Strength',
        'mainInfo': 'CHASES DOWN HIS ENEMIES TO WEAKEN AND BASH THEM',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Guardian Sprint', 'Slithereen Crush', 'Bash of the Deep', 'Corrosive Haze']
    },
    {
        'name': 'slark',
        'type': 'Agility',
        'mainInfo': 'SLIPS IN AND OUT OF SKIRMISHES',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Dark Pact', 'Pounce', 'Essence Shift', 'Shadow Dance', {'shard': 'Depth Shroud'}]
    },
    {
        'name': 'snapfire',
        'type': 'Universal',
        'mainInfo': 'MOWS DOWN HER ENEMIES WITH HEAVY ARTILLERY AND TRUSTY LIZARD',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Scatterblast', 'Firesnap Cookie', "Lil' Shredder", 'Mortimer Kisses', {'scepter': 'Gobble Up'}]
    },
    {
        'name': 'sniper',
        'type': 'Agility',
        'mainInfo': 'PICKS OFF HIS ENEMIES FROM AFAR',
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Shrapnel', 'Headshot', 'Take Aim', 'Assassinate', {'shard': 'Concussive Grenade'}]
    },
    {
        'name': 'spectre',
        'type': 'Agility',
        'mainInfo': 'HAUNTS HER ENEMIES AND TELEPORTS TO HER TARGET',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Spectral Dagger', 'Desolate', 'Dispersion', 'Shadow Step', {'scepter': 'Haunt'}]
    },
    {
        'name': 'spirit_breaker',
        'type': 'Strength',
        'mainInfo': 'CHARGES DOWN ENEMIES FROM ANYWHERE ON THE MAP',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Charge of Darkness', 'Bulldoze', 'Greater Bash', 'Nether Strike', {'shard': 'Planar Pocket'}]
    },
    {
        'name': 'storm_spirit',
        'type': 'Intelligence',
        'mainInfo': 'ZIPS ACROSS THE MAP TO ENGAGE IN FIGHTS',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Static Remnant', 'Electric Vortex', 'Overload', 'Ball Lightning']
    },
    {
        'name': 'sven',
        'type': 'Strength',
        'mainInfo': 'CLEAVES DOWN ENEMIES WITH HIS INCREDIBLE STRENGTH',
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Storm Hammer', 'Great Cleave', 'Warcry', "God's Strength"]
    },
    {
        'name': 'techies',
        'type': 'Universal',
        'mainInfo': 'SURPRISES ENEMIES WITH INVISIBLE LANDMINES AND EXPLOSIVE ATTACKS',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Sticky Bomb', 'Reactive Tazer', 'Blast Off!', 'Proximity Mines', {'scepter': 'Minefield Sign'}]
    },
    {
        'name': 'templar_assassin',
        'type': 'Agility',
        'mainInfo': 'SLOWS DOWN ENEMIES WITH TRAPS',
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Refraction', 'Meld', 'Psi Blades', 'Psionic Trap', {'scepter': 'Psionic Projection'}]
    },
    {
        'name': 'terrorblade',
        'type': 'Agility',
        'mainInfo': 'TRANSFORMS INTO A POWERFUL RANGED DEMON',
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Reflection', 'Conjure Image', 'Metamorphosis', 'Sunder', {'shard': 'Demon Zeal', 'scepter': 'Terror Wave'}]
    },
    {
        'name': 'tidehunter',
        'type': 'Strength',
        'mainInfo': "DURABLE HERO WHO SHRUGS OFF ENEMY DAMAGE",
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Gush', 'Kraken Shell', 'Anchor Smash', 'Ravage', {'shard': 'Dead in the Water'}]
    },
    {
        'name': 'timbersaw',
        'type': 'Universal',
        'mainInfo': "CHOPS THROUGH THE FOREST TO FACE HIS FOES",
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Whirling Death', 'Timber Chain', 'Reactive Armor', 'Chakram', {'shard': 'Flamethrower'}]
    },
    {
        'name': 'tinker',
        'type': 'Intelligence',
        'mainInfo': "DEMOLISHES HIS ENEMIES WITH SWARMS OF MACHINES",
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Laser', 'Heat-Seeking Missile', 'Defense Matrix', 'Keen Conveyance', 'Rearm', {'shard': 'Warp Flare'}]
    },
    {
        'name': 'tiny',
        'type': 'Strength',
        'mainInfo': "GROWS IN SIZE AND STRENGTH AS BATTLE ENSUES",
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Avalanche', 'Toss', 'Tree Grab', 'Grow', {'scepter': 'Tree Volley'}]
    },
    {
        'name': 'treant_protector',
        'type': 'Strength',
        'mainInfo': "CALLS UPON THE FOREST TO ROOT HIS FOES",
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ["Nature's Grasp", 'Leech Seed', 'Living Armor', "Nature's Guise", 'Overgrowth', {'scepter': 'Eyes in the Forest'}]
    },
    {
        'name': 'troll_warlord',
        'type': 'Agility',
        'mainInfo': "SWAPS BETWEEN RANGED AND MELEE ATTACKS AT WILL",
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ["Berserker's Rage", ['Whirling Axes (Ranged)', 'Whirling Axes (Melee)'], 'Fervor', 'Battle Trance']
    },
    {
        'name': 'tusk',
        'type': 'Strength',
        'mainInfo': "SNOWBALLS INTO HIS ENEMIES TO STUN",
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Ice Shards', 'Snowball', 'Tag Team', 'Walrus Punch!', {'scepter': 'Walrus Kick'}]
    },
    {
        'name': 'underlord',
        'type': 'Strength',
        'mainInfo': "TELEPORTS HIS TEAM IN AND OUT OF BATTLE",
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Firestorm', 'Pit of Malice', 'Atrophy Aura', "Fiend's Gate"]
    },
    {
        'name': 'undying',
        'type': 'Strength',
        'mainInfo': "SUMMONS HORDES OF ZOMBIES TO ATTACK HIS FOES",
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Decay', 'Soul Rip', 'Tombstone', 'Flesh Golem']
    },
    {
        'name': 'ursa',
        'type': 'Agility',
        'mainInfo': "DEALS MORE DAMAGE WITH EVERY HIT TO THE SAME FOE",
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Earthshock', 'Overpower', 'Fury Swipes', 'Enrage']
    },
    {
        'name': 'vengeful_spirit',
        'type': 'Universal',
        'mainInfo': "CAN SWAP HERSELF WITH ANY NEARBY HERO",
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Magic Missile', 'Wave of Terror', 'Vengeance Aura', 'Nether Swap']
    },
    {
        'name': 'venomancer',
        'type': 'Universal',
        'mainInfo': "DEALS DAMAGE OVER TIME WITH VENOMOUS ATTACKS",
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Venomous Gale', 'Poison Sting', 'Plague Ward', 'Noxious Plague', {'shard': 'Latent Toxicity', 'scepter': 'Poison Nova'}]
    },
    {
        'name': 'viper',
        'type': 'Agility',
        'mainInfo': "POISONOUS TOXINS CHIP AWAY ARMOR AND SLOW ENEMIES",
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Poison Attack', 'Nethertoxin', 'Corrosive Skin', 'Viper Strike', {'scepter': 'Nosedive'}]
    },
    {
        'name': 'visage',
        'type': 'Universal',
        'mainInfo': "SCOUTS AND ATTACKS WITH HIS FAMILIARS",
        'attackType': 'Ranged',
        'complexity': 3,
        'spells': ['Grave Chill', 'Soul Assumption', "Gravekeeper's Cloak", 'Summon Familiars', {'scepter': 'Silent as the Grave'}]
    },
    {
        'name': 'void_spirit',
        'type': 'Universal',
        'mainInfo': "STEPS IN AND OUT OF THE MORTAL PLANE TO STRIKE HIS FOES",
        'attackType': 'Melee',
        'complexity': 2,
        'spells': ['Aether Remnant', 'Dissimilate', 'Resonant Pulse', 'Astral Step']
    },
    {
        'name': 'warlock',
        'type': 'Intelligence',
        'mainInfo': "SUMMONS POWERFUL DEMONS TO FIGHT AT HIS SIDE",
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Fatal Bonds', 'Shadow Word', 'Upheaval', 'Chaotic Offering']
    },
    {
        'name': 'weaver',
        'type': 'Agility',
        'mainInfo': "REWINDS TIME TO REVERSE DAMAGE AND POSITION",
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['The Swarm', 'Shukuchi', 'Geminate Attack', 'Time Lapse']
    },
    {
        'name': 'windranger',
        'type': 'Universal',
        'mainInfo': "FIRES SWIFT FLURRY OF ARROWS AT A SINGLE TARGET",
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Shackleshot', 'Powershot', 'Windrun', 'Focus Fire', {'shard': 'Gale Force'}]
    },
    {
        'name': 'winter_wyvern',
        'type': 'Universal',
        'mainInfo': "ABLE TO FORCE HER ENEMIES TO ATTACK THEIR OWN ALLY",
        'attackType': 'Ranged',
        'complexity': 2,
        'spells': ['Arctic Burn', 'Splinter Blast', 'Cold Embrace', "Winter's Curse"]
    },
    {
        'name': 'witch_doctor',
        'type': 'Intelligence',
        'mainInfo': "CHANNELS A HIGH DAMAGE DEATH WARD",
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Paralyzing Cask', 'Voodoo Restoration', 'Maledict', 'Death Ward', {'shard': 'Voodoo Switcheroo'}]
    },
    {
        'name': 'wraith_king',
        'type': 'Strength',
        'mainInfo': "CAN REINCARNATE INSTANTLY UPON DEATH",
        'attackType': 'Melee',
        'complexity': 1,
        'spells': ['Wraithfire Blast', 'Vampiric Spirit', 'Mortal Strike', 'Reincarnation']
    },
    {
        'name': 'zeus',
        'type': 'Intelligence',
        'mainInfo': "STRIKES ENEMIES NEAR AND FAR WITH LIGHTNING",
        'attackType': 'Ranged',
        'complexity': 1,
        'spells': ['Arc Lighting', 'Lighting Bolt', 'Heavenly Jump', "Thundergod's Wrath", {'shard': 'Lighting Hands', 'scepter': 'Nimbus'}]
    }
]

module.exports = {
    getHeroes: (req, res) => {
        res.json(heroes)
    }
}