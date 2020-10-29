/* eslint-disable react/jsx-pascal-case */
import React, {Component} from 'react';
import LightWorld from './light';
import DarkWorld from './dark';
import LW_Locations from '../locations/lw_locations';
import DW_Locations from '../locations/dw_locations';
import LW_Map from '../assests/map/Zelda3LightOverworldBG.png';
import DW_Map from '../assests/map/Zelda3DarkOverworldBG.png';

class Map extends Component {
    render() {
        return (
            <section className="map_overview">
                <div className="lw">
                    <LightWorld LW_Map={LW_Map}/>
                    <LW_Locations />
                </div>
                <div className="dw">
                    <DarkWorld DW_Map={DW_Map}/>
                    <DW_Locations />
                </div>
            </section>
        )
    }
}

export default Map