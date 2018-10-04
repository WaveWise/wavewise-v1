import React, { Component } from 'react'
import './App.css'
import Home from './Home'
import data from './data'
import 'bulma/css/bulma.css'

// import { BrowserRouter as Router, Route } from 'react-router-dom'

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
          }
        })
      })
  }

  findSpotConditionValue (spot) {
    let conditionValue = 0
    if ((spot.wind_direction === 'E' && spot.wind_speed_mph > 5) ||
        (spot.wind_direction === 'S' && spot.wind_speed_mph > 5) ||
        (spot.wind_direction === 'SE' && spot.wind_speed_mph > 5) ||
        (spot.wind_direction === 'ESE' && spot.wind_speed_mph > 5)) {
      conditionValue -= 1
    }
    console.log(conditionValue)
  }

  render () {
    this.findSpotConditionValue(this.state.spots.SurfCity)
    return (
      <div>
        <div className='body-container'>
          {/* <Route exact path='/:spot_id' render={() => <Home surfCity={this.state.SurfCity} />} /> */}
          <Home locations={this.state.spots} />
        </div>
      </div>
    )
  }
}

export default App
