import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import React, { Component } from 'react';
import { Route, Switch, withRouter } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import HomePage from '../../features/home/HomePage/HomePage';
import NavBar from '../../features/nav/NavBar/NavBar';
import ProfilePage from '../../features/profile/ProfilePage/ProfilePage';
import ProjectsPage from '../../features/projects/ProjectsPage/ProjectsPage';
import SkillsPage from '../../features/skills/SkillsPage/SkillsPage';

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
    margin-left: 200px;
  }

  @media (max-width: 768px) {
    .container {
      margin-left: 0px;
    }
  }
`;

//------ styles start ------//

class App extends Component {
  state = {
    screenWidth: 0
  };

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({
      screenWidth: window.innerWidth
    });
  };

  render() {
    const { location } = this.props;
    const { screenWidth } = this.state;
    return (
      <Wrapper>
        <div>
          <NavBar screenWidth={screenWidth} />
        </div>
        <div className="container">
          <TransitionGroup className="transition-group">
            <CSSTransition key={location.key} classNames="fade" timeout={500}>
              <span className="route-section">
                <Switch location={location}>
                  <Route exact path="/home" render={() => <HomePage screenWidth={screenWidth} />} />
                  <Route exact path="/" render={() => <HomePage screenWidth={screenWidth} />} />
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
}

export default withRouter(App);
