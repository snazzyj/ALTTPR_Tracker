import Dng_Icons from './dungeon_import';

const dng_func = {
    eastern_palace(bow) {
            if (bow) {
                return this.unlocked('EP');
            }
            return null
    },
    desert_palace(book, power_glove, boots, lantern, fire_rod, flute, titans_mitt, mirror) {
        if ((book) || (flute && titans_mitt && mirror)) {
            if (power_glove && (lantern || fire_rod)) {
                if(boots) {
                    return this.unlocked('DP');
                } else {
                    return this.beatable('DP');
                }
            } else {
                return this.accessible('DP')
            } 
            
        }
    },
    tower_of_hera(lantern, fire_rod, fighter_sword, hammer, mirror, power_glove, hookshot, flute) {
        if (power_glove || flute) {
            if ((hammer && hookshot) || mirror) {
                if (lantern || fire_rod) {
                    if (hammer || fighter_sword) {
                        return this.unlocked('TH');  
                    }
                }
            }
        }
    },
    palace_of_darkness(lantern, hammer, bow) {
        if (hammer && bow) {
            if(lantern) {
                return this.unlocked('POD');
            } else {
                return this.beatable('POD');
            }
        }

        return this.accessible('POD');
    },
    swamp_palace(hookshot, flippers, hammer, mirror) {
        if (hookshot && flippers && hammer && mirror) {
            return this.unlocked('SP'); 
        }
    },
    skull_woods(fighter_sword, fire_rod) {
        if (fighter_sword && fire_rod) {
            return this.unlocked('SW'); 
        }

        return this.accessible('SW');
    },
    thieves_town(hammer) {
        if (hammer) {
            return this.unlocked('TT'); 
        }

        return this.accessible('TT');
    },
    ice_palace(hammer, flippers, titans_mitt, hookshot, fire_rod, bombos) {
        if (hammer && titans_mitt && hookshot) {
            if (fire_rod || bombos) {
                if(flippers) {
                    return this.unlocked('IP');
                } else {
                    return this.beatable('IP');
                }
            }
        }
    },
    misery_mire(cane_of_somaria, lantern, titans_mitt, flute, hookshot, boots) {
            if ( (hookshot || boots) && lantern && flute && titans_mitt) {
                if (cane_of_somaria) {
                    return this.unlocked('MM')
                } else {
                    return this.accessible('MM')
                }
            }
    
    },
    turtle_rock(cane_of_somaria, lantern, titans_mitt, ice_rod, fire_rod, hammer) {
            if (cane_of_somaria && ice_rod && fire_rod && titans_mitt && hammer) {
                if(lantern) {
                    return this.unlocked('TR');
                } else {
                    return this.beatable('TR')
                }
            }
    },
    accessible(name) {
        // eslint-disable-next-line array-callback-return
        return Dng_Icons.find((dng) => {
            if (dng.nickname === name) {
                return dng.status = 'accessible'
            }
        })
    },
    beatable(name) {
        // eslint-disable-next-line array-callback-return
        return Dng_Icons.find((dng) => {
            if (dng.nickname === name) {
                return dng.status = 'beatable'
            }
        })
    },
    unlocked(name) {
        // eslint-disable-next-line array-callback-return
        return Dng_Icons.find((dng) => {
            if (dng.nickname === name) {
                return dng.status = 'unlocked'
            }
        })
    }
}

export default dng_func;