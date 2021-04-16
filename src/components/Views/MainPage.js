import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Breadcrumbs, Wrapper } from '../Utilities/UtilitiesExporter'
import ProductCard from '../Product/ProductCard.js'
import { getAllProducts } from '../../fetch.js'
import { GlobalStateContext } from '../GlobalState/GlobalState'


function MainPage() {
  const [products, setProducts] = useState([])
  const { emptyCartFlash, setEmptyCartFlash, cartFlashMessage } = React.useContext(GlobalStateContext)
  
  useEffect(() => {  
    getAllProducts(setProducts) },[])

  useEffect(() => {
    const timeId = setTimeout(() => {
      // After 3 seconds set the show value to false
      setEmptyCartFlash(false)
    }, 3000)

    return () => {
      clearTimeout(timeId)
    }   
  },[emptyCartFlash, setEmptyCartFlash])

  return (
    <Wrapper flex>
    <Breadcrumbs/>
    {emptyCartFlash && <Wrapper flex={'flash'}>{cartFlashMessage}</Wrapper>}
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
