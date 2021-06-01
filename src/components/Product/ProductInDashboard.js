import React, { useState } from 'react'
import { ProductImage } from '../Utilities/UtilitiesExporter'
import { GlobalStateContext } from '../GlobalState/GlobalState'
import ProductEditor from './ProductEditor'
import { StyledItemContainer, StyledDetails, StyledDetailsContainer } from './ProductStyles'
import { Redirect } from 'react-router-dom'

function ProductInDashboard({ children }) {
  const { loggedIn } = React.useContext(GlobalStateContext)
  const product = children
  const [focus, setFocus] = useState(false)

  function handleFocus () {
    setFocus(!focus)
  }

  if (!loggedIn) return <Redirect to='./admin'/>
  return (
    <StyledItemContainer big dashboard>
      <StyledItemContainer onClick={handleFocus}>
      <ProductImage src={product.image} description={product.description} type='smallCart'/>
      <StyledDetailsContainer big>
        <StyledDetails itemName>{product.name}</StyledDetails>
        </StyledDetailsContainer>
      </StyledItemContainer>
        <ProductEditor setFocus={setFocus} focus={focus} product={product}/>
        </StyledItemContainer>
  )
}

export default ProductInDashboard
