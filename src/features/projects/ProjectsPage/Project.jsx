import React, { Component } from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import onClickOutside from 'react-onclickoutside';

const ProjectBox = styled.div`
  border: 1px solid #fff;
  width: 100%;
  position: absolute;
  left: 0;
  transition: 0.5s;
`;

const InactiveBox = styled.div`
  display: flex;
  align-items: center;
  height: 106px;
  justify-content: space-around;
  color: #fff;
  transition: 0.5s;
`;

const ProjectSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const TechnologySection = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 200px;
  justify-content: center;

  span {
    margin-left: 10px;
  }
`;

const ActiveBox = styled.div`
  display: flex;
  justify-content: space-around;
  transition: 0.5s;

  h3 {
    color: #1c306d;
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
    return (
      <ProjectBox onClick={this.projectClick} style={{ backgroundColor: boxBackgroundColor }}>
        {!projectActive && (
          <InactiveBox>
            <ProjectSection>
              <span>ProjectName</span>
            </ProjectSection>
            <TechnologySection>
              <span>Tech 1</span>
              <span>Tech 2</span>
              <span>Tech 3</span>
              <span>Tech 4</span>
              <span>Tech 5</span>
            </TechnologySection>
            <FontAwesomeIcon icon="chevron-right" />
          </InactiveBox>
        )}
        {projectActive && (
          <ActiveBox>
            <h3>
              GitHub <span style={{ margin: '0px 10px' }}>|</span> Live Site
            </h3>
          </ActiveBox>
        )}
      </ProjectBox>
    );
  }
}

export default onClickOutside(Project);
