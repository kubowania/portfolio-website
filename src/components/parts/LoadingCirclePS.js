import React, { Component } from 'react'
import PieChart from 'react-minimal-pie-chart'

class LoadingCirclePS extends Component {
  constructor() {
    super()

    this.state = {
    }

  }


  render() {
    return (
      <div>
        <PieChart
          data={[{ value: 1, key: 1, color: '#E38627' }]}
          reveal={90}
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

export default LoadingCirclePS
