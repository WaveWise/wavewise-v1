import React, { Component } from 'react'
import { Link } from '@reach/router'

class Menu extends Component {
  render () {
    return (
      <ul>
        {(Object.values(this.props.spots).map((spot) =>
          <Link key={spot.spot_id} to={`/spots/${spot.spot_name}/${spot.tide}/${spot.swell_direction}/${spot.swell_height_ft}/${spot.swell_period_s}/${spot.wind_speed_mph}/${spot.wind_direction}`}>
            {spot.spot_name}
          </Link>
        )
        )}
      </ul>
    )
  }
}

export default Menu
