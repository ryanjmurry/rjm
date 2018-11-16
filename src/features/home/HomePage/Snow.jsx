import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { Component } from 'react';
import './Snow.css';

//------ styles start ------//

const wrapperStyles = {
  position: 'fixed',
  minWidth: '100vw',
  minHeight: '100vh',
  height: '100%',
  width: '100%',
  top: '0',
  left: '0',
  overflow: 'hidden',
  zIndex: '-100'
};

const iconStyles = {
  position: 'absolute',
  top: '102%',
  opacity: '1'
};

//------ styles end ------//

class Snow extends Component {
  state = {
    circleArray: [],
    left: '50%',
    fontSize: '6px',
    color: '#ffffff'
  };

  componentDidMount() {
    this.loopThis();
  }

  loopThis = () => {
    const { circleArray } = this.state;
    const circleInterval = setInterval(() => {
      if (circleArray.length > 60) {
        clearInterval(circleInterval);
        setTimeout(() => {
          this.clearCircleArray();
          this.loopThis();
        }, 8000);
      }
      this.createCircle();
    }, 600);
  };

  createCircle = () => {
    this.randomizeCirclePropertyValues();
    const { circleArray, left, fontSize, color } = this.state;
    const newCircleArray = circleArray;
    const icon = (
      <FontAwesomeIcon
        className="float"
        style={{ ...iconStyles, left: left, fontSize: fontSize, color: color }}
        icon="circle"
      />
    );
    newCircleArray.push({ icon });
    this.setState({ circleArray: newCircleArray });
  };

  randomizeCirclePropertyValues = () => {
    this.changeHorizontalPosition();
    this.changeFontSize();
    this.changeColor();
  };

  randomNumber = (min, max) => {
    return Math.floor(Math.random() * max) + min;
  }

  changeHorizontalPosition = () => {
    const horizontalPosition = this.randomNumber(0, 100) + '%';
    this.setState({ left: horizontalPosition });
  };

  changeFontSize = () => {
    const fontSize = this.randomNumber(6, 12) + 'px';
    this.setState({ fontSize: fontSize });
  };

  changeColor = () => {
    const colorPickerArray = ['#7e3d7f', '#c7517b', '#f77c69', '#ffb75c', '#f9f871', '#ffffff'];
    let currentColor = colorPickerArray[this.randomNumber(0, 6)];
    this.setState({ color: currentColor });
  };

  clearCircleArray = () => {
    const { circleArray } = this.state;
    const newCircleArray = circleArray;
    newCircleArray.length = 0;
    this.setState({ circleArray: newCircleArray });
  };
  
  render() {
    return (
      <div style={{ ...wrapperStyles }}>
        {this.state.circleArray.map((item, index) => {
          return <span key={index}>{item.icon}</span>;
        })}
        {/* <button style={{ position: 'fixed', left: '0' }} onClick={this.createCircle}>
          CreateCircle
        </button>
        <button style={{ position: 'fixed', left: '25%' }} onClick={this.loopThis}>
          loopThis
        </button>
        <button style={{ position: 'fixed', left: '50%' }} onClick={this.clearCircleArray}>
          RemoveCircle
        </button>
        <button style={{ position: 'fixed', left: '75%' }} onClick={this.changeHorizontalPosition}>
          Change Position
        </button> */}
      </div>
    );
  }
}
export default Snow;
