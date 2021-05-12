import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import { GradientBorder, Wrapper, Button } from '../../Utilities/UtilitiesExporter'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import { userLogin } from '../../../fetch.js'
import LoginFlash from '../Flash/LoginFlash'
import { StyledLogInContainer, StyledInput } from './AdminStyles'

function Admin() {
  const { loggedIn, setLoggedIn, setLoginFlash, checkUserLoginStatus } = React.useContext(GlobalStateContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  useEffect(() => {
    async function loadLogin() {
      await checkUserLoginStatus()
    }
    loadLogin()
  },[checkUserLoginStatus])

  function handleUsernameInput ({ target }) {
    setUsername(target.value)
  }

  function handlePasswordInput ({ target }) {
    setPassword(target.value)
  }

  async function handleLogin () {
    setLoggedIn(await userLogin({username, password}))   
    if (!loggedIn) {setLoginFlash(true)}
  }

  return (
      !loggedIn ?
      <Wrapper flex="bigFlex">
        <LoginFlash/>
        <Wrapper adminLogin>
          <GradientBorder/>
         <StyledLogInContainer>
           <StyledInput onChange={handleUsernameInput} placeholder="username"/>
           <StyledInput type='password' onChange={handlePasswordInput} placeholder="password"/>
           <Button onClick={handleLogin} btnType="login">Log in</Button>
        </StyledLogInContainer>
        </Wrapper>
      </Wrapper>
      : <Redirect to="./dashboard" />
  )
}

export default Admin
