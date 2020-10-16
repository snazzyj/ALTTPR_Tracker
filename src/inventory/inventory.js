import React, {Component} from 'react';
import Icons from '../inventory/icon_import';
import ALTTPRContext from '../ALTTPRContext';

class Inventory extends Component {
    static contextType = ALTTPRContext
    render() {
        const {handleInventory} = this.context 
        return (
            <section>
                {Icons.map((icon) => {
                    return <button key={icon.name} onClick={e => handleInventory(icon.name)} >
                                <img src={icon.src} alt={icon.name} className={icon.found ? 'color' : 'gray'}/>
                           </button>
                })}
            </section>
        )
    }
}

export default Inventory