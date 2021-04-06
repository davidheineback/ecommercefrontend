import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Wrapper } from '../Utilities/UtilitiesExporter'
import ProductCard from '../Product/ProductCard'
import categories from '../../mockDB/mockCategories'
import products from '../../mockDB/mockProducts'

function MainCategoryPage() {
  const { mainCategory } = useParams()
  const [productsByMainCategory, setProductsByMainCategory] = useState([])
  useEffect(() => {
    const categoryId = [...categories]
    .filter(catName => catName.searchurl === mainCategory)
    .map(catId => catId.id)
    console.log(categoryId[0])
    const prod = [...products].filter(product => product.productCategory.includes(...categoryId))
    console.log(prod)
    setProductsByMainCategory(prod)
  },[mainCategory])

  return (
    <Wrapper flex>
    {productsByMainCategory.map((product, index) => {
      return <ProductCard key={index}>{product}</ProductCard>
    })}
    </Wrapper>
  )
}

export default MainCategoryPage
