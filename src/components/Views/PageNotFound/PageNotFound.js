import React from 'react'
import { Breadcrumbs, Wrapper } from '../../Utilities/UtilitiesExporter'

function PageNotFound() {
  return (
    <Wrapper flex>
    <Breadcrumbs/>
      <p>Page not found</p>
    </Wrapper>
  )
}

export default PageNotFound
