import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import { GradientBorder, Wrapper, Button } from '../../Utilities/UtilitiesExporter'
import { GlobalStateContext } from '../../GlobalState/GlobalState'
import { userLogin } from '../../../fetch.js'
import { StyledLogInContainer, StyledInput } from './AdminStyles'

function Admin() {
  const { loggedIn, setLoggedIn } = React.useContext(GlobalStateContext)
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  function handleUsernameInput ({ target }) {
    setUsername(target.value)
  }

  function handlePasswordInput ({ target }) {
    setPassword(target.value)
  }

  function handleLogin () {
    setLoggedIn(userLogin({username, password}))
      
  }

  return (
      !loggedIn ?
      <Wrapper flex="bigFlex">
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
