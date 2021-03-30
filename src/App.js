import styled from 'styled-components'
import  { useState } from 'react'
import Header from './components/Header/Header.js'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

const Wrapper = styled.div`
font-size: 3rem;
margin-top: ${props => props.theme.elementAfterHeader.marginTop};
margin-left: ${props => props.theme.elementAfterHeader.marginLeft};
`

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth)

    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth)
    })
    
  return (
    <Router>
      <Wrapper>
        <Header key="header" size={windowSize}/>
          <Switch>
            <Route exact path='/'>
            </Route>
          </Switch>
      </Wrapper>
    </Router>
  )
}

export default App
