import React, { useState } from 'react'
import { StyledProductDetails } from './ProductPageDetailStyles'
import { Dot } from '../UtilitiesExporter'


function ProductPageDetails({ children }) {
  const [toggleDetailedDescription, setToggleDetailedDescription] = useState(false)

  const displaySettings = {
    display: !toggleDetailedDescription && 'none'
  }

  return (
    <>
      <StyledProductDetails productname>{children.name}</StyledProductDetails>
      <StyledProductDetails brand>{children.brand}</StyledProductDetails>
      <StyledProductDetails
        description
        onMouseEnter={() => setToggleDetailedDescription(true)}
        toggleDetailedDescription={toggleDetailedDescription}
        >
          <>{children.description} <Dot info>i</Dot></>
      </StyledProductDetails>
      <StyledProductDetails
        style={displaySettings}
        glassbox
        onMouseLeave={() => setToggleDetailedDescription(false)}>
          {children.detailedDescription}
      </StyledProductDetails>
      <StyledProductDetails price>{children.price}kr
      </StyledProductDetails>
    </>
  )
}

export default ProductPageDetails
