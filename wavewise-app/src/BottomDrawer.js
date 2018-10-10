import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Link } from "@reach/router";
import Waves from '@material-ui/icons/Waves';
// import { mailFolderListItems, otherMailFolderListItems } from './tileData';

const styles = {
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
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

    const sideList = (
      <div className={classes.list}>
        <List>test</List>
        <Divider />
        <List>test</List>
      </div>
    );

    const fullList = (
      <div className={classes.fullList}>
        {/* 
        <Divider />
         */}
        {(Object.values(this.props.spots).map((spot) =>
                <List key={spot.spot_id} onClick={this.handleClose}> 
                <Link to={`/spots/${spot.spot_name}/${spot.tide_type}/${spot.tide_time}/${spot.swell_direction}/${spot.swell_height_ft}/${spot.swell_period_s}/${spot.wind_speed_mph}/${spot.wind_direction}/${spot.spot_id}`} style={{ textDecoration: 'none', color:'#283044' }}>
                  {spot.spot_name}
    </Link> 
    </List> ))}
      </div>
    );

    return (
      <div>
        <Button onClick={this.toggleDrawer('bottom', true)} style={{ color:'#EBF5EE' }} > <Waves iconStyle={styles.smallIcon}
      style={styles.small}/> </Button>
        <Drawer open={this.state.left} onClose={this.toggleDrawer('left', false)}>
          <div
            tabIndex={0}
            role="button"
            onClick={this.toggleDrawer('left', false)}
            onKeyDown={this.toggleDrawer('left', false)}
          >
            {sideList}
          </div>
        </Drawer>
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