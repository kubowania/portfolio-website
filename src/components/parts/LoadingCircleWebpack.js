import React, { Component } from 'react'
import PieChart from 'react-minimal-pie-chart'

class LoadingCircleCWebpack extends Component {
  constructor() {
    super()

    this.state = {
    }

  }


  render() {
    return (
      <div>
        <PieChart
          data={[{ value: 1, key: 1, color: '#A4A337' }]}
          reveal={40}
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

export default LoadingCircleCWebpack
