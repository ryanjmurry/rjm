import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigationalMenuItems } from '../../../app/common/constants';

const MainMenu = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  font-family: 'Laila', serif;
  font-weight: 300;
  top: auto;
  padding-top: 25px;
  font-size: 1em;
  width: 0px;
  position: fixed;
  left: -30px;
  z-index: 1;
  transition: 0.5s;
`;

const SideNavBar = ({
  width,
  color,
  activeIcon,
  handleIconActivate,
  handleIconDeactivate,
  handleCloseMenu
}) => {
  return (
    <MainMenu style={{ width: width }}>
      {Object.keys(navigationalMenuItems).map(key => (
        <Link
          key={key}
          to={`/${navigationalMenuItems[key].displayName}`}
          style={{ textDecoration: 'none' }}
          onClick={handleCloseMenu}
        >
          <FontAwesomeIcon
            onMouseEnter={handleIconActivate(
              navigationalMenuItems[key].iconName,
              navigationalMenuItems[key].color
            )}
            onMouseLeave={handleIconDeactivate}
            icon={navigationalMenuItems[key].iconName}
            style={{
              color: activeIcon === navigationalMenuItems[key].iconName ? color : '#ffffff',
              fontSize: '2.5em',
              cursor: 'pointer'
            }}
          />
          <div
            style={{
              color: activeIcon === navigationalMenuItems[key].iconName ? color : 'transparent',
              marginBottom: '20px',
              transition: '1s'
            }}
          >
            {navigationalMenuItems[key].displayName}
          </div>
        </Link>
      ))}
    </MainMenu>
  );
};

SideNavBar.propTypes = {
  width: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  activeIcon: PropTypes.string.isRequired,
  handleIconActivate: PropTypes.func.isRequired,
  handleIconDeactivate: PropTypes.func.isRequired,
  handleMenuClose: PropTypes.func.isRequired,
};

export default SideNavBar;
