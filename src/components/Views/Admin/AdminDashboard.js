import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
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
      <Link
        key={index}
        to={`/product/${product.itemNr}`}
        style={{ textDecoration: 'none' }}>
      <ProductInDashboard key={index}>{product}</ProductInDashboard>
      </Link>)
    })}
    </Wrapper>
  )
}

export default AdminDashboard
