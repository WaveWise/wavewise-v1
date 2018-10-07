import React, { Component } from 'react'
import './App.css'
import Home from './Home'
import SpotCondition from './SpotCondition'
import data from './data'
import 'mapbox-gl/dist/mapbox-gl.css'

import { BrowserRouter as Router } from 'react-router-dom'

class App extends Component {
  constructor () {
    super()
    this.state = {
      spots: {
        NorthWrightsville: [],
        SouthWrightsville: [],
        SurfCity: [],
        CarolinaBeach: []
      },
      currentBestSpot: {},
      spotValues: []
    }
  }

  componentWillMount () {
    data.getConditions()
      .then(res => {
        this.setState({
          spots: {
            SurfCity: res[0],
            NorthWrightsville: res[1],
            SouthWrightsville: res[2],
            CarolinaBeach: res[3]
          }
        })
        this.setState(state => ({
          spotValues: state.spotValues.concat(
            Object.values(state.spots).map(spot =>
              data.findSpotConditionValue(spot)))
        }))
        this.setState(state => ({
          currentBestSpot: Object.assign(
            {},
            state.currentBestSpot,
            data.selectTopSpot(this.state.spotValues.sort(data.rank))
          )
        }))
      })
  }

  render () {
    return (
      <Router>
        <div className='body-container'>
          <Home path='/' bestSpot={this.state.currentBestSpot} />
          <SpotCondition spots={this.state.spots} />
        </div>

      </Router>
    )
  }
}

export default App
