import React, {Component} from 'react';
import LightWorld from './light';
import DarkWorld from './dark';
import LW_Map from '../assests/map/Zelda3LightOverworldBG.png';
import DW_Map from '../assests/map/Zelda3DarkOverworldBG.png';

class Map extends Component {
    render() {
        return (
            <section className="map_overview">
                <div>
                    <LightWorld LW_Map={LW_Map}/>
                </div>
                <div>
                    <DarkWorld DW_Map={DW_Map}/>
                </div>
            </section>
        )
    }
}

export default Map