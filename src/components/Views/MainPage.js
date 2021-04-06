import React from 'react'
// import styled from 'styled-components'
import Wrapper from '../Utilities/Wrapper.js'
import ProductCard from '../Product/ProductCard.js'
import products from '../../mockDB/mockProducts.js'


function MainPage() {
  return (
    <Wrapper flex>
    {products.map((product, index) => {
      return <ProductCard key={index}>{product}</ProductCard>
    })}
  </Wrapper>
  )
}

export default MainPage
