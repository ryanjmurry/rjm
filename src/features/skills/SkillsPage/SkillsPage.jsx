import React from 'react';
import styled from 'styled-components';
import { skills } from '../../../app/common/constants';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import SkillsButtons from './SkillsButtons';

const Wrapper = styled.div`
  h1 {
    font-size: 3.5em;
    padding-left: 40px;
  }

  p {
    font-weight: 300;
    font-size: 1.35em;
  }

  .page-button {
    margin: 40px 0px 50px -50px;
  }

  .page-button p {
    font-weight: 600;
  }

  .project-link {
    text-decoration: none;
    color: #fff;
    font-weight: bold;
  }

  @media (max-width: 768px) {
    .page-button {
      margin: 40px 0px 50px 35px;
    }
  }

  @media (max-width: 495px) {
    .page-button {
      margin: 40px 0px 50px 0px;
    }
  }
`;

const TextBox = styled.div`
  @media (max-width: 768px) {
    margin: 0px 40px;
  }
  margin-left: -40px;
  margin-right: 40px;
  margin-top: -10px;
  max-width: 750px;
`;

const TechBox = styled.div`
  display: flex;
  margin-left: -40px;
  margin-right: 40px;
  justify-content: space-between;
  padding: 10px 20px;
  

  @media (min-width: 995px) {
    max-width: 1000px;
    background-image: linear-gradient(to right, rgba(31, 54, 122, 0.5) 0%, rgba(48, 82, 185, 0.2) 85%);
  }

  @media (max-width: 995px) {
    flex-direction: column;
    max-width: 338px;
    background-image: linear-gradient(to bottom, rgba(31, 54, 122, 0.5) 0%, rgba(48, 82, 185, 0.2) 85%);
  }

  @media (max-width: 768px) {
    margin: 0px 40px;
  }

  h3 {
    font-family: 'Khula', sans-serif;
    font-weight: 600;
    font-size: 1.1em;
    text-transform: uppercase;
  }

  hr {
    margin-top: -20px;
    opacity: 0.5;
    width: 50px;
    position: absolute;
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  ul {
    margin-left: -20px;
  }

  li {
    list-style: none;
    font-size: 0.85em;
    margin-bottom: 10px;
  }

  li p {
    font-weight: 600;
    margin-left: 5px;
  }

  .list-skill, .list-dash {
    display: inline;
  }

  .list-dash {
    opacity: 0.5;
  }
`;

const SkillsPage = ({ screenWidth }) => {
  const mobileHeader = <h1 style={{ margin: '40px 0 0 0' }}>Skills</h1>;
  const desktopHeader = (
    <h1 style={{ padding: '80px 0 0', marginLeft: '-40px', marginBottom: '0px', width: '75vw' }}>
      Skills
    </h1>
  );
  return (
    <Wrapper>
      {screenWidth > 768 ? desktopHeader : mobileHeader}
      <TextBox>
        <p>I enjoy both front-end and back-end development.</p>
        <p>
          I take pride in designing client-side solutions that are intuitive and easy to interact
          with, and databases that are scalable and minimize data redundancy and restructuring.
        </p>
        <p>
          I work well in large and small groups and thrive in leadership positions. I am effective
          at managing and engaging team members, solving conflicts quickly and efficiently, and
          planning with short and long term goals in mind.
        </p>
        <p>Below are relevant technologies that I have experience with:</p>
      </TextBox>
      <TechBox>
        {Object.keys(skills).map(key => (
          <div key={key}>
            <h3>{skills[key].displayName}</h3>
            <hr/>
            <ul>
              {skills[key].listItems.map((skill, index) => (
                <li key={index}>
                  <FontAwesomeIcon icon="minus" className='list-dash' color='#fff'/>
                  <p className='list-skill'>{skill}</p>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </TechBox>
      <div className='page-button'>
        <SkillsButtons screenWidth={screenWidth}/>
      </div>
    </Wrapper>
  );
};

export default SkillsPage;
