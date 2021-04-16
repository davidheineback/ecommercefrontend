import React from 'react'

export const GlobalStateContext = React.createContext(null)

export default function GlobalState({ children }) {
  const [itemsInCart, setItemsInCart] = React.useState(0)

  const state = {
    setItemsInCart: setItemsInCart,
    itemsInCart: itemsInCart,
  }

  React.useEffect(() => {
  }, [itemsInCart])


  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  )
}