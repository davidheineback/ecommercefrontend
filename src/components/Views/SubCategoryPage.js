import React from 'react'
import { useParams } from 'react-router-dom'

function SubCategoryPage() {
  const { mainCategory, subCategory } = useParams()
  return (
    <div>
      {console.log(mainCategory)}
      {console.log(subCategory)}
    </div>
  )
}

export default SubCategoryPage
