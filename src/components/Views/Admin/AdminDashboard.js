import React, { useState, useEffect } from 'react'
import { Wrapper, GradientBorder } from '../../Utilities/UtilitiesExporter'
import ProductInDashboard from '../../Product/ProductInDashboard'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import { getAllProducts } from '../../../fetch'
import { Redirect } from 'react-router-dom'

function AdminDashboard() {
  const { loggedIn } = React.useContext(GlobalStateContext)
  const [products, setProducts] = useState()

  useEffect(() => {
    loggedIn && getAllProducts(setProducts)
  },[loggedIn])

  if (!loggedIn) {return (<Redirect to="./admin"/>)}
  return (
    <Wrapper flex>
      <GradientBorder>Dashboard</GradientBorder>
      {products && products.map((product, index) => {
      return (
        <ProductInDashboard key={index}>{product}</ProductInDashboard>)
    })}
    </Wrapper>
  )
}

export default AdminDashboard
