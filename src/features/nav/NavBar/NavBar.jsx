import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
// import { objectToArray } from '../../../app/helpers/helpers';

const sideBarStyles = {
  height: '100%',
  width: '0',
  position: 'fixed',
  zIndex: '1',
  top: '80px',
  left: '0',
  backgroundColor: 'transparent',
  overflowX: 'hidden',
  transition: '0.5s' 
};

const bottomBarStyles = {
  width: '100%',
  position: 'fixed',
  zIndex: '1',
  bottom: '0',
  left: '0',
  backgroundColor: 'transparent',
  textAlign: 'right',
  transition: '0.5s'
};

const menuListStyles = {
  listStyleType: 'none',
  paddingLeft: '0px',
  textAlign: 'center',
  textTransform: 'uppercase'
};

const navigationalMenuItems = {
  home: {
    iconName: 'home',
    color: '#f9f871',
    displayName: 'home'
  },
  projects: {
    iconName: 'pencil-ruler',
    color: '#ffb75c',
    displayName: 'projects'
  },
  profile: {
    iconName: 'user-tie',
    color: '#f77c69',
    displayName: 'profile'
  },
  skills: {
    iconName: 'code',
    color: '#c7517b',
    displayName: 'skills'
  }
};

const socialMenuItems = {
  email: {
    iconName: 'envelope',
    color: '#ffb75c',
    // color: '#ea4335',
    link: 'mailto:ryanjmurry@gmail.com'
  },
  twitter: {
    iconName: ['fab', 'twitter'],
    color: '#ffb75c',
    // color: '#1da1f2',
    link: 'https://www.twitter.com/ryanjmurry'
  },
  gitHub: {
    iconName: ['fab', 'github-alt'],
    color: '#ffb75c',
    // color: '#2fbf50',
    link: 'https://github.com/ryanjmurry'
  },
  linkedIn: {
    iconName: ['fab', 'linkedin-in'],
    // color: '#007bb5',
    color: '#ffb75c',
    link: 'https://www.linkedin.com/in/ryanjmurry/'
  }
};

class NavBar extends Component {
  state = {
    menuOpen: false,
    width: '0',
    height: '0',
    scale: 'scale(0)',
    color: '#ffffff'
  };

  handleClickOutside = evt => {
    this.closeMenu();
  };

  openMenu = () => {
    this.setState({
      width: '125px',
      height: '50px',
      scale: 'scale(1)',
      menuOpen: true
    });
  };

  closeMenu = () => {
    this.setState({
      width: '0',
      height: '0',
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
    const { width, height, color, menuOpen, activeIcon } = this.state;
    return (
      <div>
        <div>
          <FontAwesomeIcon
            onClick={menuOpen ? this.closeMenu : this.openMenu}
            style={{
              display: 'fixed',
              color: 'white',
              paddingLeft: '46px',
              paddingTop: '20px',
              fontSize: '3em',
              cursor: 'pointer'
            }}
            icon={menuOpen ? 'times' : 'bars'}
          />
        </div>

        {/* Side NavBar */}
        <div style={{ ...sideBarStyles, width: width }}>
          <span />
          <ul style={menuListStyles}>
            {Object.keys(navigationalMenuItems).map(key => (
              <Link
                id={key}
                to={`/${navigationalMenuItems[key].displayName}`}
                style={{ textDecoration: 'none' }}
                onClick={this.closeMenu}
              >
                <li>
                  <FontAwesomeIcon
                    onMouseEnter={this.iconActivate(navigationalMenuItems[key].iconName, navigationalMenuItems[key].color)}
                    onMouseLeave={this.iconDeactivate}
                    icon={navigationalMenuItems[key].iconName}
                    style={{
                      color: activeIcon === navigationalMenuItems[key].iconName ? color : '#ffffff',
                      fontSize: '2.5em',
                      cursor: 'pointer'
                    }}
                  />
                  <div
                    style={{
                      color:
                        activeIcon === navigationalMenuItems[key].iconName
                          ? color
                          : 'transparent',
                      marginBottom: '20px',
                      transition: '1s'
                    }}
                  >
                    {navigationalMenuItems[key].displayName}
                  </div>
                </li>
              </Link>
            ))}
          </ul>
        </div>

        {/* Bottom NavBar */}
        <div style={{ ...bottomBarStyles, height: height }}>
          {Object.keys(socialMenuItems).map(key => (
            <span style={{marginRight: '50px'}}>
            <a href={socialMenuItems[key].link} style={{ textDecoration: 'none' }}>
              <FontAwesomeIcon
                onMouseEnter={this.iconActivate(socialMenuItems[key].iconName, socialMenuItems[key].color)}
                onMouseLeave={this.iconDeactivate}
                icon={socialMenuItems[key].iconName}
                style={{
                  fontSize: '2em',
                  cursor: 'pointer',
                  color: activeIcon === socialMenuItems[key].iconName ? color : '#ffffff'
                }}
              />
            </a>
            </span>
          ))}
          ;
        </div>
      </div>
    );
  }
}

export default onClickOutside(NavBar);
