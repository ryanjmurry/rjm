import React from 'react';
import styled from 'styled-components';
import Snow from './Snow';
import Welcome from './Welcome';
import WelcomeButtons from './WelcomeButtons';

//------ styles start ------//

const HomePageContainer = styled.div`
  position: relative;
  top: 200px;
`;

//------ styles end ------//

function HomePage() {
  return (
    <div>
      <Snow />
      <HomePageContainer>
        <Welcome />
        <WelcomeButtons />
      </HomePageContainer>
    </div>
  );
}

export default HomePage;
