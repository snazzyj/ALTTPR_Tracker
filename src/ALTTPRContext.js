import React from 'react';

const ALTTPRContext = React.createContext({
    inventory: {},
    dungeons: {},
    lw_loc: {},
    dw_loc: {},
    handleInventory: () => {},
    incrementCrystalCount: () => {}
})

export default ALTTPRContext