import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import onClickOutside from 'react-onclickoutside';

const ProjectBox = styled.div`
  border-bottom: 1px solid rgba(255, 255, 255, 0.5);
  width: 100%;
  position: relative;
  left: 0;
  transition: 0.5s;

  @media (min-width: 768px) {
    width: 75vw;
    margin-left: -40px;
  }
`;

const InactiveBox = styled.div`
  display: flex;
  align-items: center;
  height: 110px;
  justify-content: space-between;
  color: #fff;
  margin: 0px 30px;
`;

const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
  width: 200px;
  font-family: 'Khula', sans-serif;
  font-weight: 600;
  font-size: 1.2em;
`;

const TechnologySection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 125px;
  // justify-content: center;
  font-family: 'Montserrat', sans-serif;
  font-weight: 400;
  font-size: 1em;
  margin-left: 15px;

  span {
    margin-right: 10px;
  }

  @media(min-width: 768px) {
    width: 300px;
  }
`;

const ActiveBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  transition: 0.5s;
  height: 110px;

  h3 {
    color: #1c306d;
    font-weight: 400;
    margin-top: -5px;
  }

  a {
    text-decoration: underline;
    color: #1c306d;
    font-weight: 400;
  }

  p {
    color: #1c306d;
  }
`;

const TeamSoloTag = styled.div`
  position: absolute;
  top: 0;
  right: 15px;
  font-family: 'Laila', serif;
  color: #ffb75c;
  font-weight: 600;
  font-size: 0.9em;
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
    const {
      projectName,
      description,
      technologies,
      teamProject,
      hosted,
      gitHubUrl,
      liveSiteUrl,
      screenWidth
    } = this.props;
    const teamOrSolo = teamProject ? 'team' : 'solo';
    const techDisplay =
      screenWidth < 768 ? (
        <span>{technologies[0]}</span>
      ) : (
        technologies.map((tech, index) => <span key={index}>{tech}</span>)
      );
    

    return (
      <ProjectBox onClick={this.projectClick} style={{ backgroundColor: boxBackgroundColor }}>
        {!projectActive && (
          <InactiveBox>
            <TeamSoloTag>{teamOrSolo}</TeamSoloTag>
            <ProjectSection>
              <span>{projectName}</span>
            </ProjectSection>
            <TechnologySection>{techDisplay}</TechnologySection>
            <FontAwesomeIcon icon="chevron-right" />
          </InactiveBox>
        )}
        {projectActive && (
          <ActiveBox>
            <p>{description}</p>
            {hosted ? (
              <h3>
                <a href={gitHubUrl}>GitHub</a>
                <span style={{ marginLeft: '10px' }}>|</span> <a href={liveSiteUrl}>Live Site</a>
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
