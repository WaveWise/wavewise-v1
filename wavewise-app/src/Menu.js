import React, { Component } from 'react'
import { Link } from '@reach/router'
import MenuSVG from './assets/MenuSVG'

class Menu extends Component {
  constructor () {
    super()
    this.state = {
      shown: false
    }
    // this.handleClick = this.handleClick.bind.this
  }

  handleClick () {
    this.setState({
      shown: !this.state.shown
    })
  }

  render () {
    return (
      <div className='menu'>
        {this.state.shown
          ? <div className='open-menu'>
            <div className='menu-button'>
              <MenuSVG onClick={() => this.handleClick()} />
            </div>
            <ul className='spot-list'>
              {(Object.values(this.props.spots).map((spot) =>
                <li className='select-spot' key={spot.spot_id}><Link to={`/spots/${spot.spot_name}/${spot.tide_type}/${spot.swell_direction}/${spot.swell_height_ft}/${spot.swell_period_s}/${spot.wind_speed_mph}/${spot.wind_direction}/${spot.spot_id}`}>
                  {spot.spot_name}
                </Link></li>
              )
              )}
            </ul>
            <Link to='/'>Home</Link>
          </div>
          : <div className='menu-button'>
            <MenuSVG onClick={() => this.handleClick()} />
          </div> }
      </div>
    )
  }
}

export default Menu
