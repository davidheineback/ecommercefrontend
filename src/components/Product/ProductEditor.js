import React, { useState } from 'react'
import { GlobalStateContext } from '../GlobalState/GlobalState'
import { StyledProductManager, StyledFlexGridHeader, StyledFlexGridContent, StyledEditorInput } from './ProductStyles'
import * as API from '../../fetch'

function ProductEditor({ focus, product }) {
  const { editableAttributes } = React.useContext(GlobalStateContext)
  const [edit, setEdit] = useState(false)
  const [editIndex, setEditIndex]  = useState()
  const [newValue, setNewValue] = useState()

  function handleEdit (index) {
    setEdit(true)
    setEditIndex(index)
  }

  function handleSave () {
    const editObject = {newValue, product, changeAttribute: editableAttributes[editIndex].name}
    const patcher = API.patchNewValue(editObject)
    if (patcher) {
      product[editableAttributes[editIndex].name] = newValue
    }
    setEdit(false)
    setEditIndex(null)
  }

  function handleNewValue ({ target }) {
    setNewValue(target.value)
  }


  return (
    focus && 
      <StyledProductManager key={product.name + 'manager'}>
        <StyledFlexGridHeader key={product.name + 'headerattribute'}>Attribute:</StyledFlexGridHeader>
        <StyledFlexGridHeader key={product.name + 'headercurrent'}>Current:</StyledFlexGridHeader>
        <StyledFlexGridHeader/>
        {editableAttributes.map((attribute, index) => {
          return (
            edit && editIndex === index ?
           ( <>
            <StyledFlexGridContent>{attribute.displayname}</StyledFlexGridContent>
            <StyledEditorInput onChange={handleNewValue} placeholder='Edit'/>
            <StyledFlexGridContent onClick={handleSave} editBtn>Save</StyledFlexGridContent>
            </>)
            : (
              <>
              <StyledFlexGridContent >{attribute.displayname}</StyledFlexGridContent>
              <StyledFlexGridContent >{product[attribute.name]}</StyledFlexGridContent>
              <StyledFlexGridContent onClick={() => handleEdit(index)} editBtn>Edit</StyledFlexGridContent>
            </>
            )
          )
            
        })}
      </StyledProductManager>
  )
}

export default ProductEditor
