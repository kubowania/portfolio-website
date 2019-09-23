import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter, Route , Switch} from 'react-router-dom'

import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Languages from './components/pages/Languages'
import About from './components/pages/About'
import Work from './components/pages/Work'

import './style.scss'


class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <Navbar/>
        <Switch>
          <Route path= "/languages" component={Languages}/>
          <Route path= "/about" component={About}/>
          <Route path= "/" component={Work}/>
        </Switch>
        <Footer/>
      </HashRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
