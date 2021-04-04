import styled from 'styled-components'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import  { useState } from 'react'
import Header from './components/Header/Header.js'
import ProductCard from './components/Product/ProductCard.js'
import Footer from './components/Footer/Footer.js'
import products from './mockDB/mockProducts.js'

const Wrapper = styled.div`
font-size: 3rem;
margin-top: ${props => props.theme.elementAfterHeader.marginTop};
margin-left: ${props => props.theme.elementAfterHeader.marginLeft};
min-height: 100%;
width: 100%;
justify-content: center;
overflow: hidden;

${props => props.flex && {
display: "flex",
flexDirection: "row",
flexWrap: "wrap",
width: "90vw",
justifyContent: "center",
textAlign: "center"
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
          <Footer/>
      </Wrapper>
    </Router>
  )
}

export default App
