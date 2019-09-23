import React, { Component } from 'react'
import PieChart from 'react-minimal-pie-chart'

class LoadingCircleReact extends Component {
  constructor() {
    super()

    this.state = {
    }

  }


  render() {
    return (
      <div>
        <PieChart
          data={[{ value: 1, key: 1, color: '#2E8A85' }]}
          reveal={45}
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

export default LoadingCircleReact
