import React, { Component } from 'react'
import PieChart from 'react-minimal-pie-chart'

class LoadingCircleIllustrator extends Component {



  render() {
    return (
      <div>
        <PieChart
          data={[{ value: 1, key: 1, color: '#C28B47' }]}
          reveal={80}
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

export default LoadingCircleIllustrator
