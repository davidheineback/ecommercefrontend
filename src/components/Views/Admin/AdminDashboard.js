import React, { useState, useEffect } from 'react'
import { Wrapper, GradientBorder, TabSelect, Button } from '../../Utilities/UtilitiesExporter'
import ProductInDashboard from '../../Product/ProductInDashboard'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import { getAllProducts } from '../../../fetch'
import { Redirect } from 'react-router-dom'

function AdminDashboard() {
  const { loggedIn, checkUserLoginStatus, setNewProductAttributes, setIsLoading, isLoading  } = React.useContext(GlobalStateContext)
  const [products, setProducts] = useState()
  const [activeTab, setActiveTab] = useState('Edit')

  useEffect(() => {
    async function loadLogin() {
      await checkUserLoginStatus()
      setIsLoading(false)
    }
    loadLogin()
  },[checkUserLoginStatus, setIsLoading])


  useEffect(() => {
    setIsLoading(true)
    loggedIn && getAllProducts(setProducts, setIsLoading)
  },[loggedIn, setIsLoading])

  return (
    isLoading ?
    <Wrapper flex>
    <div>Loading...</div>
  </Wrapper>
  :
    loggedIn ?
    <Wrapper flex>
      <GradientBorder>Dashboard</GradientBorder>
      <TabSelect onClick={setActiveTab} tabNames={['Edit', 'New']}/>
      {activeTab === 'Edit' ? 
      products && products.map((product, index) => {
      return (
        <ProductInDashboard key={index}>{product}</ProductInDashboard>)
    })
    :
    <form>
      {setNewProductAttributes?.map(attribute => {
        return (
          <>
          <div>{attribute.displayname}</div>
          <input placeholder={attribute.displayname}/>
          </>
        )
      })}
      <div/>
    <Button btnType={'disabled'}>Add new product</Button>
    </form>
  
  }
    </Wrapper>
    :<Redirect to="./admin"/>
  )
}

export default AdminDashboard
