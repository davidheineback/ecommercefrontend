import React from 'react'
import { useLocation } from 'react-router-dom'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import { StyledBreadcrumbsContainer, StyledBreadcrumbs, StyledTilter } from './BreadcrumbStyles'
function Breadcrumbs({ itemNr, children }) {
  const { setCurrentSlug } = React.useContext(GlobalStateContext)
  const location = useLocation()
  React.useEffect(() => {
    setCurrentSlug(location.pathname)
  },[location, setCurrentSlug])
  

  const breadcrumbs = children ? ([...children]
  .map((child, index) => {
    switch(index) {
      case 0:
        return child
      case 1:
        return child && `${children[0]}/${child}`
      case 2:
        return `product/${itemNr}`
      default:
        return undefined
    }
  })
  .filter(child => {
    return(child !== undefined)}))
    : []

  return (
    <StyledBreadcrumbsContainer>
      <StyledTilter active={children ? false : true}>
        <StyledBreadcrumbs
      key={'start'}
      to='/'
      style={{ textDecoration: 'none' }}>
        Start
        </StyledBreadcrumbs>
      </StyledTilter>
      {breadcrumbs
      .map((breadcrumb, index) => {
        return (
          <StyledTilter key={index} active={index === (breadcrumbs.length - 1)}>
            <StyledBreadcrumbs key={index} to={`/${breadcrumb}`}>{` > ${children[index] ? children[index] : children[2]}`}</StyledBreadcrumbs>
            </StyledTilter>
        )
      })}
     
    </StyledBreadcrumbsContainer>
  )
}

export default Breadcrumbs
