import React, { Component, Fragment } from 'react';
import Dng_Icons from './dungeon_import';
import Medallions from './medallion';
// import Compass from '../assests/icons/CompassALttP.png';
// import Dng_Map from '../assests/icons/ALttP_Dungeon_Map_Sprite.png';
// import BigKey from '../assests/icons/BigKey.png';
// import SmallKey from '../assests/icons/SmallKey.png';
import ALTTPRContext from '../ALTTPRContext';

class Dungeons extends Component {
    static contextType = ALTTPRContext;

    container = React.createRef();
    constructor() {
        super();
        this.state = {
            mm_index: 0,
            tr_index: 0,
            expanded: false,
            smallKeyAmt: 0,
            smallChestArr: []
        }
    }

    componentDidMount() {
        document.addEventListener("mousedown", this.handleClickOutside);
    }
    componentWillUnmount() {
        document.removeEventListener("mousedown", this.handleClickOutside);
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

    setCompletionStatus = (name) => {
        const { incrementCrystalCount } = this.context
        incrementCrystalCount();

        // eslint-disable-next-line array-callback-return
        Dng_Icons.find((boss) => {
            if (boss.boss_name === name) {
                return boss.isComplete = true;
            }
        })
    }

    expandDungeon = (i, smallKeys, chests) => {
        const { expanded } = this.state
        this.setState({
            expanded: !expanded,
            expanded_index: i,
            smallKeyAmt: smallKeys,
            smallChestArr: [...chests]
        })
    }

    handleClickOutside = event => {
        if (this.container.current && !this.container.current.contains(event.target)) {
            this.setState({
                expanded: false,
            });
        };
    };

    decreaseSmallKey = () => {
        const { smallKeyAmt } = this.state;
        if (smallKeyAmt !== 0) {
            this.setState({ smallKeyAmt: this.state.smallKeyAmt - 1 })
        } else {
            this.setState({ smallKeyAmt: 0 })
        }
    }

    removechest = (array) => {
        array.pop();
        this.setState({
            smallChestArr: array
        })
    }

    render() {
        const { mm_index, tr_index, expanded, expanded_index, smallKeyAmt, smallChestArr } = this.state;
        const { dungeons } = this.context
        console.log(this.state)
        // 
        // console.log(dungeons[0].dng_inv[0].smallKeys.amt)
        return (
            <section className="dng_list">
                {dungeons.map((dng, index) => {
                    return <Fragment key={index}>
                        <div className='dng' key={dng.nickname}>
                            <div className={dng.status}></div>
                            <button onClick={() => this.expandDungeon(index, dng.dng_inv[0].smallKeys.amt, dng.dng_inv[0].numOfChests)} className="dngBtn">
                                <img src={dng.src} alt={dng.nickname} className={dng.default_class} />
                            </button>
                            <button onClick={() => this.changeRewardIndex(dng.name)} className="dng_reward">
                                <img src={dng.reward[dng.index].src} alt={dng.reward[dng.index].name} />
                            </button>
                            <button onClick={() => this.setCompletionStatus(dng.boss_name)} className="boss_icon">
                                <img src={dng.boss_icon} alt={dng.boss_name} className={dng.isComplete ? 'color' : 'gray'} />
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

                    </Fragment>
                })}
                {expanded ?
                    <div className="expanded" ref={this.container}>
                        <div className="expandedHeader">
                            {dungeons[expanded_index].dng_inv.map((inv_item) => {
                                return <Fragment key={inv_item.index}>
                                    <button>
                                        <img src={inv_item.compass.src} alt="Compass" />
                                    </button>
                                    <button >
                                        <img src={inv_item.dng_map.src} alt="Dungeon Map" />
                                    </button>
                                    <button>
                                        <img src={inv_item.bigKey.src} alt="Dungeon Big Key" />
                                    </button>

                                    <button onClick={() => this.decreaseSmallKey(dungeons[expanded_index])} disabled={smallKeyAmt === 0}>
                                        <img src={inv_item.smallKeys.src} alt="Dungeon Small keys" />
                                        <span>{smallKeyAmt}</span>
                                    </button>
                                <button onClick={() => this.removechest(smallChestArr)}>
                                    {smallChestArr.map((chest, i) => {
                                        return <img src={chest} alt="Small chest" key={i} />
                                    })}
                                </button>
                                </Fragment>
                            })}

                        </div>

                        {dungeons[expanded_index].map_icons.map((icon, index) => {
                            return <Fragment key={index}>
                                <h3>{icon.floor}</h3>
                                <img src={icon.src} alt={icon.floor} />
                            </Fragment>
                        })}
                    </div>
                    :
                    ''

                }
            </section>
        )
    }
}

export default Dungeons