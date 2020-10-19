import React, { Component } from 'react';
import Inventory from '../src/inventory/inventory';
import Dungeons from '../src/dungeons/dungeons';
import Icons from '../src/inventory/icon_import';
import Dng_Func from '../src/dungeons/dng_func';
import Dng_Icons from '../src/dungeons/dungeon_import';
import ALTTPRContext from './ALTTPRContext';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: Icons,
      Dng_Icons
    }
  }

  handleInventory = (name) => {
    const { inventory } = this.state;
    console.log('handleinv ran')
    let key = 'has' + name
    let item = inventory.find((icon) => icon.name === name);
    this.setState({
      [key]: item.found = true
    }, () => {
      this.checkDungeonLogic();
    })
  }

  checkDungeonLogic = () => {
    console.log(this.state)
    console.log('checkdnglogic ran')
    // eslint-disable-next-line no-unused-vars
    const {hasBoots, hasBow, hasHookshot, hasHammer, hasPower_Glove,
           hasTitans_Mitt, hasFlippers, hasMoon_Pearl, hasFire_Rod, hasIce_Rod,
           hasBombos, hasEther, hasQuake, hasLantern, hasCane_of_Somaria, hasMagic_Cape,
           hasMirror, hasFlute, hasBook, hasFighter_Sword, hasMaster} = this.state;

    if (Dng_Func.eastern_palace(hasBow, hasLantern)) {this.forceUpdate();}
    if (Dng_Func.desert_palace(hasBook, hasPower_Glove, hasBoots, hasLantern, hasFire_Rod, hasFlute, hasTitans_Mitt, hasMirror)) {this.forceUpdate();}
    if (Dng_Func.tower_of_hera(hasLantern, hasFire_Rod, hasFighter_Sword, hasHammer, hasMirror, hasPower_Glove, hasHookshot, hasFlute)) {this.forceUpdate();}
    if (Dng_Func.agahnim(hasMagic_Cape, hasMaster, hasFighter_Sword, hasLantern)) {}
    if(hasMoon_Pearl) {
      if(hasTitans_Mitt || (hasPower_Glove && hasHammer)) {
        if (Dng_Func.palace_of_darkness(hasLantern, hasHammer, hasBow)) {this.forceUpdate();}
        if (Dng_Func.swamp_palace(hasHookshot, hasFlippers, hasHammer, hasMirror)) {this.forceUpdate();}
        if (Dng_Func.skull_woods(hasFighter_Sword, hasFire_Rod)) {this.forceUpdate();}
        if (Dng_Func.thieves_town(hasHammer)) {this.forceUpdate();}
        if (Dng_Func.ice_palace(hasHammer, hasFlippers, hasTitans_Mitt, hasHookshot, hasCane_of_Somaria, hasFire_Rod, hasBombos)) {this.forceUpdate();}
        if (Dng_Func.misery_mire(hasCane_of_Somaria, hasLantern, hasTitans_Mitt, hasFlute, hasHookshot, hasBoots, hasBombos, hasEther, hasQuake)) {this.forceUpdate();}
        if (Dng_Func.turtle_rock(hasCane_of_Somaria, hasLantern, hasTitans_Mitt, hasIce_Rod, hasFire_Rod, hasHammer, hasBombos, hasEther, hasQuake)) {this.forceUpdate();}
        if (Dng_Func.ganons_tower(hasBoots, hasHammer, hasHookshot, hasCane_of_Somaria, hasFire_Rod, hasBow)) {this.forceUpdate();}
      }
    }
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
          <Dungeons />
        </div>
      </ALTTPRContext.Provider>
    );
  }
}

export default App;
