import React, { useState } from 'react'
import { StyledProductManager, StyledFlexGridHeader, StyledFlexGridContent } from './ProductStyles'

function ProductEditor({ focus, product }) {
  const [edit, setEdit] = useState(false)

  function handleEdit () {
    setEdit(true)
  }

  function handleSave () {

  }



  return (
    focus && 
      <StyledProductManager>
        <StyledFlexGridHeader>Attribute:</StyledFlexGridHeader>
        <StyledFlexGridHeader>Current:</StyledFlexGridHeader>
        <StyledFlexGridHeader/>
        <StyledFlexGridContent>Namn</StyledFlexGridContent>
        {edit ?
        <>
        <input placeholder='Edit'/>
        <StyledFlexGridContent onClick={handleSave} editBtn>Save</StyledFlexGridContent>
        </>
        : <><StyledFlexGridContent>{product.name}</StyledFlexGridContent>
        <StyledFlexGridContent onClick={handleEdit} editBtn>Edit</StyledFlexGridContent></>
        }
      </StyledProductManager>
  )
}

export default ProductEditor
