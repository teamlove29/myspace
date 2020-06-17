import React, { createContext, useState} from 'react'

export const StoreContext = createContext()

export const StoreContextProvider = ({children}) => {
    const [token, setToken] = useState('555555');

    const store = {
        token : token, setToken,
      }

    return <StoreContext.Provider value={store}>{children} </StoreContext.Provider>
    
}
