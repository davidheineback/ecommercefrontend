import { Switch, Route, BrowserRouter as Router } from 'react-router-dom'
import  { useState } from 'react'
import Header from './components/Header/Header.js'
import Footer from './components/Footer/Footer.js'
import Wrapper from './components/Utilities/Wrapper.js'
import MainPage from './components/Views/MainPage.js'

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
            <Route path='/:mainCategory' component='mainCategoryPage'/>
            <Route path='/:mainCategory/:subCategory' component='subCategoryPage'/>
            <Route path='/:mainCategory/:subCategory/:productId' component='productPage'/>
            <Route path='*' component='PageNotFound'/>
          </Switch>
          <Footer/>
      </Wrapper>
    </Router>
  )
}

export default App
