const lw_loc = [
    {
        name: 'Master Sword Pedestal',
        class: 'loc msp',
        description: 'Pedestal',
        requirements: 'Pendants',
        status: 'locked'
    },
    {
        name: 'Lost Woods',
        class: 'loc lost_woods',
        description: 'Mushroom Spot\n Forest Hideout',
        status: 'unlocked'
    },
    {
        name: 'Lumberjack',
        class: 'loc lumberjack',
        description: 'Cave',
        requirements: 'Beat Agahnim',
        status: 'visible'
    },
    {
        name: 'The Well',
        class: 'loc well',
        description: 'Cave\n Bombable Wall',
        requirements: '1 Bomb',
        status: 'unlocked'
    },
    {
        name: "Blind's House",
        class: 'loc blind',
        description: 'Basement\n Bombable Wall',
        requirements: '1 Bomb',
        status: 'unlocked'
    },
    {
        name: 'Bottle Vendor',
        class: 'loc bottle_vendor',
        description: 'Worst Trader Ever',
        requirements: '100 Rupees',
        status: 'unlocked'
    },
    {
        name: 'Chicken Hut',
        class: 'loc chicken_hut',
        description: 'Bombable Wall',
        requirements: '1 Bomb',
        status: 'unlocked'
    },
    {
        name: 'Sick Kid',
        class: 'loc sick_kid',
        description: 'Lazy kid in bed',
        requirements: 'Bottle',
        status: 'unlocked'
    },
    {
        name: 'Tavern',
        class: 'loc tavern',
        description: 'Backroom',
        status: 'unlocked'
    },
    {
        name: 'Library',
        class: 'loc library',
        description: 'On the Shelf',
        requirements: 'Boots',
        status: 'visible'
    },
    {
        name: 'Race Game',
        class: 'loc race_game',
        description: 'Race to the finish!',
        status: 'unlocked'
    },
    {
        name: 'LW Dwarven Smith',
        class: 'loc smith',
        description: '2 Guys hammering away',
        requirements: 'Bring home the other smith',
        status: 'locked'
    },
    {
        name: 'Magic Bat',
        class: 'loc magic_bat',
        description: 'It is a magical bat',
        requirements: 'Magic Powder',
        status: 'locked'
    },
    {
        name: 'Dig Spot',
        class: 'loc dig',
        description: 'One mans trash, is another mans treasure',
        requirements: 'Shovel',
        status: 'locked'
    },
    {
        name: "Link's House",
        class: 'loc link_house',
        description: 'At the door',
        requirements: 'Start the game',
        status: 'unlocked'
    },
    {
        name: 'Castle Secret Entrance',
        class: 'loc castle_secret',
        description: 'Uncle\n Hallway',
        status: 'unlocked'
    },
    {
        name: 'Hyrule Castle',
        class: 'loc hyrule_castle',
        description: 'Escape',
        status: 'beatable'
    },
    {
        name: 'Sanctuary',
        class: 'loc sanc',
        description: 'Escape',
        status: 'beatable'
    },
    {
        name: 'Agahnim',
        class: 'loc agahnim_loc',
        description: 'Beat Agahnim',
        status: 'locked'
    },
    {
        name: 'Bonk Rocks',
        class: 'loc bonk_rocks',
        description: 'Cave',
        requirements: 'Boots',
        status: 'locked'
    },
    {
        name: 'Graveyard Ledge',
        class: 'loc graveyard',
        description: 'Cave',
        requirements: 'Mirror',
        status: 'locked'
    },
    {
        name: "Kings Tomb",
        class: 'loc king_tomb',
        description: 'Crypt',
        requirements: "Mirror or Titan's Mitt",
        status: 'locked'
    },
    {
        name: 'Dam',
        class: 'loc dam',
        description: 'Inside\n Outside',
        status: 'unlocked'
    },
    {
        name: 'Minimoldorm Cave',
        class: 'loc minimoldorm',
        description: 'Its a pain',
        status: 'unlocked'
    },
    {
        name: 'Ice Rod Cave',
        class: 'loc ice_rod_cave',
        description: 'Cave',
        requirements: '1 Bomb',
        status: 'unlocked'
    },
    {
        name: 'Purple Chest',
        class: 'loc purple_chest',
        description: 'Give it to him',
        status: 'locked'
    },
    {
        name: 'Bombos Tablet',
        class: 'loc bombos_tablet',
        description: 'Tablet',
        requirements: 'Book, Master Sword',
        status: 'locked'
    },
    {
        name: "Aginah's Cave",
        class: 'loc aginah',
        description: 'Cave',
        requirements: '1 Bomb',
        status: 'unlocked'
    },
    {
        name: 'Checkerboard Cave',
        class: 'loc checkerboard',
        description: 'Cave',
        status: 'locked'
    },
    {
        name: 'Desert Ledge',
        class: 'loc desert_ledge',
        description: 'Ledge',
        requirements: 'Accessible from Desert Palace',
        status: 'visible'
    },
    {
        name: 'Lake Hylia Island',
        class: 'loc lake_hylia',
        description: 'Island',
        status: 'visible'
    },
    {
        name: 'Hobo',
        class: 'loc hobo',
        description: 'Under the bridge',
        status: 'accessible'
    },
    {
        name: "Sahasrala's Hut",
        class: 'loc sahasrala',
        description: 'Backroom\n Pendant',
        requirements: 'Green Pendant',
        status: 'accessible'
    },
    {
        name: 'Witches Hut',
        class: 'loc witches_hut',
        description: 'Assistant',
        requirements: 'Mushroom',
        status: 'locked'
    },
    {
        name: 'Waterfall Fairy',
        class: 'loc waterfall_fairy',
        description: 'Waterfall Cave',
        status: 'locked'
    },
    {
        name: 'Zora Area',
        class: 'loc zora_area',
        description: "Zora\n Zora's Ledge",
        status: 'accessible'
    },
    {
        name: 'South of Grove',
        class: 'loc south_grove_lw',
        description: 'Cave',
        status: 'locked'
    },
    {
        name: 'Old Man',
        class: 'loc old_man',
        description: 'He is old and lost',
        requirements: 'Access to Death Mountain',
        status: 'locked'
    },
    {
        name: 'Spectale Rock Cave',
        class: 'loc spectale_rock',
        description: 'Inside\n On Top',
        requirements: 'Mirror if item is on Top',
        status: 'locked'
    },
    {
        name: 'Paradox Cave',
        class: 'loc paradox_cave',
        description: 'Cave',
        status: 'locked'
    },
    {
        name: 'Mimic Cave',
        class: 'loc mimic_cave',
        description: 'Cave',
        status: 'locked'
    },
    {
        name: 'Spiral Cave',
        class: 'loc spiral_cave',
        description: 'Cave',
        status: 'locked'
    },
    {
        name: 'Floating Island',
        class: 'loc floating_island',
        description: 'Floating Island',
        status: 'locked'
    },
    {
        name: 'Ether Tablet',
        class: 'loc ether_tablet',
        description: 'Tablet',
        requirements: 'Book, Master Sword',
        status: 'locked'
    }
]

export default lw_loc;