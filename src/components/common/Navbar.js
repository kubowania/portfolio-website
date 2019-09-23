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
          <h1 className="maintitle">Building products to get your idea off the ground</h1>
          <br/>
          <h2 className="nav-subtitle">Starting an app is expensive.</h2>
          <br/>
          <h2 className="nav-subtitle">Build your minimal viable product using junior developers. Cut your<br/>costs and help a young developer build their portfolio.</h2>
          <br/>
          <h2 className="nav-subtitle">Read more</h2>
        </div>
        <div className="hero-foot">
          <nav className="tabs is-boxed ">
            <div className="container">
              <ul>
                <li className={activeClass('/')}><Link to ="/">Languages</Link></li>
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
