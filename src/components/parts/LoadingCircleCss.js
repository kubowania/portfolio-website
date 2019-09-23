import React, { Component } from 'react'
import PieChart from 'react-minimal-pie-chart'

class LoadingCircleCss extends Component {
  constructor(props) {
    super(props)

    this.state = {
    }

  }


  render() {
    console.log(this.props.percentage )
    return (
      <div>
        <PieChart
          data={[{ value: 1, key: 1, color: '#E38627' }]}
          reveal={this.props.percentage}
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

export default LoadingCircleCss
