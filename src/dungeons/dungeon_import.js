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
import Ganons_Tower from "../assests/icons/Ganon's_Tower.png";
import Crystal from '../assests/icons/Crystal.png';
import Green_Pendant from '../assests/icons/ALttP_Pendant_of_Courage_Sprite.png';
import Blue_Pendant from '../assests/icons/ALttP_Pendant_of_Power_Sprite.png';
import Red_Pendant from '../assests/icons/ALttP_Pendant_of_Wisdom_Sprite.png';

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

const dng_icons = [
    {
        name: 'Eastern_Palace',
        nickname: 'EP',
        src: Eastern_Palace,
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
        boss_name: 'Armos',
        boss_icon: Armos,
        isComplete: false 
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
        isComplete: false 
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
        isComplete: false 
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
        isComplete: false 
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
        isComplete: false 
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
        isComplete: false 
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
        isComplete: false 
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
        isComplete: false 
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
        isComplete: false 
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
        isComplete: false 
    },
    // {
    //     name: 'Ganons_Tower',
    //     nickname: 'GT',
    //     src: Ganons_Tower,
    //     default_class: 'dng',
    //     status: 'locked',
    //     index: 0,
    //     reward: [
    //         {
    //             name: 'Crystal'
    //         },
    //         {
    //             name: 'Green Pendant'
    //         },
    //         {
    //             name: 'Red Pendant'
    //         },
    //         {
    //             name: 'Blue Pendant'
    //         },
    //     ]
    // },
]

export default dng_icons