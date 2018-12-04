import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//------ styles start ------//

const Wrapper = styled.div`
  h1 {
    line-height: 1;
    margin-bottom: -30px;
  }

  .large-screen {
    display: flex;
    align-items : center;
  }

  hr {
    margin-top: -20px;
    color: rgba(255, 255, 255, 0.4);
    border: 1px solid rgba(255, 255, 255, 0.6);
    width: 85%;
  }

  hr + h3 {
    margin-top: 0px;
  }
  
`;

//------ styles end ------//

const Welcome = ({ screenWidth }) => {
  return (
    <Wrapper>
      <h1>Ryan Murry</h1>

      {screenWidth > 560 && (
        <h3 className='large-screen'>
          Software Developer
          <FontAwesomeIcon icon="circle" style={{ fontSize: '0.25em', margin: '0px 20px' }} />
          Educator
        </h3>
      )}
      {screenWidth < 560 && (
        <div className='small-screen'>
          <h3>Software Developer</h3>
          <hr />
          <h3>Educator</h3>
        </div>
      )}
    </Wrapper>
  );
};

export default Welcome;
