import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import BottomNavBar from './BottomNavBar';
import SideNavBar from './SideNavBar';
import MenuTrigger from './MenuTrigger';

const topBarStyles = {
  width: '100%',
  position: 'fixed',
  zIndex: '1',
  top: '0px',
  left: '80px',
  backgroundColor: 'transparent',
  overflowX: 'hidden',
  transition: '0.5s',
  webkitTransition: '0.5s',
  display: 'flex',
  alignItems: 'center'
};

class NavBar extends Component {
  state = {
    menuOpen: false,
    width: '0',
    bottomMenuHeight: '0',
    topMenuHeight: '0',
    scale: 'scale(0)',
    color: '#ffffff',
    screenWidth: 0,
    activeIcon: ''
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      screenWidth: window.innerWidth
    });
  };

  handleClickOutside = evt => {
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({
      width: '185px',
      bottomMenuHeight: '50px',
      topMenuHeight: '100px',
      scale: 'scale(1)',
      menuOpen: true
    });
  };

  closeMenu = () => {
    this.setState({
      width: '0',
      bottomMenuHeight: '0',
      topMenuHeight: '0',
      scale: 'scale(0)',
      menuOpen: false,
      activeIcon: ''
    });
  };

  iconActivate = (iconName, color) => () => {
    this.setState({
      color: color,
      activeIcon: iconName
    });
  };

  iconDeactivate = () => {
    this.setState({
      color: '#ffffff',
      activeIcon: ''
    });
  };

  render() {
    const { width, topMenuHeight, color, menuOpen, activeIcon, bottomMenuHeight } = this.state;
    return (
      <div>
        <MenuTrigger
          menuOpen={menuOpen}
          handleCloseMenu={this.closeMenu}
          handleOpenMenu={this.openMenu}
        />
        <SideNavBar
          handleIconActivate={this.iconActivate}
          handleIconDeactive={this.iconDeactivate}
          handleCloseMenu={this.closeMenu}
          color={color}
          width={width}
          activeIcon={activeIcon}
        />
        <BottomNavBar
          handleIconActivate={this.iconActivate}
          handleIconDeactive={this.iconDeactivate}
          color={color}
          bottomMenuHeight={bottomMenuHeight}
          activeIcon={activeIcon}
        />
      </div>
    );
  }
}

export default onClickOutside(NavBar);
