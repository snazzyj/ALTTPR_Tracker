import React, {Component} from 'react';
import Dng_Icons from './dungeon_import';
import ALTTPRContext from '../ALTTPRContext';

class Dungeons extends Component {
    static contextType = ALTTPRContext;

    changeIndexValue = (name) => {
        // eslint-disable-next-line array-callback-return
        return Dng_Icons.find((dng) => {
            if(dng.name === name) {
                if(dng.index + 1 === dng.reward.length) {
                    dng.index = 0;
                    this.forceUpdate();
                } else {
                    dng.index += 1;
                    this.forceUpdate();
                }
            }
        })
    }

    render() {
        return (
            <section className="dng_list">
                {Dng_Icons.map((dng) => {
                    return (
                    <div className='dng' key={dng.nickname}>
                        <div className={dng.status}></div>
                            <img src={dng.src} alt={dng.nickname} className={dng.default_class}/>
                        <button onClick={e => this.changeIndexValue(dng.name)} className="dng_reward">
                            <img src={dng.reward[dng.index].src} alt={dng.reward[dng.index].name} />
                        </button>
                    </div>
                    )
                })}
            </section>
        )
    }
}

export default Dungeons