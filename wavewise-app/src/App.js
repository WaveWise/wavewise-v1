import React, { Component } from 'react'
import './App.css'
import Home from './Home'
import data from './data'

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
        // console.log(this.state.spots)
        console.log(data.findSpotConditionValue(this.state.spots.CarolinaBeach), this.state.spots.CarolinaBeach)
      })
  }

  render () {
    data.findSpotConditionValue(this.state.spots.SouthWrightsville)
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
