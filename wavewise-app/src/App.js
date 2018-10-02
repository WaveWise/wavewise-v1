import React, { Component } from 'react'
import './App.css'
import ncOutline from './ncOutline.gif'

// import Canvas from './Canvas'

class App extends Component {
  render () {
    return (
      <div className='container'>
        <h1 className='header'>WaveWise</h1>
        <img className='nc-photo' src={ncOutline} />
        <div className='more-info-link'>
          <p>more info</p>
        </div>
      </div>
    )
  }
}

export default App
