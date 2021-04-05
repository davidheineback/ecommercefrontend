import styled from 'styled-components'
import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import  { useState, useParams } from 'react'
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
width: "70vw",
justifyContent: "center",
textAlign: "center",
marginLeft: "15%",
marginRight: "15%",
gap: "40px"
}}
`

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth)
  const [routeToPath, setRouteToPath] = useState('/')

    window.addEventListener("resize", () => {
      setWindowSize(window.innerWidth)
    })

    
  return (
    <Router>
      <Wrapper>
        <Header key="header" setRouteToPath={setRouteToPath} size={windowSize}/>
          <Switch>
            <Route exact path={routeToPath}>
              <Wrapper flex>
                {products.map((product, index) => {
                  return <ProductCard key={index}>{product}</ProductCard>
                })}
              </Wrapper>
            </Route>
          </Switch>
          <Footer/>
      </Wrapper>
    </Router>
  )
}

export default App
