import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { Router, Link } from "@reach/router";
import MenuSVG from './assets/MenuSVG';
import Waves from '@material-ui/icons/Waves';
import './SpotCondition.css'
import classNames from 'classnames';

const styles = {
  smallIcon: {
    width: 36,
    height: 36,
  },
  mediumIcon: {
    width: 48,
    height: 48,
  },
  largeIcon: {
    width: 60,
    height: 60,
  },
  small: {
    width: 72,
    height: 72,
    padding: 16,
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24,
  },
  large: {
    width: 120,
    height: 120,
    padding: 30,
  },
};

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
        <Button className='spot-menu-button'
          style={{ color:'#EBF5EE' }}
          aria-owns={anchorEl ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick}
        >
       <Waves 
      iconStyle={styles.smallIcon}
      style={styles.small}
      />
          
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
    
    {(Object.values(this.props.spots).map((spot) =>
                <MenuItem key={spot.spot_id} onClick={this.handleClose}> <Link to={`/spots/${spot.spot_name}/${spot.tide_type}/${spot.tide_time}/${spot.swell_direction}/${spot.swell_height_ft}/${spot.swell_period_s}/${spot.wind_speed_mph}/${spot.wind_direction}/${spot.spot_id}`} style={{ textDecoration: 'none', color:'#283044' }}>
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