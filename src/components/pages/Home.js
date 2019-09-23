import React from 'react'
import { Link } from 'react-router-dom'
import LoadingCircleHtml from '../parts/LoadingCircleHtml'
import LoadingCircleCss from '../parts/LoadingCircleCss'
import LoadingCircleJS from '../parts/LoadingCircleJS'
import LoadingCircleReact from '../parts/LoadingCircleReact'
import LoadingCirclePython from '../parts/LoadingCirclePython'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {}
  }


  render() {
    return (
      <div>
        <div className="languages">

          <div className="languagedescription">
            <LoadingCircleHtml/>
            <h2>HTML5</h2>
          </div>
          <div className="languagedescription">
            <LoadingCircleCss/>
            <h2>CSS3</h2>
          </div>
          <div className="languagedescription">
            <LoadingCircleCss/>
            <h2>SaSS</h2>
          </div>
          <div className="languagedescription">
            <LoadingCircleJS/>
            <h2>JavaScript</h2>
          </div>
          <div className="languagedescription">
            <LoadingCircleReact/>
            <h2>React</h2>
          </div>
          <div className="languagedescription">
            <LoadingCirclePython/>
            <h2>Python3</h2>
          </div>
          <div className="languagedescription">
            <LoadingCirclePython/>
            <h2>SQL</h2>
          </div>
          <div className="languagedescription">
            <LoadingCircleCss/>
            <h2>Express</h2>
          </div>

        </div>

        <div className="languages">

          <div className="languagedescription">
            <LoadingCircleHtml/>
            <h2>Webpack</h2>
          </div>
          <div className="languagedescription">
            <LoadingCircleCss/>
            <h2>Express</h2>
          </div>
          <div className="languagedescription">
            <LoadingCircleJS/>
            <h2>Heroku</h2>
          </div>
          <div className="languagedescription">
            <LoadingCircleReact/>
            <h2>MongoDB</h2>
          </div>

        </div>

        <div className="languages">

          <div className="languagedescription">
            <LoadingCircleHtml/>
            <h2>Photoshop</h2>
          </div>
          <div className="languagedescription">
            <LoadingCircleCss/>
            <h2>Illustrator</h2>
          </div>
          <div className="languagedescription">
            <LoadingCircleJS/>
            <h2>Google Sketchup</h2>
          </div>
          <div className="languagedescription">
            <LoadingCircleReact/>
            <h2>AutoCAD</h2>
          </div>
          <div className="languagedescription">
            <LoadingCircleReact/>
            <h2>Videopad</h2>
          </div>
        </div>

      </div>
    )
  }
}
export default Home
