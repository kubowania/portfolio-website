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
          <h2 className="nav-subtitle">Build your minimal viable product using a junior developer. Cut your<br/>costs and help a young developer build their portfolio.</h2>
          <br/>
          <a className="nav-subtitlelink"><Link to="/about"></Link>Read more</a>
        </div>
        <div className="hero-foot">
          <nav className="tabs is-boxed">
            <div className="container">
              <ul>
                <li className={activeClass('/')}><Link to ="/">Work</Link></li>
                <li className={activeClass('/about')}><Link to ="/about">About me</Link></li>
                <li className={activeClass('/languages')}><Link to ="/languages">Languages</Link></li>

              </ul>
            </div>
          </nav>
        </div>
      </section>

    )
  }

}

export default withRouter(Navbar)
