import React from 'react'
import styled from 'styled-components'
// import React, { useState, useEffect } from 'react'
// import { Link } from 'react-router-dom'
import { GradientBorder, Wrapper } from '../Utilities/UtilitiesExporter'
// import ProductCard from '../Product/ProductCard.js'
// import { getAllProducts } from '../../fetch.js'

const StyledLogInContainer = styled.div`
  position: relative;
  padding-top: 20px;
  background: rgba( 255, 255, 255, 0.25 );
  box-shadow: 0 8px 32px 0 rgba( 31, 38, 135, 0.37 );
  backdrop-filter: blur( 6.0px );
    -webkit-backdrop-filter: blur( 6.0px );
  width: 100%;
  min-height: inherit;
`


function Admin() {
  return (
      <Wrapper>
        <Wrapper adminLogin>
          <GradientBorder/>
         <StyledLogInContainer>
           Login
        </StyledLogInContainer>
        </Wrapper>
      </Wrapper>
  )
}

export default Admin
