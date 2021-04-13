import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const StyledBreadcrumbsContainer = styled.div`
width: 100%;
display: flex;
justify-content: left;
background-color: white;
height: 15px;

`
const StyledBreadcrumbs = styled(Link)`
font-size: 10px;
margin-left: 10px;
text-decoration: none;
color: ${props => props.theme.fontColors.dark};
cursor: pointer;
display: inline-block;
font-weight: 700;
text-transform: uppercase;
`


function Breadcrumbs({ children }) {
  return (
    <StyledBreadcrumbsContainer>
      <StyledBreadcrumbs
      key={'start'}
      to='/'
      style={{ textDecoration: 'none' }}>Start</StyledBreadcrumbs>
      {children
      .filter(child => child !== undefined)
      .map((child, index) => <StyledBreadcrumbs key={index} to={`/${child}`}>{` > ${child}`}</StyledBreadcrumbs>)}
     
    </StyledBreadcrumbsContainer>
  )
}

export default Breadcrumbs
