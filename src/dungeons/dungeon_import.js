// Dungeon Icons
import Eastern_Palace from '../assests/icons/ALttP_Eastern_Palace.png';
import Desert_Palace from '../assests/icons/Desert_Palace.png';
import Tower_of_Hera from '../assests/icons/Tower_of_Hera.png';
import Palace_of_Darkness from '../assests/icons/Palace_of_Darkness_ALttP.png';
import Swamp_Palace from '../assests/icons/ALttP_Swamp_Palace_Exterior.png';
import Skull_Woods from '../assests/icons/Skull_Woods.png';
import Thieves_Town from "../assests/icons/Thieves'_Town.png";
import Ice_Palace from '../assests/icons/Ice_Palace.png';
import Misery_Mire from '../assests/icons/Misery_Mire_Dungeon.png';
import Turtle_Rock from '../assests/icons/TurtleRockHead(ALttP).png';
// Dungeon Rewards
import Crystal from '../assests/icons/Crystal.png';
import Green_Pendant from '../assests/icons/ALttP_Pendant_of_Courage_Sprite.png';
import Blue_Pendant from '../assests/icons/ALttP_Pendant_of_Power_Sprite.png';
import Red_Pendant from '../assests/icons/ALttP_Pendant_of_Wisdom_Sprite.png';
// Dungeon Bosses
import Armos from '../assests/bosses/ALttP_Armos_Knights_Sprite.png';
import Arrghus from '../assests/bosses/ALttP_Arrghus_Sprite.png'
import Blind from '../assests/bosses/ALttP_Blind_the_Thief_Sprite.png'
import Helmasaur from '../assests/bosses/ALttP_Helmasaur_King_Sprite.png'
import Kholdstare from '../assests/bosses/ALttP_Kholdstare_Sprite.png'
import Lanmolas from '../assests/bosses/ALttP_Lanmolas_Sprite.png'
import Moldorm from '../assests/bosses/ALttP_Moldorm_Sprite.png'
import Mothula from '../assests/bosses/ALttP_Mothula_Sprite.png'
import Trinexx from '../assests/bosses/ALttP_Trinexx_Sprite.png'
import Vitreous from '../assests/bosses/ALttP_Vitreous_Sprite.png'
// Dungeon Maps
import EP_1F from '../assests/map/eastpalace-1f.gif';
import EP_2F from '../assests/map/eastpalace-2f.gif';
import DP_1F from '../assests/map/desertpalace-1f.gif';
import DP_2F from '../assests/map/desertpalace-2f.gif';
import DP_B1 from '../assests/map/desertpalace-b1.gif';
import ToH_1F from '../assests/map/towerofhera-1f.gif';
import ToH_2F from '../assests/map/towerofhera-2f.gif';
import ToH_3F from '../assests/map/towerofhera-3f.gif';
import ToH_4F from '../assests/map/towerofhera-4f.gif';
import ToH_5F from '../assests/map/towerofhera-5f.gif';
import ToH_6F from '../assests/map/towerofhera-6f.gif';
import PoD_1F from '../assests/map/palaceofdarkness-1f.gif';
import PoD_B1 from '../assests/map/palaceofdarkness-b1.gif';
import SP_B1 from '../assests/map/swamppalace-b1.gif';
import SP_B2 from '../assests/map/swamppalace-b2.gif';
import SP_1F from '../assests/map/swamppalace-1f.gif';
import SW_B1A from '../assests/map/skulldungeon-b1a.gif';
import SW_B1B from '../assests/map/skulldungeon-b1b.gif';
import SW_B2 from '../assests/map/skulldungeon-b2.gif';
import TT_B1 from '../assests/map/theifstown-b1.gif';
import TT_B2 from '../assests/map/theifstown-b2.gif';
import TT_1F from '../assests/map/theifstown-1f.gif';
import IP_1F from '../assests/map/icepalace-1f.gif';
import IP_B1 from '../assests/map/icepalace-b1.gif';
import IP_B2 from '../assests/map/icepalace-b2.gif';
import IP_B3 from '../assests/map/icepalace-b3.gif';
import IP_B4 from '../assests/map/icepalace-b4.gif';
import IP_B5 from '../assests/map/icepalace-b5.gif';
import IP_B6 from '../assests/map/icepalace-b6.gif';
import IP_B7 from '../assests/map/icepalace-b7.gif';
import MM_1F from '../assests/map/miserymire-1f.gif';
import MM_B1A from '../assests/map/miserymire-b1a.gif';
import MM_B1B from '../assests/map/miserymire-b1b.gif';
import MM_B2 from '../assests/map/miserymire-b2.gif';
import TR_1F from '../assests/map/turtlerock-1f.gif';
import TR_B1 from '../assests/map/turtlerock-b1.gif';
import TR_B2 from '../assests/map/turtlerock-b2.gif';
import TR_B3 from '../assests/map/turtlerock-b3.gif';
//Small Chest Icon
import SmallChest from '../assests/icons/ALttP_Treasure_Chest_Sprite.png';

