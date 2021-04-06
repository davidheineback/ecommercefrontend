import React from 'react'
import { useParams } from 'react-router-dom'
import { Wrapper } from '../Utilities/UtilitiesExporter'

function MainCategoryPage() {
  const { mainCategory } = useParams()
  return (
    <Wrapper flex>
      {console.log(mainCategory)}
    </Wrapper>
  )
}

export default MainCategoryPage
