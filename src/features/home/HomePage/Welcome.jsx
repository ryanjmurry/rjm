import React from 'react';
import styled from 'styled-components';

//------ styles start ------//

const Wrapper = styled.div`
  margin-left: 10px;

  h1 {
    font-weight: 300;
    font-size: 3em;
    line-height: 70px;
    letter-spacing: 0;
    color: #ffffff;
  }

  h3 {
    color: #fff;
    line-height: 30px;
    font-size: 1.3em;
    opacity: 0.7;
    width: 535px;
    font-weight: 400;
    margin-top: -25px;
  }
`;

//------ styles end ------//

function Welcome() {
  return (
    <Wrapper>
      <h1>
        Ryan Murry <br />
        Full-Stack Web Developer
      </h1>
      <h3>
        Hi. I'm a former educator, smartphone photographer, and aspiring web developer based out of
        Portland, OR.
      </h3>
    </Wrapper>
  );
}

export default Welcome;
