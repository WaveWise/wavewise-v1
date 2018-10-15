import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Link } from "@reach/router";
import Waves from '@material-ui/icons/Waves';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  smallIcon: {
    width: 34,
    height: 34,
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
    width: 65,
    height: 65,
    padding: 0,
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

class BottomDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;

    const fullList = (
      <div className={classes.fullList}>
        {(Object.values(this.props.spots).map((spot, i) =>
                <List className='menu-item' key={i} onClick={this.handleClose}> 
                <Link to={`/spots/${spot.spot_name}/${spot.tide_type}/${spot.tide_time}/${spot.swell_direction}/${spot.swell_height_ft}/${spot.swell_period_s}/${spot.wind_speed_mph}/${spot.wind_direction}/${spot.spot_id}/${spot.rating}`} style={{ textDecoration: 'none', color:'#C6D8D3' }}>
                  {spot.spot_name}
    </Link> 
    </List> ))}
    <List className='menu-item'> <Link to='/spotform' style={{ textDecoration: 'none', color:'#C6D8D3', fontWeight: 'bolder'  }} >tell us about your spot</Link>
    </List>
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('bottom', true)} style={{ color:'#78A1BB' }} > <Waves iconStyle={styles.smallIcon}
      style={styles.small}/> </Button>
       
        <Drawer anchor="bottom" open={this.state.bottom} onClose={this.toggleDrawer('bottom', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('bottom', false)}
            onKeyDown={this.toggleDrawer('bottom', false)}
          >
            {fullList}
          </div>
        </Drawer>
      </div>
    );
  }
}

BottomDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(BottomDrawer)