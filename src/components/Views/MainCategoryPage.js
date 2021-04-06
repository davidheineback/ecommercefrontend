import React from 'react'
import { useParams } from 'react-router-dom'

function MainCategoryPage() {
  const { mainCategory } = useParams()
  return (
    <div>
      {console.log(mainCategory)}
    </div>
  )
}

export default MainCategoryPage
