import React from 'react'

export const GlobalStateContext = React.createContext(null)

export default function GlobalState({ children }) {
  const [itemsInCart, setItemsInCart] = React.useState([])
  const [emptyCartFlash, setEmptyCartFlash] = React.useState(false)
  const [cartFlashMessage] = React.useState('No items in cart')
  const [currentSlug, setCurrentSlug] = React.useState('/')


  const state = {
    setItemsInCart: setItemsInCart,
    itemsInCart: itemsInCart,
    setEmptyCartFlash: setEmptyCartFlash,
    emptyCartFlash: emptyCartFlash,
    cartFlashMessage: cartFlashMessage,
    setCurrentSlug: setCurrentSlug,
    currentSlug: currentSlug
  }

  React.useEffect(() => {
  }, [itemsInCart])


  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  )
}