import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import BottomNavBar from './BottomNavBar';
import SideNavBar from './SideNavBar';
import MenuTrigger from './MenuTrigger';
import MobileNavBar from './MobileNavBar';

class NavBar extends Component {
  state = {
    menuOpen: false,
    width: '0',
    overlayWidth: '0',
    bottomMenuHeight: '0',
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
      overlayWidth: '100%',
      bottomMenuHeight: '50px',
      topMenuHeight: '100px',
      scale: 'scale(1)',
      menuOpen: true
    });
  };

  closeMenu = () => {
    this.setState({
      width: '0',
      overlayWidth: '0',
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
    const {
      overlayWidth,
      width,
      color,
      menuOpen,
      activeIcon,
      bottomMenuHeight,
      screenWidth
    } = this.state;
    return (
      <div>
        <MenuTrigger
          menuOpen={menuOpen}
          screenWidth={screenWidth}
          handleCloseMenu={this.closeMenu}
          handleOpenMenu={this.openMenu}
        />
        {screenWidth < 768 ? (
          <MobileNavBar handleCloseMenu={this.closeMenu} overlayWidth={overlayWidth} />
        ) : (
          <div>
            <SideNavBar
              handleIconActivate={this.iconActivate}
              handleIconDeactivate={this.iconDeactivate}
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
        )}
      </div>
    );
  }
}

export default onClickOutside(NavBar);
