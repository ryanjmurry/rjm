import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

//------ styles start ------//

const Wrapper = styled.div`
h1 {
  line-height: 1;
  margin-bottom: -30px;
}

h3 {
  display: flex;
  align-items : center;
}


`;

//------ styles end ------//

const Welcome = ({ screenWidth }) => {
  return (
    <Wrapper>
      <h1>Ryan Murry</h1>

      {screenWidth > 560 && (
       <h3>
       Software Developer
       <FontAwesomeIcon icon="circle" style={{fontSize: '0.25em', margin: '0px 20px'}}/>
       Educator
     </h3>
      )}
      {screenWidth < 560 && (
        <h3>
        Software Developer <br />
        Educator
      </h3>
      )}
    </Wrapper>
  );
};

export default Welcome;
