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
    dig_spot(shovel) {
        if(shovel) {
            return this.unlocked('Dig Spot')
        }
    },
    hyrule_castle() {

    },
    bonk_rocks(boots) {
        if(boots) {
            return this.unlocked('Bonk Rocks')
        }
    },
    graveyard_ledge() {
        return this.unlocked('Graveyard Ledge')
    },
    kings_tomb(power_glove, titans_mitt, moon_pearl, mirror) {
        if(titans_mitt || (power_glove && moon_pearl && mirror)) {
            return this.unlocked('Kings Tomb')
        }
    },
    lake_hylia() {

    },
    hobo(flippers) {
        if(flippers) {
            return this.unlocked('Hobo')
        }
    },
    purple_chest() {
        return this.unlocked('Purple Chest')
    },
    bombos_tablet() {

    },
    checkerboard_cave(flute, titans_mitt, mirror) {
        if(flute && titans_mitt && mirror) {
            return this.unlocked('Checkerboard Cave')
        }
    },
    desert_ledge(book) {
        if(book) {
            return this.unlocked('Desert Ledge')
        }
    },
    witches_hut(mushroom) {
        if(mushroom) {
            return this.unlocked('Witches Hut')
        }
    },
    waterfall_fairy(flippers) {
        if(flippers) {
            return this.unlocked('Waterfall Fairy')
        }
    },
    zora(flippers) {
        if(flippers) {
            return this.unlocked('Zora Area')
        }
    },
    old_man(power_glove, lantern) {
        if(power_glove) {
            if(lantern) {
                return this.unlocked('Old Man')
            } else {
                return this.accessible('Old Man')
            }
        }
    },
    spectale_rock(mirror) {
        if(mirror) {
            return this.unlocked('Spectale Rock Cave')
        }
    },
    paradox_cave(hammer, hookshot, mirror) {
        if( hookshot || (hammer && mirror)) {
            return this.unlocked('Paradox Cave')
        }
    },
    spiral_cave(hammer, hookshot, mirror) {
        if( hookshot || (hammer && mirror)) {
            return this.unlocked('Spiral Cave')
        }
    },
    mimic_cave() {
        
    },
    floating_island(hookshot, mirror, power_glove) {
        if(power_glove) {
            if(hookshot && mirror) {
                return this.unlocked('Floating Island')
            } else {
                return this.visible('Floating Island')
            }
        }

    },
    ether_tablet(mirror, book, hammer, hookshot) {
        if(mirror || (hammer && hookshot)) {
            if(book) {
                return this.unlocked('Ether Tablet')
            } else {
                return this.visible('Ether Tablet')
            }
        }
    },
    accessible(name) {
        return LW_Loc.find((loc) => {
            if (loc.name === name) {
                return loc.status = 'accessible' 
            }
        })
    },
    visible(name) {
        return LW_Loc.find((loc) => {
            if (loc.name === name) {
                return loc.status = 'visible' 
            }
        })
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