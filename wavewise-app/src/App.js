import React, { Component } from 'react'
import './App.css'
import Home from './Home'
import SpotCondition from './SpotCondition'
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
      currentBestSpot: {},
      spotValues: []
    }
  }

  handleClick (e) {
    console.log(e.target.value)
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
        <Home path='/'
          bestSpot={this.state.currentBestSpot}
          spots={this.state.spots} />
        <SpotCondition path='/spots/:name/:tide/:swelldir/:height/:period/:windspeed/:winddir' spots={this.state.spots} />
      </Router>
    )
  }
}

export default App
