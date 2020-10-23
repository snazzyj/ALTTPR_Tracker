import React from 'react';

const ALTTPRContext = React.createContext({
    inventory: {},
    handleInventory: () => {},
    incrementCrystalCount: () => {}
})

export default ALTTPRContext