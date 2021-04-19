import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Breadcrumbs, Wrapper } from '../Utilities/UtilitiesExporter'
import { Flash } from './ViewsExporter'
import ProductCard from '../Product/ProductCard'
import { getProductsByCategory } from '../../fetch.js'

function MainCategoryPage() {
  const { mainCategory } = useParams()
  const [products, setProducts] = useState([])


  useEffect(() => {
    getProductsByCategory(mainCategory, setProducts) },[mainCategory])

  return (
    <Wrapper flex>
    <Breadcrumbs>{[mainCategory]}</Breadcrumbs>
    <Flash/>
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
