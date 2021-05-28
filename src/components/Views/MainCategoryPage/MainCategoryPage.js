import React, { useState, useEffect } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Breadcrumbs, Wrapper, Loader } from '../../Utilities/UtilitiesExporter'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import { Flash } from '../ViewsExporter'
import ProductCard from '../../Product/ProductCard'
import { getProductsByCategory } from '../../../fetch'

function MainCategoryPage() {
  const { mainCategory } = useParams()
  const [products, setProducts] = useState([])
  const { isLoading, setIsLoading} = React.useContext(GlobalStateContext)

  useEffect(() => {
    setIsLoading(true)
    getProductsByCategory(mainCategory, setProducts)
    setIsLoading(false)
  },[mainCategory, setIsLoading])

  return (
    isLoading ?
    <Wrapper flex>
      <Loader/>
    </Wrapper>
    :<Wrapper flex>
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
