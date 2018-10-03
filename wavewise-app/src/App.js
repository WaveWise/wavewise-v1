import React, { Component } from 'react'
import './App.css'
import Home from './Home'

import { BrowserRouter, Route, Switch } from 'react-router-dom'

class App extends Component {
  constructor () {
    super()
    this.state = {
      locations: {
        SouthWrightsville: [{
          swell: {
            units: 'ft',
            components: {
              combined: {
                height: 1.1,
                period: 14,
                compassDirection: 'E'
              }
            }
          },
          wind: {
            speed: 10,
            compassDirection: 'W'
          }
        }],
        SurfCity: [{
          swell: {
            units: 'ft',
            components: {
              combined: {
                height: 1.1,
                period: 14,
                compassDirection: 'E'
              }
            }
          },
          wind: {
            speed: 6,
            compassDirection: 'W'
          }
        }] }
    }
  }

  render () {
    return (
      <BrowserRouter>
        <div className='body-container'>
          <Route exact path='/' render={() => <Home locations={this.state.locations} />} />
        </div>
      </BrowserRouter>
    )
  }
}

export default App
