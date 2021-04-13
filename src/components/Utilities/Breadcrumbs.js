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

const StyledTilter = styled.div`
transform: skewX(-40deg);
height: 20px;
padding-right: 5px;
color: ${props => props.theme.fontColors.dark};
&:hover {
background: ${props => props.theme.colors.headerBackground};
color: ${props => props.theme.fontColors.mainHover};
box-shadow: 2px 2px 2px ${props => props.theme.colors.main};
}

${props => props.active && {
background: props.theme.colors.main,
boxShadow: "2px 2px 2px black",
color: props.theme.fontColors.mainHover,
}}
`


const StyledBreadcrumbs = styled(Link)`
font-size: 10px;
margin-left: 10px;
cursor: pointer;
display: inline-block;
color: inherit;
text-decoration: none;
font-weight: 700;
text-transform: uppercase;
transform: skewX(40deg);
&:hover {
background: ${props => props.theme.colors.headerBackground};
color: ${props => props.theme.fontColors.mainHover};
}
`


function Breadcrumbs({ children }) {
  return (
    <StyledBreadcrumbsContainer>
      <StyledTilter>
        <StyledBreadcrumbs
      key={'start'}
      to='/'
      style={{ textDecoration: 'none' }}>
        Start
        </StyledBreadcrumbs>
      </StyledTilter>
      {children
      .filter(child => child !== undefined)
      .map((child, index) => {
        return (
          <StyledTilter key={index} active={index === (children.length - 1)}>
            <StyledBreadcrumbs key={index} to={`/${child}`}>{` > ${child}`}</StyledBreadcrumbs>
            </StyledTilter>
        )
      })}
     
    </StyledBreadcrumbsContainer>
  )
}

export default Breadcrumbs
