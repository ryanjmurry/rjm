import React, { Component } from 'react';
import onClickOutside from 'react-onclickoutside';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

// const SideBar = styled.div`
//   height: 100%;
//   width: 0;
//   position: fixed;
//   z-index: 1;
//   top: 80px;
//   left: 0;
//   background-color: transparent;
//   overflow-x: hidden;
//   transition: 0.5s;
// `;

// const TopBar = styled.div`
//   width: 100%;
//   position: fixed;
//   z-index: 1;
//   top: 0px;
//   left: 80px;
//   background-color: transparent;
//   overflow-x: hidden;
//   transition: 0.5s;
//   -webkit-transition: 0.5s;
//   display: flex;
//   align-items: center;

//   // li {
//   //   display: inline-block;
//   //   margin-left: 40px;
//   //   margin-top: 6px;
//   // }
// `;

const sideBarStyles = {
  height: '100%',
  width: '0',
  position: 'fixed',
  zIndex: '1',
  top: '80px',
  left: '0',
  backgroundColor: 'transparent',
  overflowX: 'hidden',
  transition: '0.5s',
  webkitTransition: '0.5s'
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

const liStyles = {
  display: 'inline-block',
  marginLeft: '40px',
  marginTop: '25px'
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
    bottomMenuHeight: '0',
    topMenuHeight: '0',
    scale: 'scale(0)',
    color: '#ffffff',
    screenWidth: 0
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
      width: '125px',
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
        {/* <d style={{ width: width }}> */}
        <div
          style={
            this.state.screenWidth > 768
              ? { ...sideBarStyles, width: width }
              : { ...topBarStyles, height: topMenuHeight }
          }
        >
          <ul style={menuListStyles}>
            {Object.keys(navigationalMenuItems).map(key => (
              <Link
                key={key}
                to={`/${navigationalMenuItems[key].displayName}`}
                style={{ textDecoration: 'none' }}
                onClick={this.closeMenu}
              >
                <li style={liStyles}>
                  <FontAwesomeIcon
                    onMouseEnter={this.iconActivate(
                      navigationalMenuItems[key].iconName,
                      navigationalMenuItems[key].color
                    )}
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
                        activeIcon === navigationalMenuItems[key].iconName ? color : 'transparent',
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
        <div style={{ ...bottomBarStyles, height: bottomMenuHeight }}>
          {Object.keys(socialMenuItems).map(key => (
            <span key={key} style={{ marginRight: '50px' }}>
              <a href={socialMenuItems[key].link} style={{ textDecoration: 'none' }}>
                <FontAwesomeIcon
                  onMouseEnter={this.iconActivate(
                    socialMenuItems[key].iconName,
                    socialMenuItems[key].color
                  )}
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
