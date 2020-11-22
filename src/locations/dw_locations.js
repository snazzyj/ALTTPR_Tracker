import React, {Component, Fragment} from 'react';
// import dw_loc from './dw_loc_import';
import ALTTPRContext from '../ALTTPRContext';
import './dw_loc.css';

class DW_Locations extends Component {
    static contextType = ALTTPRContext;
    constructor() {
        super();
        this.state = {hover: {}}
    };

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
        const {dw_loc} = this.context;
        // eslint-disable-next-line array-callback-return
        dw_loc.find((loc) => {
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
        const {dw_loc} = this.context;
        return (
            <Fragment>
                {dw_loc.map((loc, index) => {
                    return <div key={index}
                    onMouseEnter={() => this.handleMouseEnter(index)} 
                    onMouseLeave={() => this.handleMouseLeave(index)}
                    onClick={() => this.hideLocation(loc.name)}
                    className={this.setClassName(loc)}>
                            {hover[index] ?
                                <div className="tooltip">   
                                    <span className="loc_name">{loc.name}</span>
                                    <span className="loc_desc">{loc.description}</span>
                                </div>
                             : ''}
                </div>
                })}
            </Fragment>
        )
    }
}

export default DW_Locations;