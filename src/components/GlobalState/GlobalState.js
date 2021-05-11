import React, { useState, useEffect } from 'react'

export const GlobalStateContext = React.createContext(null)

export default function GlobalState({ children }) {
  const itemsInCartFromLocalStorage = localStorage.getItem('itemsInCart') ? JSON.parse(localStorage.getItem('itemsInCart')) : []
  const currentStoredUser = localStorage.getItem('tokens') ? JSON.parse(localStorage.getItem('tokens')) : []
  const [currentUser, setCurrentUser] = useState(currentStoredUser)
  const [itemsInCart, setItemsInCart] = useState(itemsInCartFromLocalStorage)
  const [emptyCartFlash, setEmptyCartFlash] = useState(false)
  const cartFlashMessage = 'No items in cart'
  const [currentSlug, setCurrentSlug] = useState('/')
  const [productAddedToCart, setProductAddedToCart] = useState(false)
  const [loggedIn, setLoggedIn] = useState(false)
  const [editableAttributes] = useState(setEditableAttributes)
  const [loginFlash, setLoginFlash] = useState(false)
  const loginFlashMessage = 'Invalid username or password'


  
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
    editableAttributes,
    currentUser,
    setCurrentUser,
    loginFlash,
    setLoginFlash,
    loginFlashMessage
  }

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  )
}