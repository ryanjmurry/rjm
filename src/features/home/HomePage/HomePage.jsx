import React from 'react';
import Snow from './Snow';
import Welcome from './Welcome';
import WelcomeButtons from './WelcomeButtons';
import styled from 'styled-components';

const HomePageContainer = styled.div`
  position: relative;
  top: 200px;
`;

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
