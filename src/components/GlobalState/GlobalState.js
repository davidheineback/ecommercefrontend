import React, { useState, useEffect } from 'react'

export const GlobalStateContext = React.createContext(null)

export default function GlobalState({ children }) {
  const [itemsInCart, setItemsInCart] = useState([])
  const [emptyCartFlash, setEmptyCartFlash] = useState(false)
  const [cartFlashMessage] = useState('No items in cart')
  const [currentSlug, setCurrentSlug] = useState('/')


  const state = {
    setItemsInCart: setItemsInCart,
    itemsInCart: itemsInCart,
    setEmptyCartFlash: setEmptyCartFlash,
    emptyCartFlash: emptyCartFlash,
    cartFlashMessage: cartFlashMessage,
    setCurrentSlug: setCurrentSlug,
    currentSlug: currentSlug
  }

  useEffect(() => {
  }, [itemsInCart])


  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  )
}