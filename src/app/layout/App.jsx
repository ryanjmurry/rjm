import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from '../../features/nav/NavBar/NavBar';
import HomePage from '../../features/home/HomePage/HomePage';
import ProfilePage from '../../features/profile/ProfilePage/ProfilePage';
import ProjectsPage from '../../features/projects/ProjectsPage/ProjectsPage';
import SkillsPage from '../../features/skills/SkillsPage/SkillsPage';
import { library } from '@fortawesome/fontawesome-svg-core'
// import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
 
library.add(fas)

class App extends Component {
  render() {
    return (
      <div>
        <div>
          <NavBar />
        </div>
        <div>
          <Switch>
            <Route exact path="/" component={HomePage} />
            {/* <Route path="/profile" component={ProfilePage} />
            <Route path="/projects" component={ProjectsPage} />
            <Route path="/skills" component={SkillsPage} /> */}
          </Switch>
        </div>
      </div>
    );
  }
}

export default App;
