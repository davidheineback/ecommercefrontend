import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Wrapper } from '../Utilities/UtilitiesExporter'
import ProductCard from '../Product/ProductCard'
import { getProductsBySubCategory } from '../../fetch.js'

function SubCategoryPage() {
  const { mainCategory, subCategory } = useParams()
  const [products, setProducts] = useState([])

  useEffect(() => {
    getProductsBySubCategory(subCategory, setProducts) },[subCategory])

  return (
    <Wrapper flex>
    {products.map((product, index) => {
      return (
      <Link
        key={index}
        to={`/${mainCategory}/${subCategory}/product/${product.itemNr}`}
        style={{ textDecoration: 'none' }}>
      <ProductCard item={product.itemNr} key={index}>{product}</ProductCard>
      </Link>)
    })}
    </Wrapper>
  )
}

export default SubCategoryPage
