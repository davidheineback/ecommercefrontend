import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import { Breadcrumbs, Wrapper, Loader } from '../../Utilities/UtilitiesExporter'
import ProductCard from '../../Product/ProductCard'
import { getAllProducts } from '../../../fetch.js'
import { Flash } from '../ViewsExporter'

function MainPage() {
  const [products, setProducts] = useState([])
  const { isLoading, setIsLoading} = React.useContext(GlobalStateContext)

  useEffect(() => {
      setIsLoading(true)
    getAllProducts(setProducts, setIsLoading)
    },[setIsLoading])

  return (
    isLoading ?
    <Wrapper flex>
      <Loader/>
    </Wrapper>
    : <Wrapper flex>
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
