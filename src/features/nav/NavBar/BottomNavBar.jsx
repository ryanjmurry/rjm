import React from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { socialMenuItems } from '../../../app/common/constants';

const bottomBarStyles = {
  width: '100%',
  position: 'fixed',
  zIndex: '1',
  bottom: '0',
  left: '0',
  backgroundColor: 'transparent',
  textAlign: 'right',
  transition: '0.5s',
};

const BottomNavBar = ({bottomMenuHeight, activeIcon, color, handleIconActivate, handleIconDeactive}) => {
  return (
    <div style={{ ...bottomBarStyles, height: bottomMenuHeight }}>
    {Object.keys(socialMenuItems).map(key => (
      <span key={key} style={{ marginRight: '50px' }}>
        <a href={socialMenuItems[key].link} style={{ textDecoration: 'none' }}>
          <FontAwesomeIcon
            onMouseEnter={handleIconActivate(
              socialMenuItems[key].iconName,
              socialMenuItems[key].color
            )}
            onMouseLeave={handleIconDeactive}
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
  )
}

BottomNavBar.propTypes = {
  bottomMenuHeight: PropTypes.string.isRequired,
  activeIcon: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  handleIconActivate: PropTypes.func.isRequired,
  handleIconDeactive: PropTypes.func.isRequired,
}

export default BottomNavBar

