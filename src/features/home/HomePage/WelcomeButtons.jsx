import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Button from '../../nav/Button/Button';

class WelcomeButtons extends Component {
  render() {
    return (
      <div>
        <Link to="/projects">
          <Button buttonText="explore work" />
        </Link>
        <Link to="/profile">
          <Button buttonText="view profile" />
        </Link>
      </div>
    );
  }
}

export default WelcomeButtons;
