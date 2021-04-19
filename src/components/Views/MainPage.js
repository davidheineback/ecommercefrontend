import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs, Wrapper } from '../Utilities/UtilitiesExporter'
import ProductCard from '../Product/ProductCard.js'
import { getAllProducts } from '../../fetch.js'
import { Flash } from './ViewsExporter'

function MainPage() {
  const [products, setProducts] = useState([])
  
  useEffect(() => {  
    getAllProducts(setProducts) },[])

  return (
    <Wrapper flex>
    <Breadcrumbs/>
    <Flash/>
    {products.map((product, index) => {
      return (
      <Link
        key={index}
        to={`/product/${product.itemNr}`}
        style={{ textDecoration: 'none' }}>
      <ProductCard key={index}>{product}</ProductCard>
      </Link>)
    })}
  </Wrapper>
  )
}

export default MainPage
