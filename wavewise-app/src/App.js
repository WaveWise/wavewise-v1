import React, { Component } from 'react'
import './App.css'
import Home from './Home'
import data from './data'

import { BrowserRouter as Router, Route } from 'react-router-dom'

class App extends Component {
  constructor () {
    super()
    this.state = {
      locations: {
        NorthWrightsville: [],
        SouthWrightsville: [],
        SurfCity: [],
        CarolinaBeach: []
      },
      currentBestSpot: []
    }
  }

  componentWillMount () {
    data.getConditions()
      .then(res => {
        this.setState({
          locations: {
            SurfCity: res[0],
            NorthWrightsville: res[1],
            SouthWrightsville: res[2],
            CarolinaBeach: res[3]
          }
        })
      })
  }

  render () {
    return (
      <Router>
        <div className='body-container'>
          {/* <Route exact path='/:spot_id' render={() => <Home surfCity={this.state.SurfCity} />} /> */}
          <Home locations={this.state.locations} />
        </div>
      </Router>
    )
  }
}

export default App
