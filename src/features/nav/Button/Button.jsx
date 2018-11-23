import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: inline-block;

  .button {
    width: 200px;
    height: 50px;
    position: relative;
    display: inline-block;
    margin: 0 10px;
    cursor: pointer;
    color: #ffffff;
    -webkit-transition: background 0.4s 0.5s;
    transition: background 0.4s 0.5s;
  }

  .button h3 {
    font-size: 1em;
    text-align: center;
    text-transform: uppercase;
    line-height: 18px;
    font-weight: 500;
  }

  .button h3 {
    -webkit-transition: color 0.4s 0.5s;
    transition: color 0.4s 0.5s;
  }

  .button:hover h3 {
    color: #ffb75c;
    -webkit-transition-delay: 0s;
    transition-delay: 0s;
  }

  .button svg {
    position: absolute;
    top: 0;
    left: 0;
  }

  .button svg line {
    stroke-width: 2;
    stroke: #ffffff;
    -webkit-transition: all 0.8s ease-in-out;
    transition: all 0.8s ease-in-out;
  }

  .button:hover svg line {
    -webkit-transition-delay: 0.1s;
    transition-delay: 0.1s;
  }

  .button svg line.top,
  .button svg line.bottom {
    stroke-dasharray: 200;
  }

  .button svg line.left,
  .button svg line.right {
    stroke-dasharray: 50;
  }

  .button:hover svg line.top {
    -webkit-transform: translateX(-400px);
    transform: translateX(-400px);
    stroke: #ffb75c;
  }

  .button:hover svg line.bottom {
    -webkit-transform: translateX(400px);
    transform: translateX(400px);
    stroke: #ffb75c;
  }

  .button:hover svg line.left {
    -webkit-transform: translateY(100px);
    transform: translateY(100px);
    stroke: #ffb75c;
  }

  .button:hover svg line.right {
    -webkit-transform: translateY(-100px);
    transform: translateY(-100px);
    stroke: #ffb75c;
  }
`;

const Button = ({buttonText}) => {
  return (
    <Wrapper>
      <div className="button">
        <svg width="100%" height="100%">
          <line className="top" x1="0" y1="0" x2="600" y2="0" />
          <line className="left" x1="0" y1="50" x2="0" y2="-100" />
          <line className="bottom" x1="200" y1="50" x2="-400" y2="50" />
          <line className="right" x1="200" y1="0" x2="200" y2="150" />
        </svg>
        <h3>{buttonText}</h3>
      </div>
    </Wrapper>
  );
};

Button.propTypes = {
  buttonText: PropTypes.string
};

export default Button;
