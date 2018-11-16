import React from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import NavBar from '../../features/nav/NavBar/NavBar';
import HomePage from '../../features/home/HomePage/HomePage';
import ProfilePage from '../../features/profile/ProfilePage/ProfilePage';
import ProjectsPage from '../../features/projects/ProjectsPage/ProjectsPage';
import SkillsPage from '../../features/skills/SkillsPage/SkillsPage';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import styled from 'styled-components';

library.add(fas, fab);

//------ styles start ------//

const Wrapper = styled.div`
  .fade-enter {
    opacity: 0.01;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 500ms ease-in;
  }

  .fade-exit {
    opacity: 1;
  }

  .fade-exit.fade-exit-active {
    opacity: 0.01;
    transition: opacity 500ms ease-in;
  }

  div.transition-group {
    position: relative;
  }

  span.route-section {
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    height: 100%;
  }

  .container {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
  }
  @media (min-width: 768px) {
    .container {
      width: 750px;
    }
  }
  @media (min-width: 992px) {
    .container {
      width: 970px;
    }
  }
  @media (min-width: 1200px) {
    .container {
      width: 1170px;
    }
  }
`;

//------ styles start ------//

function App({ location }) {
  return (
    <Wrapper>
      <div>
        <NavBar />
      </div>
      <div className="container">
        <TransitionGroup className="transition-group">
          <CSSTransition key={location.key} classNames="fade" timeout={500}>
            <span className="route-section">
              <Switch location={location}>
                  <Route exact path="/" component={HomePage} />
                  <Route path="/profile" component={ProfilePage} />
                  <Route path="/projects" component={ProjectsPage} />
                  <Route path="/skills" component={SkillsPage} />
              </Switch>
            </span>
          </CSSTransition>
        </TransitionGroup>
      </div>
    </Wrapper>
  );
}

export default withRouter(App);
