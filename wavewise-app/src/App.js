import React, { Component } from 'react'
import './App.css'
import Home from './Home'
import data from './data'
import 'bulma/css/bulma.css'

import { BrowserRouter as Router, Route } from 'react-router-dom'

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
      })
  }

  findSpotConditionValue (spot) {
    let conditionValue = 0
    const badPeriod = spot.swell_period_s < 5 || spot.swell_period_s > 8
    const optimalWbPeriod = spot.swell_period_s > 5 && spot.swell_period_s < 9
    const longPeriod = spot.swell_period_s > 8
    const bigSwell = spot.swell_height_ft > 4
    const funSwell = spot.swell_height_ft > 2 && spot.swell_height_ft < 4
    const goodWind = spot.wind_speed_mph < 15 && (spot.wind_direction === 'W' || spot.wind_direction === 'NNW' || spot.wind_direction === 'NW')
    if ((spot.wind_direction === 'E' && spot.wind_speed_mph > 5) ||
        (spot.wind_direction === 'S' && spot.wind_speed_mph > 5) ||
        (spot.wind_direction === 'SE' && spot.wind_speed_mph > 5) ||
        (spot.wind_direction === 'ESE' && spot.wind_speed_mph > 5) ||
        (spot.wind_direction === 'SSE' && spot.wind_speed_mph > 5) ||
        (spot.wind_direction === 'ENE' && spot.wind_speed_mph > 5)) {
      conditionValue -= 1
    }
    if (spot.swell_height_ft < 1.5 && badPeriod) {
      conditionValue -= 1
    }
    if (goodWind) {
      conditionValue += 1
    }
    if ((spot.spot_code === 'SC' || spot.spot_code === 'WB_NE') && spot.swell_direction === 'S') {
      conditionValue += 1
    }
    if ((spot.spot_code === 'WB_SE' || spot.spot_code === 'CB' || spot.spot_code === 'WB_NE') && spot.swell_direction === 'NE' && spot.swell_height_ft > 2 && optimalWbPeriod) {
      conditionValue += 1
    }
    if (bigSwell && longPeriod && (spot.swell_direction === 'S' || spot.swell_direction === 'SSE') && spot.spot_code === 'SC') {
      conditionValue += 5
    }
    if (optimalWbPeriod && funSwell && goodWind) {
      conditionValue += 3
    }
    console.log(conditionValue)
  }

  render () {
    data.findSpotConditionValue(this.state.spots.CarolinaBeach)
    return (
      <Router>
        <div className='body-container'>
          {/* <Route exact path='/' render={() => <Home surfCity={this.state.SurfCity} />} /> */}
          <Home bestSpot={this.state.currentBestSpot} />
        </div>
      </Router>
    )
  }
}

export default App
