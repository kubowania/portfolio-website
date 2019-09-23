import React from 'react'
import ReactDOM from 'react-dom'

import { HashRouter, Route , Switch} from 'react-router-dom'

import Navbar from './components/common/Navbar'

import './style.scss'


class App extends React.Component {

  render() {
    return (
      <HashRouter>
        <Navbar/>
        <Switch>
        </Switch>
      </HashRouter>
    )
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
)
