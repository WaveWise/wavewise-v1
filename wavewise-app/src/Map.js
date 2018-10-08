import React from 'react'
import './App.css'

export default class IframeComponent extends React.Component {
  render () {
    return (
      <div>
        <iframe src={this.props.src} height={this.props.height} width={this.props.width} className='map' />
      </div>
    )
  }
}

// snazzymaps.com/embed/103968" width="100%" height="600px" style="border:none;"></iframe>
