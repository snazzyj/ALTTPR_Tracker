import React, {Component} from 'react';
import Inventory from '../src/inventory/inventory';
import Icons from '../src/inventory/icon_import';
import ALTTPRContext from './ALTTPRContext';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {}
}

handleInventory = (name) => {
    let key = 'has'+name
    let item = Icons.find((icon) => icon.name === name);
    // eslint-disable-next-line array-callback-return
    Icons.find((icon) => {
        if(icon.name === name) {
            return icon.found = true
        }
    })
    this.setState({
        [key]: item.found = true
    })
}
  render() {
    const contextValue = {
      inventory: this.state,
      handleInventory: this.handleInventory
    }
    return (
      <ALTTPRContext.Provider value={contextValue}>
        <div className="App">
          <Inventory />
        </div>
      </ALTTPRContext.Provider>
    );
  }
}

export default App;
