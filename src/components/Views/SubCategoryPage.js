import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Wrapper } from '../Utilities/UtilitiesExporter'
import ProductCard from '../Product/ProductCard'
import categories from '../../mockDB/mockCategories'
import products from '../../mockDB/mockProducts'

function SubCategoryPage() {
  const { mainCategory, subCategory } = useParams()
  const [productsBySubCategory, setProductsBySubCategory] = useState([])

  useEffect(() => {
    const categoryId = [...categories]
    .filter(catName => catName.searchurl === mainCategory)
    .map(catId => catId.id)

    const subCategoryId = [...categories]
    .filter(catId => catId.id === categoryId[0]).map(subs => subs.subs)[0].filter(subId => subId.searchurl === subCategory)[0].subid

    setProductsBySubCategory(
      [...products]
      .filter(product => product.productCategory.includes(...categoryId))
      .filter(product => product.productSubCategory.includes(subCategoryId)))
  },[mainCategory, subCategory])

  return (
    <Wrapper flex>
    {productsBySubCategory.map((product, index) => {
      return <ProductCard key={index}>{product}</ProductCard>
    })}
    </Wrapper>
  )
}

export default SubCategoryPage
