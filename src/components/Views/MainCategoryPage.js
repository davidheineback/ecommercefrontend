import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Wrapper } from '../Utilities/UtilitiesExporter'
import ProductCard from '../Product/ProductCard'
import { getProductsByCategory } from '../../fetch.js'

function MainCategoryPage() {
  const { mainCategory } = useParams()
  const [products, setProducts] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  
  useEffect(() => {
    setIsLoading(true)
    getProductsByCategory(mainCategory, setProducts, setIsLoading) },[mainCategory])
    if (isLoading) {
      return <Wrapper flex/>
    }

  return (
    <Wrapper flex>
    {products.map((product, index) => {
      return (
      <Link
      key={index}
      to={`/${mainCategory}/product/${product.itemNr}`}
      style={{ textDecoration: 'none' }}>
        <ProductCard
        item={product.itemNr}
        key={index}>
          {product}
        </ProductCard>
      </Link>)
    })}
    </Wrapper>
  )
}

export default MainCategoryPage
