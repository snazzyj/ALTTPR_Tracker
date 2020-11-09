import React, { Component } from 'react';
import Inventory from '../src/inventory/inventory';
import Dungeons from '../src/dungeons/dungeons';
import Map from '../src/map_overview/map';
import Icons from '../src/inventory/icon_import';
import Dng_Icons from '../src/dungeons/dungeon_import';
import Dng_Func from '../src/dungeons/dng_func';
import LW_Func from '../src/locations/lw_location_func';
import DW_Func from '../src/locations/dw_location_func';
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
    if (key === 'hasFighter_Sword' || key === 'hasMaster') {
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
    this.checkLocLogic();
  }

  checkDungeonLogic = () => {
    const { hasBoots, hasBow, hasHookshot, hasHammer, hasPower_Glove,
      hasTitans_Mitt, hasFlippers, hasMoon_Pearl, hasFire_Rod, hasIce_Rod,
      hasLantern, hasCane_of_Somaria, hasMirror, hasFlute,
      hasBook, hasFighter_Sword, hasBombos } = this.state;

    if (Dng_Func.eastern_palace(hasBow, hasLantern)) { this.forceUpdate() }
    if (Dng_Func.desert_palace(hasBook, hasPower_Glove, hasBoots, hasLantern, hasFire_Rod, hasFlute, hasTitans_Mitt, hasMirror)) { this.forceUpdate(); }
    if (Dng_Func.tower_of_hera(hasLantern, hasFire_Rod, hasFighter_Sword, hasHammer, hasMirror, hasPower_Glove, hasHookshot, hasFlute)) { this.forceUpdate(); }
    if (hasMoon_Pearl) {
      if (hasTitans_Mitt || (hasPower_Glove && hasHammer)) {
        if (Dng_Func.palace_of_darkness(hasLantern, hasHammer, hasBow)) { this.forceUpdate(); }
        if (Dng_Func.swamp_palace(hasHookshot, hasFlippers, hasHammer, hasMirror)) { this.forceUpdate(); }
        if (Dng_Func.skull_woods(hasFighter_Sword, hasFire_Rod)) { this.forceUpdate(); }
        if (Dng_Func.thieves_town(hasHammer)) { this.forceUpdate(); }
        if (Dng_Func.ice_palace(hasHammer, hasFlippers, hasTitans_Mitt, hasHookshot, hasFire_Rod, hasBombos)) { this.forceUpdate(); }
        if (Dng_Func.misery_mire(hasCane_of_Somaria, hasLantern, hasTitans_Mitt, hasFlute, hasHookshot, hasBoots)) { this.forceUpdate(); }
        if (Dng_Func.turtle_rock(hasCane_of_Somaria, hasLantern, hasTitans_Mitt, hasIce_Rod, hasFire_Rod, hasHammer)) { this.forceUpdate(); }
        if (Dng_Func.ganons_tower(hasBoots, hasHammer, hasHookshot, hasCane_of_Somaria, hasFire_Rod, hasBow)) { this.forceUpdate(); }
      }
    }
  }

  checkLocLogic = () => {
    this.lw_locations();
    this.dw_locations();
  }

  lw_locations = () => {
    const { hasBoots, hasHammer, hasPower_Glove, hasTitans_Mitt, hasFlippers, hasMoon_Pearl,
       hasFire_Rod, hasMagic_Powder, hasLantern, hasMagic_Cape, hasMirror, hasBook, 
       hasFighter_Sword, hasMaster, hasAgahnim, hasShovel, hasMushroom, hasHookshot, 
       hasFlute, Dng_Icons } = this.state;
    if (LW_Func.master_sword_pedestal(hasBook)) { this.forceUpdate() };
    if (LW_Func.lumberjack(hasAgahnim)) { this.forceUpdate() };
    if (LW_Func.library(hasBoots)) { this.forceUpdate() };
    if (LW_Func.magic_bat(hasHammer, hasMagic_Powder)) { this.forceUpdate() };
    if (LW_Func.dig_spot(hasShovel)) { this.forceUpdate() };
    if (LW_Func.bonk_rocks(hasBoots)) { this.forceUpdate() };
    
    if (LW_Func.hobo(hasFlippers)) { this.forceUpdate() };
    // waterfall fairy
    if (LW_Func.waterfall_fairy(hasFlippers)) { this.forceUpdate() };
    // zora
    if (LW_Func.zora(hasFlippers)) { this.forceUpdate() };
    // witches hut
    if (LW_Func.witches_hut(hasMushroom)) { this.forceUpdate() };
    // old man
    if (LW_Func.old_man(hasPower_Glove, hasLantern)) { this.forceUpdate() };
    // spectale rock
    if (LW_Func.spectale_rock(hasMirror)) { this.forceUpdate() };
    // paradox cave
    if (LW_Func.paradox_cave(hasHammer, hasHookshot, hasMirror)) { this.forceUpdate() };
    // spiral cave
    if (LW_Func.spiral_cave(hasHammer, hasHookshot, hasMirror)) { this.forceUpdate() };
    // ether tablet
    if (LW_Func.ether_tablet(hasMirror, hasBook, hasHammer, hasHookshot)) { this.forceUpdate() };
    // desert ledge
    if (LW_Func.desert_ledge(hasBook)) { this.forceUpdate() };


    if (hasMoon_Pearl) {
      if (hasTitans_Mitt || (hasPower_Glove && hasHammer)) {
        // graveyard ledge
        if (LW_Func.graveyard_ledge()) { this.forceUpdate() };

        // kings tomb
        // if(LW_Func.kings_tomb()) {this.forceUpdate()};

        // purple chest
        if (LW_Func.purple_chest()) { this.forceUpdate() };

        // dwarven smith
        if(LW_Func.lw_dwarven_smith(hasMirror)) { this.forceUpdate() };
      }
    }

    // floating island
    if (LW_Func.floating_island(hasHookshot, hasMirror, hasPower_Glove)) { this.forceUpdate() };
    
    // checkboard cave
    if (LW_Func.checkerboard_cave(hasFlute, hasTitans_Mitt, hasMirror)) { this.forceUpdate() };

    if(Dng_Icons[9].status === 'beatable') {
      // mimic cave
      // requires access to TR
      if(LW_Func.mimic_cave()) { this.forceUpdate() };
    }
  }

  dw_locations = () => {
    const { hasHookshot, hasHammer, hasPower_Glove,
      hasTitans_Mitt, hasFlippers, hasMoon_Pearl, hasFire_Rod,
      hasMagic_Cape, hasMirror, hasFlute, hasAgahnim } = this.state;
  }

  incrementCrystalCount = () => {
    const { crystal_count } = this.state;
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
    console.log(this.state)
    return (
      <ALTTPRContext.Provider value={contextValue}>
        <div className="App">
          <Dungeons />
          <Inventory />
          <Map />
        </div>
      </ALTTPRContext.Provider>
    );
  }
}

export default App;
