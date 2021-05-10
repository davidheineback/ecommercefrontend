import React, { useState, useEffect } from 'react'

export const GlobalStateContext = React.createContext(null)

export default function GlobalState({ children }) {
  const itemsInCartFromLocalStorage = localStorage.getItem('itemsInCart') ? JSON.parse(localStorage.getItem('itemsInCart')) : []
  const [itemsInCart, setItemsInCart] = useState(itemsInCartFromLocalStorage)
  const [emptyCartFlash, setEmptyCartFlash] = useState(false)
  const [cartFlashMessage] = useState('No items in cart')
  const [currentSlug, setCurrentSlug] = useState('/')
  const [productAddedToCart, setProductAddedToCart] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [editableAttributes] = useState(setEditableAttributes)

  
  function setEditableAttributes () {
    return [
      'name',
      'price',
      'number in stock',
      'brand',
      'description',
      'detailedDescription',
      'image'
    ]
  }

  useEffect(() => {
    const timeId = setTimeout(() => {
      setProductAddedToCart(false)
    }, 2000)
  
    return () => {
      clearTimeout(timeId)
    }   
  },[productAddedToCart, setProductAddedToCart])


  useEffect(() => {
    localStorage.setItem('itemsInCart', JSON.stringify(itemsInCart))
  },[itemsInCart])

  const state = {
    setItemsInCart,
    itemsInCart,
    setEmptyCartFlash,
    emptyCartFlash,
    cartFlashMessage,
    setCurrentSlug,
    currentSlug,
    productAddedToCart,
    setProductAddedToCart,
    loggedIn,
    setLoggedIn,
    editableAttributes
  }

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  )
}