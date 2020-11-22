import React, { Component } from 'react';
import Inventory from '../src/inventory/inventory';
import Dungeons from '../src/dungeons/dungeons';
import Map from '../src/map_overview/map';
import Icons from '../src/inventory/icon_import';
import Dng_Icons from '../src/dungeons/dungeon_import';
import Dng_Func from '../src/dungeons/dng_func';
import LW_Func from '../src/locations/lw_location_func';
import LW_Loc from '../src/locations/lw_loc_import';
import DW_Func from '../src/locations/dw_location_func';
import DW_Loc from '../src/locations/dw_loc_import';
import ALTTPRContext from './ALTTPRContext';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      inventory: this.getInitalInvState(),
      dungeons: this.getInitalDngState(),
      crystal_count: this.getCrystalCount(),
      lw_loc: this.getInitialLWLoc(),
      dw_loc: this.getInitialDWLoc()
    }
  }
  
  getInitalInvState = () => {
    const prevSave = JSON.parse(localStorage.getItem('save_state'))
    
    if(prevSave) {
      return prevSave.inventory
    } else {
      return Icons
    }
  }

  getInitalDngState = () => {
    const prevSave = JSON.parse(localStorage.getItem('save_state'))
    
    if(prevSave) {
      return prevSave.dungeons
    } else {
      return Dng_Icons
    }
  }

  getCrystalCount = () => {
    const prevSave = JSON.parse(localStorage.getItem('save_state'))
    
    if(prevSave) {
      return prevSave.crystal_count
    } else {
      return 0
    }
  }

  getInitialLWLoc = () => {
    const prevSave = JSON.parse(localStorage.getItem('save_state'))
    
    if(prevSave) {
      return prevSave.lw_loc
    } else {
      return LW_Loc
    }
  }

  getInitialDWLoc = () => {
    const prevSave = JSON.parse(localStorage.getItem('save_state'))
    
    if(prevSave) {
      return prevSave.dw_loc
    } else {
      return DW_Loc
    }
  }

  saveStatus = () => {
    const prevSave = JSON.parse(localStorage.getItem('save_state'))
    if(prevSave !== this.state) {
      localStorage.setItem('save_state', JSON.stringify(this.state))
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
      hasBook, hasFighter_Sword, hasBombos, hasAgahnim } = this.state;

    let EP = Dng_Func.eastern_palace(hasBow);
    let DP = Dng_Func.desert_palace(hasBook, hasPower_Glove, hasBoots, hasLantern, hasFire_Rod, hasFlute, hasTitans_Mitt, hasMirror);
    let TOH = Dng_Func.tower_of_hera(hasLantern, hasFire_Rod, hasFighter_Sword, hasHammer, hasMirror, hasPower_Glove, hasHookshot, hasFlute);


    if (EP) { this.setState({ EP: EP.status }) }
    if (DP) { this.setState({ DP: DP.status }) }
    if (TOH) { this.setState({ TOH: TOH.status }) }

    if (hasMoon_Pearl) {
      if (hasTitans_Mitt || (hasPower_Glove && hasHammer) || hasAgahnim) {

        let POD = Dng_Func.palace_of_darkness(hasLantern, hasHammer, hasBow);
        let SP = Dng_Func.swamp_palace(hasHookshot, hasFlippers, hasHammer, hasMirror);
        let SW = Dng_Func.skull_woods(hasFighter_Sword, hasFire_Rod);
        let TT = Dng_Func.thieves_town(hasHammer);
        let IP = Dng_Func.ice_palace(hasHammer, hasFlippers, hasTitans_Mitt, hasHookshot, hasFire_Rod, hasBombos)
        let MM = Dng_Func.misery_mire(hasCane_of_Somaria, hasLantern, hasTitans_Mitt, hasFlute, hasHookshot, hasBoots);
        let TR = Dng_Func.turtle_rock(hasCane_of_Somaria, hasLantern, hasTitans_Mitt, hasIce_Rod, hasFire_Rod, hasHammer);

        if (POD) { this.setState({ POD: POD.status }) }
        if (SP) { this.setState({ SP: SP.status }) }
        if (SW) { this.setState({ SW: SW.status }) }
        if (TT) { this.setState({ TT: TT.status }) }
        if (IP) { this.setState({ IP: IP.status }) }
        if (MM) { this.setState({ MM: MM.status }) }
        if (TR) { this.setState({ TR: TR.status }) }
      }
    }

    this.saveStatus();
  }

  checkLocLogic = () => {
    this.lw_locations();
    this.dw_locations();
  }

  lw_locations = () => {
    const { hasBoots, hasHammer, hasPower_Glove, hasTitans_Mitt, hasFlippers, hasMoon_Pearl,
      hasMagic_Powder, hasLantern, hasMagic_Cape, hasMirror, hasBook,
      hasFighter_Sword, hasMaster, hasAgahnim, hasShovel, hasMushroom, hasHookshot,
      hasFlute, hasBottle, dungeons } = this.state;

    let MSP = LW_Func.master_sword_pedestal(hasBook);
    let LJ = LW_Func.lumberjack(hasAgahnim);
    let SK = LW_Func.sick_kid(hasBottle);
    let Library = LW_Func.library(hasBoots);
    let MB = LW_Func.magic_bat(hasHammer, hasMagic_Powder);
    let DS = LW_Func.dig_spot(hasShovel);
    let BR = LW_Func.bonk_rocks(hasBoots);
    let DL = LW_Func.desert_ledge(hasBook);
    let Hobo = LW_Func.hobo(hasFlippers);
    let WF = LW_Func.waterfall_fairy(hasFlippers);
    let Zora = LW_Func.zora(hasFlippers);
    let WH = LW_Func.witches_hut(hasMushroom);
    let OM = LW_Func.old_man(hasPower_Glove, hasLantern);
    let SR = LW_Func.spectale_rock(hasMirror);
    let PR = LW_Func.paradox_cave(hasHammer, hasHookshot, hasMirror);
    let LW_SC = LW_Func.spiral_cave(hasHammer, hasHookshot, hasMirror);
    let ET = LW_Func.ether_tablet(hasMirror, hasBook, hasHammer, hasHookshot);
    let FI = LW_Func.floating_island(hasHookshot, hasMirror, hasPower_Glove);
    let CC = LW_Func.checkerboard_cave(hasFlute, hasTitans_Mitt, hasMirror);
    let KT = LW_Func.kings_tomb(hasPower_Glove, hasTitans_Mitt, hasMoon_Pearl, hasMirror, hasBoots);
    let Aga = LW_Func.agahnim(hasMaster, hasMagic_Cape, hasLantern, hasFighter_Sword);
    let LW_HC = LW_Func.hyrule_castle(hasPower_Glove, hasLantern);

    if (MSP) { this.setState({MSP: MSP.status}) };
    if (LJ) { this.setState({LJ: LJ.status}) };
    if (SK) { this.setState({SK : SK.status}) };
    if (Library) { this.setState({Library: Library.status}) };
    if (MB) { this.setState({MB : MB.status}) };
    if (DS) { this.setState({DS : DS.status}) };
    if (BR) { this.setState({BR : BR.status}) };
    if (DL) { this.setState({DL : DL.status}) };
    if (Hobo) { this.setState({Hobo : Hobo.status}) };
    if (WF) { this.setState({WF : WF.status}) };
    if (Zora) { this.setState({Zora : Zora.status}) };
    if (WH) { this.setState({WH : WH.status}) };
    if (OM) { this.setState({OM : OM.status}) };
    if (SR) { this.setState({SR : SR.status}) };
    if (PR) { this.setState({PR : PR.status}) };
    if (LW_SC) { this.setState({LW_SC : LW_SC.status}) };
    if (ET) { this.setState({ET : ET.status}) };
    if (FI) { this.setState({FI : FI.status}) };
    if (CC) { this.setState({CC : CC.status}) };
    if (KT) { this.setState({KT : KT.status}) };
    if (Aga) { this.setState({Aga : Aga.status}) };
    if (LW_HC) { this.setState({LW_HC : LW_HC.status}) };

    if (hasMoon_Pearl) {
      if (hasTitans_Mitt || (hasPower_Glove && hasHammer) || hasAgahnim) {

        let GL = LW_Func.graveyard_ledge(hasMirror);
        let PC = LW_Func.purple_chest(hasTitans_Mitt);
        let LW_DS = LW_Func.lw_dwarven_smith(hasTitans_Mitt);
        let LH = LW_Func.lake_hylia(hasMirror);
        let BT = LW_Func.bombos_tablet(hasMirror, hasBook, hasMaster);
        let SGC = LW_Func.south_grove_cave(hasMirror);

        if (GL) { this.setState({GL : GL.status}) };
        if (PC) { this.setState({PC : PC.status}) };
        if (LW_DS) { this.setState({LW_DS : LW_DS.status}) };
        if (LH) { this.setState({LH : LH.status}) };
        if (BT) { this.setState({BT : BT.status}) };
        if (SGC) { this.setState({SGC : SGC.status}) };
      }
    }

    if (dungeons[9].status === 'beatable' || dungeons[9].status === 'unlocked') {
      let MC = LW_Func.mimic_cave(hasMirror)
      if (MC) { this.setState({MC : MC.status}) };
    }

    this.saveStatus();
  }

  dw_locations = () => {
    const { hasHookshot, hasHammer, hasPower_Glove, hasTitans_Mitt,
      hasMoon_Pearl, hasFlute, hasAgahnim, hasMagic_Cape, hasCane_of_Byrna } = this.state;
    
    let PL = DW_Func.pyramid_ledge(hasHammer, hasPower_Glove, hasMoon_Pearl, hasAgahnim);
    let CF = DW_Func.catfish(hasPower_Glove, hasHammer, hasMoon_Pearl, hasAgahnim, hasTitans_Mitt);
    
    if (PL) { this.setState({PL: PL.status}) };
    if (CF) { this.setState({CF: CF.status}) };

    if (hasMoon_Pearl) {
      if (hasTitans_Mitt || (hasPower_Glove && hasHammer) || (hasAgahnim && (hasHookshot || hasHammer))) {

        let BC = DW_Func.bumper_cave(hasMagic_Cape);
        let TG = DW_Func.treasure_game();
        let CS = DW_Func.c_shaped();
        let BS = DW_Func.bombable_shack();
        let HG = DW_Func.haunted_grove();
        let DW_DS = DW_Func.dw_dwarven_smith(hasTitans_Mitt);
        let HP = DW_Func.hammer_pegs(hasHammer);
        let PC = DW_Func.purple_chest(hasTitans_Mitt);
        let DG = DW_Func.digging_game();
        let MM = DW_Func.mire_shack(hasFlute, hasTitans_Mitt);
        let DW_HC = DW_Func.hype_cave();
        let DW_SC = DW_Func.spike_cave(hasHammer, hasPower_Glove, hasMagic_Cape, hasCane_of_Byrna);
        let SB = DW_Func.super_bunny(hasHookshot);
        let HS = DW_Func.hookshot_cave(hasHookshot);
        
        if (BC) { this.setState({BC: BC.status}) };
        if (TG) { this.setState({TG: TG.status}) };
        if (CS) { this.setState({CS: CS.status}) };
        if (BS) { this.setState({BS: BS.status}) };
        if (HG) { this.setState({HG: HG.status}) };
        if (DW_DS) { this.setState({DW_DS: DW_DS.status}) };
        if (HP) { this.setState({HP: HP.status}) };
        if (PC) { this.setState({PC: PC.status}) };
        if (DG) { this.setState({DG: DG.status}) };
        if (MM) { this.setState({MM: MM.status}) };
        if (DW_HC) { this.setState({DW_HC: DW_HC.status}) };
        if (DW_SC) { this.setState({DW_SC: DW_SC.status}) };
        if (SB) { this.setState({SB: SB.status}) };
        if (HS) { this.setState({HS: HS.status}) };
      }
    }

    this.saveStatus();
  }

  incrementCrystalCount = () => {
    const { crystal_count } = this.state;
    this.setState({
      crystal_count: crystal_count + 1
    }) 
  }

  render() {
    console.log(this.state)
    const contextValue = {
      inventory: this.state.inventory,
      dungeons: this.state.dungeons,
      lw_loc: this.state.lw_loc,
      dw_loc: this.state.dw_loc,
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
