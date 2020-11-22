import DW_Loc from './dw_loc_import';

const dw_loc_func = {
    bumper_cave(magic_cape) {
        if (magic_cape) {
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
        if (titans_mitts) {
            return this.unlocked('DW Dwarven Smith')
        }
    },
    hammer_pegs(hammer) {
        if (hammer) {
            return this.unlocked('Hammer Pegs')
        }
    },
    purple_chest(titans_mitts) {
        if (titans_mitts) {
            return this.unlocked('DW Purple Chest')
        }
    },
    haunted_grove() {
        return this.unlocked('Haunted Grove');
    },
    digging_game() {
        return this.unlocked('Digging Game');
    },
    mire_shack(flute, titans_mitts) {
        if (flute && titans_mitts) {
            return this.unlocked('Misery Mire Shack')
        }
    },
    hype_cave() {
        return this.unlocked('Hype Cave');
    },
    pyramid_ledge(hammer, power_glove, moon_pearl, agahnim) {
        if ( (hammer && power_glove && moon_pearl) || agahnim) {
            return this.unlocked('Pyramid Ledge');
        }
    },
    spike_cave(hammer, power_glove, magic_cape, cane_of_byrna) {
        if (power_glove && hammer && (magic_cape || cane_of_byrna)) {
                return this.unlocked('Spike Cave');
        }
    },
    super_bunny(hookshot) {
        if (hookshot) {
            return this.unlocked('Super Bunny Cave');
        }
    },
    hookshot_cave(hookshot) {
        if (hookshot) {
            return this.unlocked('Hookshot Cave');
        }
    },
    catfish(power_glove, hammer, moon_pearl, agahnim, titans_mitts) {
        if (moon_pearl) {
            if ( (hammer && titans_mitts) || (agahnim && power_glove) ) {
                return this.unlocked('Catfish');
            }
        }
    },
    unlocked(name) {
        // eslint-disable-next-line array-callback-return
        return DW_Loc.find((loc) => {
            if (loc.name === name) {
                return loc.status = 'unlocked' 
            }
        })
    },
}

export default dw_loc_func;