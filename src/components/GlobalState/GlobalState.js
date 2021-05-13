import React, { useState, useEffect } from 'react'
import * as API from '../../fetch'
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
  const [loginFlashMessage, setLoginFlashMessage] = useState('Invalid username or password')


  async function handleLogOut() {
    await API.userLogout(currentStoredUser.user.sub)
    setLoggedIn(false)
    setLoginFlashMessage('User Logged out')
    setCurrentUser('')
    setLoginFlashMessage('Invalid username or password')
  }

  async function checkUserLoginStatus () {
    if (currentUser.length < 1) {
      return false
    } else {
      setLoggedIn(await API.authUser(currentUser))
    }
  }
  
  function setEditableAttributes () {
    return [
      {name: 'name', displayname: 'Name'},
      {name: 'price', displayname: 'Price'},
      {name: 'inStock', displayname: 'Number in stock'},
      {name: 'brand', displayname: 'Brand'},
      {name: 'description', displayname: 'Description'},
      {name: 'detailedDescription', displayname: 'Detailed description'},
      {name: 'image', displayname: 'Image'},
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
    loginFlashMessage,
    handleLogOut,
    checkUserLoginStatus
  }

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  )
}