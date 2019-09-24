import React from 'react'
import { Link } from 'react-router-dom'

class About extends React.Component {


  render() {
    return (
      <div>
        <section className="container home">
          <h1 className="worktitle">About</h1>
          <h3>My experience as a developer</h3>

          <hr/>
          <br/>

          <div className="columns">
            <div className="column">
            <img width="400px" src="https://i.imgur.com/QvICKE3.jpg" title="AniaHeadshot" />

            </div>
            <div className="column">
              <h3>Designing websites since 2014.</h3>
              <br/>
              <h3>I have recently taken the plunge to learn JavaScript, React, Express, Python, SQL and Django to improve on my Software Development Skills and am looking to build out my portfolio by helping out Entrepreneurs looking to build MVP products for their investment rounds. Having spent the last two years on the fintech startup scene I know first-hand how expensive projects can get - when all you really need is a basic proof of concept product. </h3>
              <br/>
              <h3>If you are an entrepreneur starting out and don't mind a bit of patience and a basic first draft of your idea, please have a look at my work and do get in <a href="https://www.linkedin.com/in/ania-kubow-77766027/">touch.</a></h3>
            </div>

          </div>


        </section>
      </div>
    )
  }
}
export default About