const dng_icons = [
    {
        name: 'Eastern_Palace',
        nickname: 'EP',
        src: Eastern_Palace,
        default_class: 'dng',
        status: 'accessible',
        index: 0,
        reward: [
            {
                name: 'Crystal',
                src: Crystal
            },
            {
                name: 'Green Pendant',
                src: Green_Pendant
            },
            {
                name: 'Red Pendant',
                src: Red_Pendant
            },
            {
                name: 'Blue Pendant',
                src: Blue_Pendant
            },
        ],
        boss_name: 'Armos',
        boss_icon: Armos,
        isComplete: false,
        map_icons: [
            {
                floor: 'Floor 1',
                src: EP_1F
            },
            {
                floor: 'Floor 2',
                src: EP_2F
            }
        ],
        smallKeys: 2,
        numOfChests: [SmallChest,SmallChest,SmallChest,SmallChest,SmallChest]
    },
    {
        name: 'Desert_Palace',
        nickname: 'DP',
        src: Desert_Palace,
        default_class: 'dng',
        status: 'locked',
        index: 0,
        reward: [
            {
                name: 'Crystal',
                src: Crystal
            },
            {
                name: 'Green Pendant',
                src: Green_Pendant
            },
            {
                name: 'Red Pendant',
                src: Red_Pendant
            },
            {
                name: 'Blue Pendant',
                src: Blue_Pendant
            },
        ],
        boss_name: 'Lanmolas',
        boss_icon: Lanmolas,
        isComplete: false,
        map_icons: [
            {
                floor: 'Basement 1',
                src: DP_B1
            },
            {
                floor: 'Floor 1',
                src: DP_1F
            },
            {
                floor: 'Floor 2',
                src: DP_2F
            }
        ],
        smallKeys: 4,
        numOfChests: [SmallChest,SmallChest,SmallChest,SmallChest]
    },
    {
        name: 'Tower_of_Hera',
        nickname: 'TH',
        src: Tower_of_Hera,
        default_class: 'dng',
        status: 'locked',
        index: 0,
        reward: [
            {
                name: 'Crystal',
                src: Crystal
            },
            {
                name: 'Green Pendant',
                src: Green_Pendant
            },
            {
                name: 'Red Pendant',
                src: Red_Pendant
            },
            {
                name: 'Blue Pendant',
                src: Blue_Pendant
            },
        ],
        boss_name: 'Moldorm',
        boss_icon: Moldorm,
        isComplete: false,
        map_icons: [
            {
                floor: 'Floor 1',
                src: ToH_1F
            },
            {
                floor: 'Floor 2',
                src: ToH_2F
            },
            {
                floor: 'Floor 3',
                src: ToH_3F
            },
            {
                floor: 'Floor 4',
                src: ToH_4F
            },
            {
                floor: 'Floor 5',
                src: ToH_5F
            },
            {
                floor: 'Floor 6',
                src: ToH_6F
            }
        ],
        smallKeys: 1,
        numOfChests: [SmallChest,SmallChest,SmallChest,SmallChest]
    },
    {
        name: 'Palace_of_Darkness',
        nickname: 'POD',
        src: Palace_of_Darkness,
        default_class: 'dng',
        status: 'locked',
        index: 0,
        reward: [
            {
                name: 'Crystal',
                src: Crystal
            },
            {
                name: 'Green Pendant',
                src: Green_Pendant
            },
            {
                name: 'Red Pendant',
                src: Red_Pendant
            },
            {
                name: 'Blue Pendant',
                src: Blue_Pendant
            },
        ],
        boss_name: 'Helmasaur',
        boss_icon: Helmasaur,
        isComplete: false,
        map_icons: [
            {
                floor: 'Floor 1',
                src: PoD_1F
            },
            {
                floor: 'Basement 1',
                src: PoD_B1
            }
        ],
        smallKeys: 6,
        numOfChests: [SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest]
    },
    {
        name: 'Swamp_Palace',
        nickname: 'SP',
        src: Swamp_Palace,
        default_class: 'dng',
        status: 'locked',
        index: 0,
        reward: [
            {
                name: 'Crystal',
                src: Crystal
            },
            {
                name: 'Green Pendant',
                src: Green_Pendant
            },
            {
                name: 'Red Pendant',
                src: Red_Pendant
            },
            {
                name: 'Blue Pendant',
                src: Blue_Pendant
            },
        ],
        boss_name: 'Arrghus',
        boss_icon: Arrghus,
        isComplete: false,
        map_icons: [
            {
                floor: 'Floor 1',
                src: SP_1F
            },
            {
                floor: 'Basement 1',
                src: SP_B1
            },
            {
                floor: 'Basement 2',
                src: SP_B2
            }
        ],
        smallKeys: 5,
        numOfChests: [SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest]
    },
    {
        name: 'Skull_Woods',
        nickname: 'SW',
        src: Skull_Woods,
        default_class: 'dng',
        status: 'locked',
        index: 0,
        reward: [
            {
                name: 'Crystal',
                src: Crystal
            },
            {
                name: 'Green Pendant',
                src: Green_Pendant
            },
            {
                name: 'Red Pendant',
                src: Red_Pendant
            },
            {
                name: 'Blue Pendant',
                src: Blue_Pendant
            },
        ],
        boss_name: 'Mothula',
        boss_icon: Mothula,
        isComplete: false,
        map_icons: [
            {
                floor: 'Basement 1A',
                src: SW_B1A
            },
            {
                floor: 'Basement 1B',
                src: SW_B1B
            },
            {
                floor: 'Basement 2',
                src: SW_B2
            }
        ],
        smallKeys: 5,
        numOfChests: [SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest]
    },
    {
        name: 'Thieves_Town',
        nickname: 'TT',
        src: Thieves_Town,
        default_class: 'dng',
        status: 'locked',
        index: 0,
        reward: [
            {
                name: 'Crystal',
                src: Crystal
            },
            {
                name: 'Green Pendant',
                src: Green_Pendant
            },
            {
                name: 'Red Pendant',
                src: Red_Pendant
            },
            {
                name: 'Blue Pendant',
                src: Blue_Pendant
            },
        ],
        boss_name: 'Blind',
        boss_icon: Blind,
        isComplete: false,
        map_icons: [
            {
                floor: 'Floor 1',
                src: TT_1F
            },
            {
                floor: 'Basement 1',
                src: TT_B1
            },
            {
                floor: 'Basement 2',
                src: TT_B2
            }
        ],
        smallKeys: 3,
        numOfChests: [SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest]
    },
    {
        name: 'Ice_Palace',
        nickname: 'IP',
        src: Ice_Palace,
        default_class: 'dng',
        status: 'locked',
        index: 0,
        reward: [
            {
                name: 'Crystal',
                src: Crystal
            },
            {
                name: 'Green Pendant',
                src: Green_Pendant
            },
            {
                name: 'Red Pendant',
                src: Red_Pendant
            },
            {
                name: 'Blue Pendant',
                src: Blue_Pendant
            },
        ],
        boss: 'Kholdstare',
        boss_icon: Kholdstare,
        isComplete: false,
        map_icons: [
            {
                floor: 'Floor 1',
                src: IP_1F
            },
            {
                floor: 'Basement 1',
                src: IP_B1
            },
            {
                floor: 'Basement 2',
                src: IP_B2
            },
            {
                floor: 'Basement 3',
                src: IP_B3

            },
            {
                floor: 'Basement 4',
                src: IP_B4

            },
            {
                floor: 'Basement 5',
                src: IP_B5

            },
            {
                floor: 'Basement 6',
                src: IP_B6

            },
            {
                floor: 'Basement 7',
                src: IP_B7

            }
        ],
        smallKeys: 6,
        numOfChests: [SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest]
    },
    {
        name: 'Misery_Mire',
        nickname: 'MM',
        src: Misery_Mire,
        default_class: 'dng',
        status: 'locked',
        index: 0,
        reward: [
            {
                name: 'Crystal',
                src: Crystal
            },
            {
                name: 'Green Pendant',
                src: Green_Pendant
            },
            {
                name: 'Red Pendant',
                src: Red_Pendant
            },
            {
                name: 'Blue Pendant',
                src: Blue_Pendant
            },
        ],
        boss_name: 'Vitreous',
        boss_icon: Vitreous,
        isComplete: false,
        map_icons: [
            {
                floor: 'Floor 1',
                src: MM_1F
            },
            {
                floor: 'Basement 1A',
                src: MM_B1A
            },
            {
                floor: 'Basement 1B',
                src: MM_B1B
            },
            {
                floor: 'Basement 2',
                src: MM_B2
            },
        ],
        smallKeys: 6,
        numOfChests: [SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest]
    },
    {
        name: 'Turtle_Rock',
        nickname: 'TR',
        src: Turtle_Rock,
        default_class: 'dng',
        status: 'locked',
        index: 0,
        reward: [
            {
                name: 'Crystal',
                src: Crystal
            },
            {
                name: 'Green Pendant',
                src: Green_Pendant
            },
            {
                name: 'Red Pendant',
                src: Red_Pendant
            },
            {
                name: 'Blue Pendant',
                src: Blue_Pendant
            },
        ],
        boss_name: 'Trinexx',
        boss_icon: Trinexx,
        isComplete: false,
        map_icons: [
            {
                floor: 'Floor 1',
                src: TR_1F
            },
            {
                floor: 'Basement 1',
                src: TR_B1
            },
            {
                floor: 'Basement 2',
                src: TR_B2
            },
            {
                floor: 'Basement 3',
                src: TR_B3
            },
        ],
        smallKeys: 6,
        numOfChests: [SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest,SmallChest]
    }
]

export default dng_icons