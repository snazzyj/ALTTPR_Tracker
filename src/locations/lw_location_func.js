import LW_Loc from './lw_loc_import';

const lw_loc_func = {
    master_sword_pedestal(book) {
        if(book) {
            return this.unlocked('Master Sword Pedestal')
        }
    },
    lumberjack(agahnim) {
        if(agahnim) {
            return this.unlocked('Lumberjack')
        }
    },
    sick_kid(bottle) {
        if(bottle) {
            return this.unlocked('Sick Kid')
        }
    },
    library(boots) {
        if(boots) {
            return this.unlocked('Library')
        }
    },
    lw_dwarven_smith(titans_mitt) {
        if(titans_mitt) {
            return this.unlocked('LW Dwarven Smith')
        }
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
    hyrule_castle(power_glove, lantern) {
        if(power_glove && lantern) {
            return this.unlocked('Hyrule Castle')
        }
    },
    bonk_rocks(boots) {
        if(boots) {
            return this.unlocked('Bonk Rocks')
        }
    },
    graveyard_ledge(mirror) {
        if(mirror) {
            return this.unlocked('Graveyard Ledge')
        }
    },
    kings_tomb(power_glove, titans_mitt, moon_pearl, mirror, boots) {
        if(titans_mitt || (power_glove && moon_pearl && mirror)) {
            if(boots) {
                return this.unlocked('Kings Tomb')
            }
        }
    },
    lake_hylia(mirror) {
        if(mirror) {
            return this.unlocked('Lake Hylia')
        }
    },
    hobo(flippers) {
        if(flippers) {
            return this.unlocked('Hobo')
        }
    },
    purple_chest(titans_mitt) {
        if(titans_mitt) {
            return this.unlocked('LW Purple Chest')
        }
    },
    bombos_tablet(mirror, book, master) {
        if(mirror) {
            if(book) {
                if(master) {
                    return this.unlocked('Bombos Tablet')
                } else {
                    return this.visible('Bombos Tablet')
                }
            }
        }
    },
    south_grove_cave(mirror) {
        if(mirror) {
            return this.unlocked('South of Grove')
        }
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
    mimic_cave(mirror) {
        if(mirror) {
            return this.unlocked('Mimic Cave')
        }
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
    agahnim(master, magic_cape, lantern, fighter) {
        if(master || (magic_cape && fighter)) {
            if(lantern) {
                return this.unlocked('Agahnim')
            } else {
                return this.beatable('Agahnim')
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
        // eslint-disable-next-line array-callback-return
        return LW_Loc.find((loc) => {
            if (loc.name === name) {
                return loc.status = 'visible' 
            }
        })
    },
    unlocked(name) {
        // eslint-disable-next-line array-callback-return
        return LW_Loc.find((loc) => {
            if (loc.name === name) {
                return loc.status = 'unlocked' 
            }
        })
    },
    beatable(name) {
        // eslint-disable-next-line array-callback-return
        return LW_Loc.find((loc) => {
            if (loc.name === name) {
                return loc.status = 'beatable' 
            }
        })
    }
}

export default lw_loc_func;