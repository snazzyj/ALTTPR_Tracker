import React, { Component } from 'react';
import Dng_Icons from './dungeon_import';
import Medallions from './medallion';
import ALTTPRContext from '../ALTTPRContext';

class Dungeons extends Component {
    static contextType = ALTTPRContext;

    constructor() {
        super();
        this.state = {
            mm_index: 0,
            tr_index: 0,
        }
    }

    changeRewardIndex = (name) => {
        // eslint-disable-next-line array-callback-return
        return Dng_Icons.find((dng) => {
            if (dng.name === name) {
                if (dng.index + 1 === dng.reward.length) {
                    dng.index = 0;
                    this.forceUpdate();
                } else {
                    dng.index += 1;
                    this.forceUpdate();
                }
            }
        })
    }

    changeMMIndex = () => {
        const { mm_index } = this.state;

        if (mm_index + 1 === Medallions.misery_mire.length) {
            this.setState({
                mm_index: 0
            })
        } else {
            this.setState({
                mm_index: mm_index + 1
            })
        }
    }

    changeTRIndex = () => {
        const { tr_index } = this.state;
        if (tr_index + 1 === Medallions.turtle_rock.length) {
            this.setState({
                tr_index: 0
            })
        } else {
            this.setState({
                tr_index: tr_index + 1
            })
        }
    }

    render() {
        const { mm_index, tr_index } = this.state;
        return (
            <section className="dng_list">
                {Dng_Icons.map((dng) => {
                    return (
                        <div className='dng' key={dng.nickname}>
                            <div className={dng.status}></div>
                            <img src={dng.src} alt={dng.nickname} className={dng.default_class} />
                            <button onClick={e => this.changeRewardIndex(dng.name)} className="dng_reward">
                                <img src={dng.reward[dng.index].src} alt={dng.reward[dng.index].name} />
                            </button>
                            {dng.nickname === 'MM' &&
                                <button onClick={this.changeMMIndex} className="mm_medallion">
                                    <img src={Medallions.misery_mire[mm_index].src} alt={Medallions.misery_mire[mm_index].name} />
                                </button>}
                            {dng.nickname === 'TR' &&
                                <button onClick={this.changeTRIndex} className="tr_medallion">
                                    <img src={Medallions.turtle_rock[tr_index].src} alt={Medallions.turtle_rock[tr_index].name} />
                                </button>}
                        </div>
                    )
                })}
            </section>
        )
    }
}

export default Dungeons