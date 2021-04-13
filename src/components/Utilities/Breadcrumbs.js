import React from 'react'
import styled from 'styled-components'

const StyledBreadcrumbsContainer = styled.div`
position: fixed;
margin-top: ${props => props.theme.breadcrumbs.marginTop};
margin-left: ${props => props.theme.breadcrumbs.marginLeft};
height: 25px;
width: 100%;
display: flex;
justify-content: center;
background-color: white;
overflow: hidden;
padding: 20px;
z-index: -1;
`
const StyledBreadcrumbs = styled.div`
font-size: 12px;
margin-left: 10px;
`


function Breadcrumbs({ children }) {
  return (
    <StyledBreadcrumbsContainer>
      {children.map(child => <StyledBreadcrumbs> {`> ${child}`}</StyledBreadcrumbs>)}
    </StyledBreadcrumbsContainer>
  )
}

export default Breadcrumbs
