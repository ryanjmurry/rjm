import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Project from './Project';
import { projects } from '../../../app/common/constants';

const Wrapper = styled.div`
  h1 {
    font-size: 3.5em;
  }
`;

function ProjectsPage() {
  return (
    <Wrapper>
      <h1>Projects</h1>
      {Object.keys(projects).map(key => (
        <Project
          key={key}
          projectName={projects[key].displayName}
          teamProject={projects[key].team}
          gitHubUrl={projects[key].gitHub}
          hosted={projects[key].liveSite.hosted}
          liveSiteUrl={projects[key].liveSite.url}
          technologies={projects[key].technologies}
        />
      ))}
    </Wrapper>
  );
}

export default ProjectsPage;
