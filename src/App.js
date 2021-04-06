import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import  { useState } from 'react'
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import { Wrapper } from './components/Utilities/UtilitiesExporter'
import { MainPage, MainCategoryPage, SubCategoryPage, ProductPage, PageNotFound } from './components/Views/ViewsExporter'


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
            <Route exact path='/' component={MainPage}/>
            <Route path='/:mainCategory/' exact component={MainCategoryPage}/>
            <Route path='/:mainCategory/:subCategory/' exact component={SubCategoryPage}/>
            <Route path='/:mainCategory/:subCategory/:productId/' exact component={ProductPage}/>
            <Route path='*' component={PageNotFound}/>
          </Switch>
          <Footer/>
      </Wrapper>
    </Router>
  )
}

export default App
