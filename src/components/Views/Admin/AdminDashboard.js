import React, { useState, useEffect } from 'react'
import { Wrapper, GradientBorder } from '../../Utilities/UtilitiesExporter'
import ProductInDashboard from '../../Product/ProductInDashboard'
import { getAllProducts } from '../../../fetch'

function AdminDashboard() {
  const [products, setProducts] = useState()

  useEffect(() => {
    getAllProducts(setProducts)
  },[])

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
