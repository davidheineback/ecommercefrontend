import React from 'react'
import { StyledWrapper } from './WrapperStyles'

function Wrapper({ adminLogin, productDetails, flex, children }) {
  return ( 
    <StyledWrapper
    adminLogin={adminLogin}
    productDetails={productDetails}
      flex={flex}
      >
        {children}
    </StyledWrapper>
  )
}

export default Wrapper
