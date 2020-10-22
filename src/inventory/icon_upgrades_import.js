import Master from '../assests/icons/ALttP_Master_Sword_Sprite.png'
import Tempered from '../assests/icons/ALttP_Master_Sword_Lv2_Sprite.png'
import Butter from '../assests/icons/ALttP_Master_Sword_Lv3_Sprite.png'
import Red_Shield from '../assests/icons/ALttP_Red_Shield_Sprite.png'
import Mirror_Shield from '../assests/icons/ALttP_Mirror_Shield_Sprite.png'
import Blue_Mail from '../assests/icons/BlueMail_Sprite.png'
import Red_Mail from '../assests/icons/RedMail_Sprite.png';
import Fighter_Sword from "../assests/icons/ALttP_Fighter's_Sword_Sprite.png"
import Fighter_Shield from "../assests/icons/ALttP_Fighter's_Shield_Sprite.png"
import Green_Mail from '../assests/icons/ALttP_Green_Clothes_Sprite.png'

const upgradable_items = {
    armor: [
        {
            name: 'Green_Mail',
            src: Green_Mail,
            found: true
        },
        {
            name: 'Blue_Mail',
            src: Blue_Mail,
            found: true
        },
        {
            name: 'Red_Mail',
            src: Red_Mail,
            found: true
        }
    ],
    shield: [        
        {
            name: 'Fighter_Shield',
            src: Fighter_Shield,
            found: false
        },
        {
            name: 'Fighter_Shield',
            src: Fighter_Shield,
            found: true
        },
        {
            name: 'Red_Shield',
            src: Red_Shield,
            found: true
        },
        {
            name: 'Mirror_Shield',
            src: Mirror_Shield,
            found: true
        }
    ],
    sword: [
        {
            name: 'Fighter_Sword',
            src: Fighter_Sword,
            found: false
        },
        {
            name: 'Fighter_Sword',
            src: Fighter_Sword,
            found: true
        },
        {
            name: 'Master',
            src: Master,
            found: true
        },
        {
            name: 'Tempered',
            src: Tempered,
            found: true
        },
        {
            name: 'Butter',
            src: Butter,
            found: true
        }
    ],
}

export default upgradable_items