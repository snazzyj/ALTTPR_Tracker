import React, {Component} from 'react';
import ALTTPRContext from '../ALTTPRContext';
import Boss_Icons from './bosses_import';

class Bosses extends Component {
    static contextType = ALTTPRContext

    setCompletionStatus = (name) => {
        const {incrementCrystalCount} = this.context
        incrementCrystalCount();

        // eslint-disable-next-line array-callback-return
        Boss_Icons.find((boss) => {if(boss.name === name) {
            return boss.isComplete = true;
        }})
    } 
    render() {
        return (
            <section className="bosses">
                {Boss_Icons.map((boss, index) => {
                    return <button key={index} onClick={e => this.setCompletionStatus(boss.name)} className="boss_icon">
                        <img src={boss.src} alt={boss.name} className={boss.isComplete ? 'color' : 'gray'}/>
                    </button>
                })}
            </section>
        )
    }
}

export default Bosses