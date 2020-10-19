import Dng_Icons from './dungeon_import';

const dng_func = {
    eastern_palace(bow, lantern) {
        if (bow && lantern) {
            this.setDngStatus('EP')
            return true;
        }
    },
    desert_palace(book, power_glove, boots, lantern, fire_rod, flute, titans_mitt, mirror) {
        if ((book && power_glove && boots) || (flute && titans_mitt && mirror && boots)) {
            if (lantern || fire_rod) {
                this.setDngStatus('DP');
                return true;
            }
        }
    },
    tower_of_hera(lantern, fire_rod, fighter_sword, hammer, mirror, power_glove, hookshot, flute) {
        if(power_glove || flute) {
            console.log('DM access')
            if((hammer && hookshot) || mirror) {
                console.log('TOH Access')
                if(lantern || fire_rod) {
                    console.log('Can get to boss')
                    if(hammer || fighter_sword) {
                        console.log('Can kill boss')
                        this.setDngStatus('TH');
                        return true;
                    }
                }
            }
        }
    },
    palace_of_darkness(lantern, hammer, bow) {
        if(lantern && hammer && bow) {
            this.setDngStatus('POD')
        }
    },
    swamp_palace(hookshot, flippers, hammer, mirror) {
        if(hookshot && flippers && hammer && mirror) {
            this.setDngStatus('SP')
        }
    },
    skull_woods(fighter_sword, fire_rod) {
        if(fighter_sword && fire_rod) {
            this.setDngStatus('SW')
        }
    },
    thieves_town(hammer) {
        if(hammer) {
            this.setDngStatus('TT')
        }
    },
    ice_palace(hammer, flippers, titans_mitt, hookshot, cane_of_somaria, fire_rod, bombos) {
        if(hammer && flippers && titans_mitt && hookshot && cane_of_somaria) {
            if(fire_rod || bombos) {
                this.setDngStatus('IP')
            }
        }
    },
    misery_mire(cane_of_somaria, lantern, titans_mitt, flute, hookshot, boots, bombos, ether, quake) {
        if(cane_of_somaria && lantern && flute && titans_mitt) {
            if(hookshot || boots) {
                if(bombos || ether || quake) {
                    this.setDngStatus('MM')
                }
            }
        }
    },
    turtle_rock(cane_of_somaria, lantern, titans_mitt, ice_rod, fire_rod, hammer, bombos, ether, quake) {
        if(cane_of_somaria && lantern && ice_rod && fire_rod && titans_mitt && hammer) {
            if(bombos || ether || quake) {
                this.setDngStatus('TR')
            }
        }
    },
    ganons_tower(boots, hammer, hookshot, cane_of_somaria, fire_rod, bow) {
        if(boots && hammer && hookshot && cane_of_somaria && fire_rod && bow) {
            this.setDngStatus('GT')
        }
    },
    agahnim(magic_cape, master_sword, fighter_sword, lantern) {
        if(master_sword || (magic_cape && fighter_sword)) {
            if(lantern) {
                return true;
            }
        }
    },
    setDngStatus(name) {
        console.log('setdngstatus ran')
        // eslint-disable-next-line array-callback-return
        return Dng_Icons.find((dng) => {
            if (dng.nickname === name) {
                return dng.status = 'unlocked'
            }
        })
    }
}

export default dng_func;