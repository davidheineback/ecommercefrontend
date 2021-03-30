import styled from 'styled-components'

import Header from './components/Header/Header.js'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'

const Wrapper = styled.div`
font-size: 3rem;
margin-top: ${props => props.theme.elementAfterHeader.marginTop};
margin-left: ${props => props.theme.elementAfterHeader.marginLeft};
`

function App() {
  return (
    <Router>
      <Wrapper>
        <Header/>
          <Switch>
            <Route exact path='/'>
            </Route>
          </Switch>
      </Wrapper>
    </Router>
  )
}

export default App
