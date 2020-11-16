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
       hasMagic_Powder, hasLantern, hasMagic_Cape, hasMirror, hasBook, 
       hasFighter_Sword, hasMaster, hasAgahnim, hasShovel, hasMushroom, hasHookshot, 
       hasFlute, hasBottle, Dng_Icons } = this.state;

    if (LW_Func.master_sword_pedestal(hasBook)) { this.forceUpdate() };
    if (LW_Func.lumberjack(hasAgahnim)) { this.forceUpdate() };
    if (LW_Func.sick_kid(hasBottle)) { this.forceUpdate() };
    if (LW_Func.library(hasBoots)) { this.forceUpdate() };
    if (LW_Func.magic_bat(hasHammer, hasMagic_Powder)) { this.forceUpdate() };
    if (LW_Func.dig_spot(hasShovel)) { this.forceUpdate() };
    if (LW_Func.bonk_rocks(hasBoots)) { this.forceUpdate() };
    if (LW_Func.desert_ledge(hasBook)) { this.forceUpdate() };
    if (LW_Func.hobo(hasFlippers)) { this.forceUpdate() };
    if (LW_Func.waterfall_fairy(hasFlippers)) { this.forceUpdate() };
    if (LW_Func.zora(hasFlippers)) { this.forceUpdate() };
    if (LW_Func.witches_hut(hasMushroom)) { this.forceUpdate() };
    if (LW_Func.old_man(hasPower_Glove, hasLantern)) { this.forceUpdate() };
    if (LW_Func.spectale_rock(hasMirror)) { this.forceUpdate() };
    if (LW_Func.paradox_cave(hasHammer, hasHookshot, hasMirror)) { this.forceUpdate() };
    if (LW_Func.spiral_cave(hasHammer, hasHookshot, hasMirror)) { this.forceUpdate() };
    if (LW_Func.ether_tablet(hasMirror, hasBook, hasHammer, hasHookshot)) { this.forceUpdate() };
    if (LW_Func.desert_ledge(hasBook)) { this.forceUpdate() };
    if (LW_Func.floating_island(hasHookshot, hasMirror, hasPower_Glove)) { this.forceUpdate() };
    if (LW_Func.checkerboard_cave(hasFlute, hasTitans_Mitt, hasMirror)) { this.forceUpdate() };
    
    if(LW_Func.kings_tomb(hasMoon_Pearl, hasMirror, hasTitans_Mitt, hasBoots)) {this.forceUpdate()};
    if (LW_Func.agahnim(hasMaster, hasMagic_Cape, hasLantern, hasFighter_Sword)) { this.forceUpdate() };
    if (LW_Func.hyrule_castle(hasPower_Glove, hasLantern)) { this.forceUpdate() };

    if (hasMoon_Pearl) {
      if (hasTitans_Mitt || (hasPower_Glove && hasHammer)) {
        if (LW_Func.graveyard_ledge(hasMirror)) { this.forceUpdate() };
        if (LW_Func.purple_chest(hasTitans_Mitt)) { this.forceUpdate() };
        if (LW_Func.lw_dwarven_smith(hasTitans_Mitt)) { this.forceUpdate() };
        if (LW_Func.lake_hylia(hasMirror)) { this.forceUpdate() };
        if (LW_Func.bombos_tablet(hasMirror, hasBook, hasMaster)) { this.forceUpdate() };
      }
    }

    if(Dng_Icons[9].status === 'beatable') {
      if(LW_Func.mimic_cave(hasMirror)) { this.forceUpdate() };
    }
  }

  dw_locations = () => {
    const { hasHookshot, hasHammer, hasPower_Glove, hasTitans_Mitt, 
      hasMoon_Pearl, hasFlute, hasAgahnim, hasMagic_Cape, hasCane_of_Bryna } = this.state;

      if (DW_Func.pyramid_ledge(hasHammer, hasPower_Glove, hasMoon_Pearl, hasAgahnim)) { this.forceUpdate() };

      if (hasMoon_Pearl) {
        if (hasTitans_Mitt || (hasPower_Glove && hasHammer)) {
          if (DW_Func.bumper_cave(hasMagic_Cape)) { this.forceUpdate() };
          if (DW_Func.treasure_game()) { this.forceUpdate() };
          if (DW_Func.c_shaped()) { this.forceUpdate() };
          if (DW_Func.bombable_shack()) { this.forceUpdate() };
          if (DW_Func.haunted_grove()) { this.forceUpdate() };
          if (DW_Func.dw_dwarven_smith(hasTitans_Mitt)) { this.forceUpdate() };
          if (DW_Func.hammer_pegs(hasHammer)) { this.forceUpdate() };
          if (DW_Func.purple_chest(hasTitans_Mitt)) { this.forceUpdate() };
          if (DW_Func.digging_game()) { this.forceUpdate() };
          if (DW_Func.mire_shack(hasFlute, hasTitans_Mitt)) { this.forceUpdate() };
          if (DW_Func.hype_cave()) { this.forceUpdate() };
          if (DW_Func.spike_cave(hasPower_Glove, hasMagic_Cape, hasCane_of_Bryna)) { this.forceUpdate() };
          if (DW_Func.super_bunny(hasHookshot)) { this.forceUpdate() };
          if (DW_Func.hookshot_cave(hasHookshot)) { this.forceUpdate() };
          if (DW_Func.catfish(hasTitans_Mitt)) { this.forceUpdate() };
        }
      }
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
