import React, { Component } from 'react'
import PieChart from 'react-minimal-pie-chart'

class LoadingCircleGithub extends Component {



  render() {

    return (
      <div>
        <PieChart
          data={[{ value: 1, key: 1, color: '#B0A83B' }]}
          reveal={20}
          lineWidth={20}
          background="#bfbfbf"
          lengthAngle={270}
          rounded
          animate
        />
      </div>
    )
  }
}

export default LoadingCircleGithub
