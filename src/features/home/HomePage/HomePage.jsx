import React from 'react';
import styled from 'styled-components';
import Snow from './Snow';
import Welcome from './Welcome';
import WelcomeButtons from './WelcomeButtons';

//------ styles start ------//

const HomePageContainer = styled.div`
  position: relative;
  top: 200px;

  @media (max-width: 768px) {
    top: 0px;
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-pack: center;
    -webkit-justify-content: center;
    -ms-flex-pack: center;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    top: 100px;
    }
    `;

//------ styles end ------//

const HomePage = ({screenWidth}) => {
  return (
    <div>
      {/* <Snow /> */}
      <HomePageContainer>
        <Welcome screenWidth={screenWidth}/>
        <WelcomeButtons screenWidth={screenWidth}/>
      </HomePageContainer>
    </div>
  );
}

export default HomePage;
