import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Router, Link } from "@reach/router";

class SimpleMenu extends React.Component {
  state = {
    anchorEl: null,
  }

  handleClick = event => {
    this.setState({ anchorEl: event.currentTarget })
  }

  handleClose = () => {
    this.setState({ anchorEl: null })
  }

  render() {
    const { anchorEl } = this.state;

    return (
      <div>
        <Button
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
          Check out more spots
        </Button>
        
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
    
    {(Object.values(this.props.spots).map((spot) =>
                <MenuItem key={spot.spot_id} onClick={this.handleClose}> <Link to={`/spots/${spot.spot_name}/${spot.tide_type}/${spot.swell_direction}/${spot.swell_height_ft}/${spot.swell_period_s}/${spot.wind_speed_mph}/${spot.wind_direction}`} style={{ textDecoration: 'none', color:'#283044' }}>
                  {spot.spot_name}
    </Link> </MenuItem> ))}
                
          {/* // <MenuItem onClick={this.handleClose}>Wrightsville Beach-North End</MenuItem>
          // <MenuItem onClick={this.handleClose}>Wrightsville Beach-South End</MenuItem>
          // <MenuItem onClick={this.handleClose}>Carolina Beach</MenuItem> */}
    
        </Menu>
      </div>
    )
  }
}

export default SimpleMenu