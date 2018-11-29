import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Project from './Project';
import { projects } from '../../../app/common/constants';
import Button from '../../nav/Button/Button';

const Wrapper = styled.div`
  h1 {
    margin: 40px 0 0 0;
    font-size: 3.5em;
    padding-left: 40px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  }

  .page-button {
    margin: 40px 0px 40px 35px;
  }
`;

function ProjectsPage({ screenWidth }) {
  return (
    <Wrapper>
      <h1>Projects</h1>
      {Object.keys(projects).map(key => (
        <Project
          key={key}
          projectName={projects[key].displayName}
          description={projects[key].description}
          teamProject={projects[key].team}
          gitHubUrl={projects[key].gitHub}
          hosted={projects[key].liveSite.hosted}
          liveSiteUrl={projects[key].liveSite.url}
          technologies={projects[key].technologies}
          screenWidth={screenWidth}
        />
      ))}
      <div className='page-button'>
        <Button buttonText="explore my skills" />
      </div>
    </Wrapper>
  );
}

export default ProjectsPage;
