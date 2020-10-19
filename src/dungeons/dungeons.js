import React, {Component} from 'react';
import Dng_Icons from './dungeon_import';
import Dng_Func from './dng_func';
import ALTTPRContext from '../ALTTPRContext';

class Dungeons extends Component {
    static contextType = ALTTPRContext;
    render() {
        return (
            <section className="dng_list">
                {Dng_Icons.map((dng) => {
                    return (
                    <div className='dng' key={dng.nickname}>
                        <div className={dng.status}></div>
                        <img src={dng.src} alt={dng.nickname} className={dng.default_class}/>
                    </div>
                    )
                })}
            </section>
        )
    }
}

export default Dungeons