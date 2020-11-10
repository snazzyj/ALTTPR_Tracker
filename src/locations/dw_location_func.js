import DW_Loc from './dw_loc_import';

const dw_loc_func = {
    bumper_cave(magic_cape) {
        if(magic_cape) {
            return this.unlocked('Bumper Cave')
        }
    },
    treasure_game() {
        return this.unlocked('Treasure Game');
    },
    c_shaped() {
        return this.unlocked('C Shaped House');
    },
    bombable_shack() {
        return this.unlocked('Bombable Shack');
    },
    dw_dwarven_smith(titans_mitts) {
        if(titans_mitts) {
            return this.unlocked('DW Dwarven Smith')
        }
    },
    hammer_pegs(hammer) {
        if(hammer) {
            return this.unlocked('Hammer Pegs')
        }
    },
    haunted_grove() {
        return this.unlocked('Haunted Grove');
    },
    digging_game() {
        return this.unlocked('Digging Game');
    },
    mire_shack(flute, titans_mitts) {
        if(flute && titans_mitts) {
            return this.unlocked('Misery Mire Shack')
        }
    },
    hype_cave() {
        return this.unlocked('Hype Cave');
    },
    pyramid_ledge(hammer, agahnim) {
        if(hammer || agahnim) {
            return this.unlocked('Pyramid Ledge');
        }
    },
    spike_cave(power_glove, magic_cape, cane_of_bryna) {
        if(power_glove) {
            if(magic_cape || cane_of_bryna) {
                return this.unlocked('Spike Cave');
            }
        }
    },
    super_bunny(hookshot) {
        if(hookshot) {
            return this.unlocked('Super Bunny Cave');
        }
    },
    hookshot_cave(hookshot) {
        if(hookshot) {
            return this.unlocked('Hookshot Cave');
        }
    },
    catfish(hammer) {
        if(hammer) {
            return this.unlocked('Catfish');
        }
    },
    unlocked(name) {
        return DW_Loc.find((loc) => {
            if (loc.name === name) {
                return loc.status = 'unlocked' 
            }
        })
    },
}

export default dw_loc_func;