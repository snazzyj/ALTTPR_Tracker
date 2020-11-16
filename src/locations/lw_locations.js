import React, {Component, Fragment} from 'react';
import lw_loc from './lw_loc_import';
import './lw_loc.css'

class LW_Locations extends Component {
    constructor() {
        super();
        this.state = { hover: {} }
    }

    handleMouseEnter = (i) => {
        this.setState({
            hover: {...this.state.hover, [i]: true}
        })
    }

    handleMouseLeave = (i) => {
        this.setState({
            hover: {...this.state.hover, [i]: false}
        })
    }

    hideLocation = (name) => {
        // eslint-disable-next-line array-callback-return
        lw_loc.find((loc) => {
            if(loc.name === name) {
                loc.status = 'hidden'
            }
        })
    }

    render() {
        const {hover} = this.state;
        return (
            <Fragment>
                {lw_loc.map((loc, index) => {
                    return <div key={index}
                                onMouseEnter={() => this.handleMouseEnter(index)} 
                                onMouseLeave={() => this.handleMouseLeave(index)}
                                onClick={() => this.hideLocation(loc.name)}
                                className={`${loc.class} ${loc.status}`}>
                                        {hover[index] ?
                                            <div className="tooltip">
                                                <p className="loc_name">{loc.name}</p>
                                                <p className="loc_desc">{loc.description}</p>
                                            </div>
                                         : ''}
                            </div>
                })}
            </Fragment>
        )
    }
}

export default LW_Locations;