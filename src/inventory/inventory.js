import React, { Component } from 'react';
import Icons from './icon_import';
import Upgradable_Items from './icon_upgrades_import';
import ALTTPRContext from '../ALTTPRContext';

class Inventory extends Component {
    static contextType = ALTTPRContext

    constructor() {
        super();
        this.state = {
            armor_idx: 0,
            sword_idx: 0,
            shield_idx: 0,
            upgradable_items: Upgradable_Items
        }
    }

    upgradeSword = () => {
        const { handleInventory } = this.context;
        const {sword_idx, upgradable_items} = this.state;
        if(!upgradable_items.sword[0].found) {
            upgradable_items.sword[0].found = true;
        }
        if(upgradable_items.sword[0].found) {
            if(sword_idx + 1 === upgradable_items.sword.length) {
                this.setState({
                    sword_idx: 0,
                })
            } else {
                this.setState({
                    sword_idx: sword_idx + 1
                })
                if(upgradable_items.sword[sword_idx].name === 'Fighter_Sword' || upgradable_items.sword[sword_idx].name === 'Master') {
                    handleInventory(upgradable_items.sword[sword_idx].name);
                }
            }
        }

    }
    
    upgradeShield = () => {
        const {shield_idx, upgradable_items} = this.state;
        if(shield_idx + 1 === upgradable_items.shield.length) {
            this.setState({
                shield_idx: 0
            })
        } else {
            this.setState({
                shield_idx: shield_idx + 1
            })
        }

    }

    upgradeArmor = () => {
        const {armor_idx, upgradable_items} = this.state;
        if(armor_idx + 1 === upgradable_items.armor.length) {
            this.setState({
                armor_idx: 0
            })
        } else {
            this.setState({
                armor_idx: armor_idx + 1
            })
        }

    }

    render() {
        // console.log(this.state);
        const { handleInventory } = this.context;
        const { upgradable_items, armor_idx, sword_idx, shield_idx } = this.state;
        let swordName = upgradable_items.sword[sword_idx].name;
        let swordSrc = upgradable_items.sword[sword_idx].src;
        let swordFound = upgradable_items.sword[sword_idx].found;
        let shieldName = upgradable_items.shield[shield_idx].name;
        let shieldSrc = upgradable_items.shield[shield_idx].src;
        let shieldFound = upgradable_items.shield[shield_idx].found;
        let armorName = upgradable_items.armor[armor_idx].name;
        let armorSrc = upgradable_items.armor[armor_idx].src;
        return (
            <section className="inv">
                {Icons.map((icon) => {
                    return <button key={icon.name} onClick={e => handleInventory(icon.name)} >
                        <img src={icon.src} alt={icon.name} className={icon.found ? 'color' : 'gray'} />
                    </button>
                })}
                <button key={swordName} onClick={e => this.upgradeSword()} >
                    <img src={swordSrc} alt={swordName} className={swordFound ? 'color' : 'gray'} />
                </button>
                <button key={shieldName} onClick={e => this.upgradeShield()} >
                    <img src={shieldSrc} alt={shieldName} className={shieldFound ? 'color' : 'gray'} />
                </button>
                <button key={armorName} onClick={e => this.upgradeArmor()} >
                    <img src={armorSrc} alt={armorName} className='color' />
                </button>
            </section>
        )
    }
}

export default Inventory