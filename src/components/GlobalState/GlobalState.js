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
  const [isLoading, setIsLoading] = useState(true)
  const [loginFlashMessage, setLoginFlashMessage] = useState('Invalid username or password')
  const [products, setProducts] = useState()


  async function handleLogOut() {
    await API.userLogout(currentStoredUser.user.sub)
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

  const setNewProductAttributes = [
    {name: 'name', displayname: 'Name'},
    {name: 'price', displayname: 'Price'},
    {name: 'brand', displayname: 'Brand'},
    {name: 'description', displayname: 'Description'},
    {name: 'detailedDescription', displayname: 'Detailed description'},
    {name: 'image', displayname: 'Image'},
    {name: 'inStock', displayname: 'Number in stock'},
    {name: 'productCategory', displayname: 'Product category'},
    {name: 'productSubCategory', displayname: 'Product Subcategory'}
  ]

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
    setLoginFlashMessage,
    handleLogOut,
    checkUserLoginStatus,
    setNewProductAttributes,
    isLoading,
    setIsLoading,
    products,
    setProducts
  }

  return (
    <GlobalStateContext.Provider value={state}>
      {children}
    </GlobalStateContext.Provider>
  )
}