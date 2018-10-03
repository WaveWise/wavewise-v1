import React, { Component } from 'react'
import './App.css'
import Home from './Home'
import data from './data'

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

  findBestSpot (spot) {

  }

  render () {
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
