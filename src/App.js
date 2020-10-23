import React, { Component } from 'react';
import Inventory from '../src/inventory/inventory';
import Dungeons from '../src/dungeons/dungeons';
import Map from '../src/map_overview/map';
import Icons from '../src/inventory/icon_import';
import Bosses from '../src/bosses/bosses';
import Dng_Func from '../src/dungeons/dng_func';
import Dng_Icons from '../src/dungeons/dungeon_import';
import ALTTPRContext from './ALTTPRContext';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: Icons,
      Dng_Icons,
      crystal_count: 0,
    }
  }

  handleInventory = (name) => {
    const { inventory } = this.state;
    let key = 'has' + name
    let item = inventory.find((icon) => icon.name === name);
    if(key === 'hasFighter_Sword' || key === 'hasMaster') {
      this.setState({
        [key]: true
      }, () => {
        this.checkLogic();
      })
    } else {
      this.setState({
        [key]: item.found = true
      }, () => {
        this.checkLogic();
      })
    }
  }

  checkLogic = () => {
    this.checkDungeonLogic();
  }

  checkDungeonLogic = () => {
    const {hasBoots, hasBow, hasHookshot, hasHammer, hasPower_Glove,
           hasTitans_Mitt, hasFlippers, hasMoon_Pearl, hasFire_Rod, hasIce_Rod,
           hasLantern, hasCane_of_Somaria, hasMagic_Cape, hasMirror, hasFlute, 
           hasBook, hasFighter_Sword, hasMaster, hasBombos} = this.state;

    if (Dng_Func.eastern_palace(hasBow, hasLantern)) {this.forceUpdate()}
    if (Dng_Func.desert_palace(hasBook, hasPower_Glove, hasBoots, hasLantern, hasFire_Rod, hasFlute, hasTitans_Mitt, hasMirror)) {this.forceUpdate();}
    if (Dng_Func.tower_of_hera(hasLantern, hasFire_Rod, hasFighter_Sword, hasHammer, hasMirror, hasPower_Glove, hasHookshot, hasFlute)) {this.forceUpdate();}
    // if (Dng_Func.agahnim(hasMagic_Cape, hasMaster, hasFighter_Sword, hasLantern)) {}
    if(hasMoon_Pearl) {
      if(hasTitans_Mitt || (hasPower_Glove && hasHammer)) {
        if (Dng_Func.palace_of_darkness(hasLantern, hasHammer, hasBow)) {this.forceUpdate();}
        if (Dng_Func.swamp_palace(hasHookshot, hasFlippers, hasHammer, hasMirror)) {this.forceUpdate();}
        if (Dng_Func.skull_woods(hasFighter_Sword, hasFire_Rod)) {this.forceUpdate();}
        if (Dng_Func.thieves_town(hasHammer)) {this.forceUpdate();}
        if (Dng_Func.ice_palace(hasHammer, hasFlippers, hasTitans_Mitt, hasHookshot, hasFire_Rod, hasBombos)) {this.forceUpdate();}
        if (Dng_Func.misery_mire(hasCane_of_Somaria, hasLantern, hasTitans_Mitt, hasFlute, hasHookshot, hasBoots)) {this.forceUpdate();}
        if (Dng_Func.turtle_rock(hasCane_of_Somaria, hasLantern, hasTitans_Mitt, hasIce_Rod, hasFire_Rod, hasHammer)) {this.forceUpdate();}
        if (Dng_Func.ganons_tower(hasBoots, hasHammer, hasHookshot, hasCane_of_Somaria, hasFire_Rod, hasBow)) {this.forceUpdate();}
      }
    }
  }

  incrementCrystalCount = () => {
    const {crystal_count} = this.state;
    this.setState({
      crystal_count: crystal_count + 1
    })
  }

  render() {
    const contextValue = {
      inventory: this.state,
      handleInventory: this.handleInventory,
      incrementCrystalCount: this.incrementCrystalCount
    }
    return (
      <ALTTPRContext.Provider value={contextValue}>
        <div className="App">
          <Inventory />
          <Dungeons />
          <Bosses />
          <Map />
        </div>
      </ALTTPRContext.Provider>
    );
  }
}

export default App;
