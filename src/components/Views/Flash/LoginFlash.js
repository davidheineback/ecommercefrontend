import React, { useEffect } from 'react'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import { Wrapper } from '../../Utilities/UtilitiesExporter'

function LoginFlash() {
const { loginFlash, setLoginFlash, loginFlashMessage } = React.useContext(GlobalStateContext)

useEffect(() => {
  const timeId = setTimeout(() => {
    setLoginFlash(false)
  }, 2000)

  return () => {
    clearTimeout(timeId)
  }   
},[loginFlash, setLoginFlash])

  return (
    loginFlash && <Wrapper flex={'flash'}>{loginFlashMessage}</Wrapper>
  )
}

export default LoginFlash
