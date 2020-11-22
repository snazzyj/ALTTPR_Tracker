import React, {Component, Fragment} from 'react';
// import lw_loc from './lw_loc_import';
import ALTTPRContext from '../ALTTPRContext';
import './lw_loc.css'

class LW_Locations extends Component {
    static contextType = ALTTPRContext;
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
        const {lw_loc} = this.context;
        // eslint-disable-next-line array-callback-return
        lw_loc.find((loc) => {
            if(loc.name === name) {
                loc.status = 'hidden'
            }
        })
    }

    setClassName = (loc) => {
        if(loc.status === 'hidden') {
            return loc.status
        } else {
            return loc.class + ' ' + loc.status
        }
    }

    render() {
        const {hover} = this.state;
        const {lw_loc} = this.context;
        return (
            <Fragment>
                {lw_loc.map((loc, index) => {
                    
                    return <div key={index}
                                onMouseEnter={() => this.handleMouseEnter(index)} 
                                onMouseLeave={() => this.handleMouseLeave(index)}
                                onClick={() => this.hideLocation(loc.name)}
                                className={this.setClassName(loc)}>
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