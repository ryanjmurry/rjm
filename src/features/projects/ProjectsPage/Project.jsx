import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import onClickOutside from 'react-onclickoutside';

const ProjectBox = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  position: relative;
  left: 0;
  transition: 0.5s;
`;

const InactiveBox = styled.div`
  display: flex;
  align-items: center;
  height: 110px;
  justify-content: space-evenly;
  color: #fff;
  transition: 0.5s;
  margin: 0px 10px;
`;

const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 155px;
  font-family: 'Laila', serif;
  font-weight: 600;
`;

const TechnologySection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 200px;
  justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;

  span {
    margin-right: 10px;
  }
`;

const ActiveBox = styled.div`
  display: flex;
  justify-content: space-around;
  transition: 0.5s;
  height: 110px;

  h3 {
    color: #1c306d;
    font-weight: 400;
  }

  a {
    text-decoration: underline;
    color: #1c306d;
    font-weight: 400;
  }
`;

class Project extends Component {
  state = {
    boxBackgroundColor: '#1c306d',
    projectActive: false
  };

  handleClickOutside = evt => {
    this.projectDeactivate();
  };

  projectClick = () => {
    this.setState({
      boxBackgroundColor: '#fff',
      projectActive: true
    });
  };

  projectDeactivate = () => {
    this.setState({
      boxBackgroundColor: '#1c306d',
      projectActive: false
    });
  };

  render() {
    const { boxBackgroundColor, projectActive } = this.state;
    const { projectName, technologies, teamProject, hosted, gitHubUrl, liveSiteUrl } = this.props;
    return (
      <ProjectBox onClick={this.projectClick} style={{ backgroundColor: boxBackgroundColor }}>
        {!projectActive && (
          <InactiveBox>
            <ProjectSection>
              <span>{projectName}</span>
            </ProjectSection>
            <TechnologySection>
              {technologies.map((tech, index) => (
                <span key={index}>{tech}</span>
              ))}
            </TechnologySection>
            <FontAwesomeIcon icon="chevron-right" />
          </InactiveBox>
        )}
        {projectActive && (
          <ActiveBox>
            {hosted ? (
              <h3>
                <a href={gitHubUrl}>GitHub</a>
                <span style={{ margin: '0px 10px' }}>|</span> <a href={liveSiteUrl}>Live Site</a>
              </h3>
            ) : (
              <h3>
                <a href={gitHubUrl}>GitHub</a>
              </h3>
            )}
          </ActiveBox>
        )}
      </ProjectBox>
    );
  }
}

export default onClickOutside(Project);
