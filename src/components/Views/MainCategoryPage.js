import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
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

  setProductsByMainCategory(
      [...products]
      .filter(product => product.productCategory.includes(...categoryId)))
  },[mainCategory])


  return (
    <Wrapper flex>
    {productsByMainCategory.map((product, index) => {
      return (
      <Link key={index} to={`/${mainCategory}/product/${product.itemNr}`}>
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
