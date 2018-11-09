import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './Snow.css';

const wrapperStyles = {
  position: 'absolute',
  minWidth: '100vw',
  minHeight: '100vh',
  height: '100%',
  width: '100%',
  top: '0',
  left: '0',
  overflow: 'hidden'
};

const iconStyles = {
  position: 'absolute',
  top: '101%',
  opacity: '0.5'
};

//------ styles end ------//

class Snow extends Component {
  state = {
    circleArray: [],
    left: '50%',
    fontSize: '12px',
    color: '#ffffff'
  };

  createCircle = () => {
    const { circleArray, left, fontSize, color } = this.state;
    const newCircleArray = circleArray;
    const icon = (
      <FontAwesomeIcon
        className="float"
        style={{ ...iconStyles, left: left, fontSize: fontSize, color: color }}
        icon="circle"
      />
    );
    for (let i = 0; i < 5; i++) {}

    newCircleArray.push({ icon });
    this.setState({ circleArray: newCircleArray });
  };

  clearCircleArray = () => {
    const { circleArray } = this.state;
    const newCircleArray = circleArray;
    newCircleArray.length = 0;
    this.setState({ circleArray: newCircleArray });
  };

  changeHorizontalPosition = () => {
    const min = 0;
    const max = 100;
    let hPosition = Math.floor(Math.random() * max) + min;
    const hPositionPercent = hPosition + '%';
    this.setState({ left: hPositionPercent });
  };

  changeFontSize = () => {
    const min = 6;
    const max = 10;
    let size = Math.floor(Math.random() * max) + min;
    const fontSize = size + 'px';
    this.setState({ fontSize: fontSize });
  };

  changeColor = () => {
    const colorPickerArray = ['#ffff82', '#de3c4b', '#19f6e8', '#ffffff'];
    const min = 0;
    const max = 4;
    let randomNumber = Math.floor(Math.random() * max) + min;
    let currentColor = colorPickerArray[randomNumber];
    this.setState({ color: currentColor });
  };

  loopThis = () => {
    const { circleArray } = this.state;
    setInterval(() => {
      if (circleArray.length > 200) {
        this.clearCircleArray();
      }
      this.createCircle();
      this.changeHorizontalPosition();
      this.changeFontSize();
      this.changeColor();
    }, 1000);
  };

  render() {
    return (
      <div style={{ ...wrapperStyles }}>
        {this.state.circleArray.map((item, index) => {
          return <span key={index}>{item.icon}</span>;
        })}
        <button style={{ position: 'fixed', left: '0' }} onClick={this.createCircle}>
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
        </button>
      </div>
    );
  }
}
export default Snow;
