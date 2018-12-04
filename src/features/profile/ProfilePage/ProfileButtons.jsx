import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../nav/Button/Button';

const mobileStyles = {
  height: '150px',
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'space-evenly'
}

const desktopStyles = {};

const ProfileButtons = ({screenWidth}) => {
  return (
    <div style={screenWidth <= 495 ? mobileStyles : desktopStyles}>
        <Link to="/skills">
          <Button buttonText="explore skills" />
        </Link>
        <Link to="/profile">
          <Button buttonText="view projects" />
        </Link>
      </div>
  )
}

export default ProfileButtons
