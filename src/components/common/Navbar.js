import React from 'react'
import { Link , withRouter} from 'react-router-dom'

class Navbar extends React.Component {

  constructor() {
    super()

    this.state = {
      navbarOpen: false,
      tabSelected: false
    }
  }


  componentDidUpdate() {
  }

  render() {

    const activeClass = (route) => {
      return this.props.location.pathname === route ? 'is-active' : null
    }

    return (
      <section className="hero headermain">
        <div className="hero-body mainhero">
          <h1 className="logo">Ania Kubow</h1>

        </div>
        <div className="hero-foot">
          <nav className="tabs is-boxed ">
            <div className="container">
              <ul>
                <li className={activeClass('/project-04')}><Link to ="/project-05">Dashboard</Link></li>
                <li className={activeClass('/project-03')}><Link to ="/project-03">Rating App</Link></li>
                <li className={activeClass('/project-02')}><Link to ="/project-02">News API</Link></li>
                <li className={activeClass('/project-01')}><Link to ="/project-01">Tetris</Link></li>
              </ul>
            </div>
          </nav>
        </div>
      </section>

    )
  }

}

export default withRouter(Navbar)
