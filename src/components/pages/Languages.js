import React from 'react'
import { Link } from 'react-router-dom'
import LoadingCircleHtml from '../parts/LoadingCircleHtml'
import LoadingCircleCss from '../parts/LoadingCircleCss'
import LoadingCircleSaSS from '../parts/LoadingCircleSaSS'
import LoadingCircleJS from '../parts/LoadingCircleJS'
import LoadingCircleReact from '../parts/LoadingCircleReact'
import LoadingCirclePython from '../parts/LoadingCirclePython'
import LoadingCircleSQL from '../parts/LoadingCircleSQL'
import LoadingCircleExpress from '../parts/LoadingCircleExpress'
import LoadingCircleWebpack from '../parts/LoadingCircleWebpack'
import LoadingCircleGithub from '../parts/LoadingCircleGithub'
import LoadingCircleHeroku from '../parts/LoadingCircleHeroku'
import LoadingCircleMongo from '../parts/LoadingCircleMongo'
import LoadingCirclePS from '../parts/LoadingCirclePS'
import LoadingCircleIllustrator from '../parts/LoadingCircleIllustrator'
import LoadingCircleSketchup from '../parts/LoadingCircleSketchup'
import LoadingCircleAutoCAD from '../parts/LoadingCircleAutoCAD'
import LoadingCircleVideopad from '../parts/LoadingCircleVideopad'

class Languages extends React.Component {


  render() {
    return (
      <div>
      <section className="container home">
        <h3>Languages I use</h3>
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
              <LoadingCircleSaSS/>
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
              <LoadingCircleSQL/>
              <h2>SQL</h2>
            </div>
            <div className="languagedescription">
              <LoadingCircleExpress/>
              <h2>Express</h2>
            </div>

          </div>
          <h3>Other packages</h3>
          <div className="languages">

            <div className="languagedescription">
              <LoadingCircleWebpack/>
              <h2>Webpack</h2>
            </div>
            <div className="languagedescription">
              <LoadingCircleGithub/>
              <h2>Github</h2>
            </div>
            <div className="languagedescription">
              <LoadingCircleHeroku/>
              <h2>Heroku</h2>
            </div>
            <div className="languagedescription">
              <LoadingCircleMongo/>
              <h2>MongoDB</h2>
            </div>

          </div>

          <h3>Design programmes</h3>
          <div className="languages">

            <div className="languagedescription">
              <LoadingCirclePS/>
              <h2>Photoshop</h2>
            </div>
            <div className="languagedescription">
              <LoadingCircleIllustrator/>
              <h2>Illustrator</h2>
            </div>
            <div className="languagedescription">
              <LoadingCircleSketchup/>
              <h2>Google Sketchup</h2>
            </div>
            <div className="languagedescription">
              <LoadingCircleAutoCAD/>
              <h2>AutoCAD</h2>
            </div>
            <div className="languagedescription">
              <LoadingCircleVideopad/>
              <h2>Videopad</h2>
            </div>
          </div>

        </section>
      </div>
    )
  }
}
export default Languages
