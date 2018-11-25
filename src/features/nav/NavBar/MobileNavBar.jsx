import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { navigationalMenuItems, socialMenuItems } from '../../../app/common/constants';

const Overlay = styled.div`
  // display: flex;
  // flex-direction: column;
  // align-items: center;
  // text-align: center;
  // text-transform: uppercase;
  // top: auto;
  // padding-top: 25px;
  // font-size: 1em;
  // width: 0px;
  // position: fixed;
  // left: -30px;
  // z-index: 1;
  // transition: 0.5s;
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: rgb(0, 0, 0);
  background-color: rgba(255, 255, 255, 1);
  overflow-x: hidden;
  transition: 0.5s;

  .closeButton {
    position: absolute;
    top: 20px;
    right: 45px;
    font-size: 3em;
    cursor: pointer;
  }
`;

const OverlayContent = styled.div`
  position: relative;
  top: 25%;
  width: 100%;
  text-align: center;
  margin-top: 30px;
  display: flex;
  justify-content: space-evenly;
  margin-bottom: 100px;
`;

const IconCircles = styled.div`
  border: 2px solid #1c306d;
  width: 75px;
  height: 75px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background-color: transparent;

`;

const IconText = styled.div`
  color: #1c306d;
  margin-bottom: 20px;
  transition: 1s;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.9em;
  margin-top: 10px;
  font-family: 'Laila', serif;
`;

const iconStyles = {
  color: '#1c306d',
  fontSize: '2em',
  cursor: 'pointer'
};

const MobileNavBar = ({ overlayWidth, handleCloseMenu }) => {
  return (
    <Overlay style={{ width: overlayWidth }}>
      <FontAwesomeIcon
        className="closeButton"
        icon="times"
        color="#1c306d"
        onClick={handleCloseMenu}
      />
      <OverlayContent>
        {Object.keys(navigationalMenuItems).map(key => (
          <Link
            key={key}
            to={`/${navigationalMenuItems[key].displayName}`}
            style={{ textDecoration: 'none' }}
            onClick={handleCloseMenu}
          >
            <IconCircles>
              <FontAwesomeIcon icon={navigationalMenuItems[key].iconName} style={iconStyles} />
            </IconCircles>
            <IconText>{navigationalMenuItems[key].displayName}</IconText>
          </Link>
        ))}
      </OverlayContent>
      <OverlayContent>
        {Object.keys(socialMenuItems).map(key => (
          <a
            href={socialMenuItems[key].link}
            key={key}
            style={{ textDecoration: 'none' }}
            onClick={handleCloseMenu}
          >
            <IconCircles>
              <FontAwesomeIcon icon={socialMenuItems[key].iconName} style={iconStyles} />
            </IconCircles>
          </a>
        ))}
      </OverlayContent>
    </Overlay>
  );
};

MobileNavBar.propTypes = {
  overlayWidth: PropTypes.string.isRequired,
  handleCloseMenu: PropTypes.func.isRequired
};

export default MobileNavBar;
