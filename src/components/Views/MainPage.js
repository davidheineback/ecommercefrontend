import React from 'react'
// import styled from 'styled-components'
import { Link } from 'react-router-dom'
import Wrapper from '../Utilities/Wrapper.js'
import ProductCard from '../Product/ProductCard.js'
import products from '../../mockDB/mockProducts.js'


function MainPage() {
  return (
    <Wrapper flex>
    {products.map((product, index) => {
      return (
      <Link key={index} to={`/product/${product.itemNr}`}>
      <ProductCard key={index}>{product}</ProductCard>
      </Link>)
    })}
  </Wrapper>
  )
}

export default MainPage
