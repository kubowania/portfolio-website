import React from 'react'
import { Link , withRouter} from 'react-router-dom'

class Footer extends React.Component {

  render() {

    return (
      <section className="footer">
        <div>
          <br/>
          <h2 id="more-info" className="footertext">Designing websites since 2014</h2>
          <h2 className="footertext">Developing products since 2018</h2>

        </div>

        <div>
          <br/>
          <h2 className="footertext">Made by Ania Kubow </h2>
          <h2 className="footertext">Find me on <a href="https://www.linkedin.com/in/ania-kubow-77766027/">Linkedin</a></h2>
          <h2 className="footertext">Find me on <a href="https://github.com/kubowania/">GitHub</a></h2>
        </div>

        <div>
          <br/>
          <h2 className="footertext">This site was made primarily with:</h2>
          <h2 className="footertext">React</h2>
          <h2 className="footertext">JavaScript</h2>
        </div>

      </section>

    )
  }

}

export default withRouter(Footer)
