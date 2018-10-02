import React, { Component } from 'react'
import ncOutline from './ncOutline.gif'

class Canvas extends Component {
  constructor (props) {
    super(props)
    this.canvasRef = React.createRef()
  }
  render () {
    return (
      <div>
        <canvas width='10' height='10' ref={this.canvasRef} />
        <img src={ncOutline} />
      </div>
    )
  }
}

export default Canvas
