import React, { useState } from 'react'
import { GlobalStateContext } from '../GlobalState/GlobalState'
import { StyledProductManager, StyledFlexGridHeader, StyledFlexGridContent } from './ProductStyles'

function ProductEditor({ focus, product }) {
  const { editableAttributes } = React.useContext(GlobalStateContext)
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
        {editableAttributes.map(attribute => {
          return (
            edit ?
           ( <>
            <StyledFlexGridContent>{attribute}</StyledFlexGridContent>
            <input placeholder='Edit'/>
            <StyledFlexGridContent onClick={handleSave} editBtn>Save</StyledFlexGridContent>
            </>)
            : (
              <>
              <StyledFlexGridContent>{attribute}</StyledFlexGridContent>
              <StyledFlexGridContent>{product[attribute]}</StyledFlexGridContent>
            <StyledFlexGridContent onClick={handleEdit} editBtn>Edit</StyledFlexGridContent>
            </>
            )
          )
            
        })}
      </StyledProductManager>
  )
}

export default ProductEditor
