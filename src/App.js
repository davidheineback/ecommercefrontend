import styled from 'styled-components'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import  { useState } from 'react'
import Header from './components/Header/Header.js'
import ProductCard from './components/Product/ProductCard.js'
import products from './mockDB/mockProducts.js'

const Wrapper = styled.div`
font-size: 3rem;
margin-top: ${props => props.theme.elementAfterHeader.marginTop};
margin-left: ${props => props.theme.elementAfterHeader.marginLeft};

${props => props.flex && {
display: "flex",
flexDirection: "row",

}}


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
        <Wrapper flex>
        {products.map(product => {
          return <ProductCard>{product}</ProductCard>
        })}
        </Wrapper>
          <Switch>
            <Route exact path='/'>
            </Route>
          </Switch>
      </Wrapper>
    </Router>
  )
}

export default App
