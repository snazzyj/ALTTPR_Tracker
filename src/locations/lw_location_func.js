import LW_Loc from './lw_loc_import';

const lw_loc_func = {
    master_sword_pedestal(book) {
        this.desert_ledge(book);
        if(book) {
            return this.unlocked('Master Sword Pedestal')
        }
    },
    lumberjack(agahnim) {
        if(agahnim) {
            return this.unlocked('Lumberjack')
        }
    },
    library(boots) {
        if(boots) {
            return this.unlocked('Library')
        }
    },
    lw_dwarven_smith() {

    },
    magic_bat(hammer, powder) {
        if(hammer && powder) {
            return this.unlocked('Magic Bat')
        }
    },
    dig_spot() {

    },
    hyrule_castle() {

    },
    bonk_rocks() {

    },
    graveyard_ledge() {

    },
    kings_tomb() {

    },
    lake_hylia() {

    },
    hobo() {

    },
    purple_chest() {

    },
    bombos_tablet() {

    },
    checkerboard_cave() {

    },
    desert_ledge(book) {
        if(book) {
            return this.unlocked('Desert Ledge')
        }
    },
    witches_hut() {

    },
    waterfall_fairy() {

    },
    zora() {

    },
    old_man() {

    },
    spectale_rock() {

    },
    paradox_cave() {

    },
    spiral_cave() {

    },
    mimic_cave() {
        
    },
    floating_island() {

    },
    ether_tablet() {

    },
    beatable() {
        
    },
    unlocked(name) {
        return LW_Loc.find((loc) => {
            if (loc.name === name) {
                return loc.status = 'unlocked' 
            }
        })
    }
}

export default lw_loc_func;