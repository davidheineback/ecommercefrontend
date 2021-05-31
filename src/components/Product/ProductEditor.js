import React, { useState } from 'react'
import { GlobalStateContext } from '../GlobalState/GlobalState'
import { StyledProductManager, StyledFlexGridHeader, StyledFlexGridContent, StyledEditorInput } from './ProductStyles'
import * as API from '../../fetch'

function ProductEditor({ focus, product }) {
  const { editableAttributes, currentUser } = React.useContext(GlobalStateContext)
  const [edit, setEdit] = useState(false)
  const [editIndex, setEditIndex]  = useState()
  const [newValue, setNewValue] = useState()
  const [deleteQuestion, setDeleteQuestion] = useState(false)


  function handleEdit (index, currentValue) {
    setNewValue(currentValue)
    setEdit(true)
    setEditIndex(index)
  }

  function handleSave () {
    const editObject = {newValue, product, changeAttribute: editableAttributes[editIndex].name}
    const patcher = API.patchNewValue(editObject, currentUser)
    if (patcher) {
      product[editableAttributes[editIndex].name] = newValue
    }
    setEdit(false)
    setEditIndex(null)
  }

  function handleNewValue ({ target }) {
    setNewValue(target.value)
  }

  function handleDelete () {
    
  }

  function checkDelete () {
    setDeleteQuestion(!deleteQuestion)
  }


  return (
    focus && 
      <StyledProductManager>
        <StyledFlexGridHeader>Attribute:</StyledFlexGridHeader>
        <StyledFlexGridHeader>Current:</StyledFlexGridHeader>
        <StyledFlexGridHeader/>
        {editableAttributes.map((attribute, index) => {
          return (
            edit && editIndex === index ?
           ( <>
            <StyledFlexGridContent>{attribute.displayname}</StyledFlexGridContent>
            <StyledEditorInput onChange={handleNewValue} value={newValue} placeholder='Edit'/>
            <StyledFlexGridContent onClick={handleSave} editBtn>Save</StyledFlexGridContent>
            </>)
            : (
              <>
              <StyledFlexGridContent >{attribute.displayname}</StyledFlexGridContent>
              <StyledFlexGridContent >{product[attribute.name]}</StyledFlexGridContent>
              <StyledFlexGridContent onClick={() => handleEdit(index, product[attribute.name])} editBtn>Edit</StyledFlexGridContent>
            </>
            )
          )
            
        })}
        {!deleteQuestion ? 
        (<StyledFlexGridContent onClick={checkDelete} deleteBtn>Delete</StyledFlexGridContent>)
        : 
        <>
        <StyledFlexGridContent>Are you sure?</StyledFlexGridContent>
        <StyledFlexGridContent onClick={handleDelete} deleteBtn>Yes</StyledFlexGridContent>
        <StyledFlexGridContent onClick={checkDelete} deleteBtn>No</StyledFlexGridContent>
        </>
        }
      
      </StyledProductManager>
  )
}

export default ProductEditor
