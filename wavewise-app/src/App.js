import React, { Component } from 'react'
import './App.css'
import Home from './Home'
import SpotConditions from './SpotConditions'
import data from './data'
import { Router, Link } from '@reach/router'

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
      currentBestSpot: [],
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
          },
          currentBestSpot: res[0]
        })
        // console.log(this.state.spots.CarolinaBeach)
        // console.log(data.findSpotConditionValue(this.state.spots.CarolinaBeach))
        // console.log(Object.values(this.state.spots))
        this.setState(state => ({
          spotValues: state.spotValues.concat(
            Object.values(state.spots).map(spot =>
              data.findSpotConditionValue(spot)))
        }))
        console.log(this.state.spotValues)
      })
  }

  render () {
    return (
      <Router>
        <div className='body-container'>
          <Home path='/' bestSpot={this.state.currentBestSpot} />
          <SpotConditions path='SpotConditions' SurfCity={this.state.spots.SurfCity} />
        </div>

      </Router>
    )
  }
}

export default App
