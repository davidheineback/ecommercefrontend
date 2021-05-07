import React, { useEffect } from 'react'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import { Wrapper } from '../../Utilities/UtilitiesExporter'

function Flash() {
const { emptyCartFlash, setEmptyCartFlash, cartFlashMessage } = React.useContext(GlobalStateContext)

useEffect(() => {
  const timeId = setTimeout(() => {
    setEmptyCartFlash(false)
  }, 2000)

  return () => {
    clearTimeout(timeId)
  }   
},[emptyCartFlash, setEmptyCartFlash])

  return (
    emptyCartFlash && <Wrapper flex={'flash'}>{cartFlashMessage}</Wrapper>
  )
}

export default Flash
