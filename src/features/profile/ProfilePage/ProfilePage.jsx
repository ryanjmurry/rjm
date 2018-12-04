import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ProfileButtons from './ProfileButtons';

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

const ProfilePage = ({ screenWidth }) => {
  const mobileHeader = <h1 style={{ margin: '40px 0 0 0' }}>About Ryan</h1>;
  const desktopHeader = (
    <h1 style={{ padding: '80px 0 0', marginLeft: '-40px', marginBottom: '0px', width: '75vw' }}>
      About Ryan
    </h1>
  );
  return (
    <Wrapper>
      {screenWidth > 768 ? desktopHeader : mobileHeader}
      <TextBox>
        <p>
          Hi! I'm a dynamic and detail-oriented software developer with an aptitude for visualizing
          and delivering elegant, user-friendly solutions effectively and efficiently.
        </p>
        <p>
          Prior to becoming a software developer, I worked as an analytical chemist specializing in
          environmental testing and solution analysis and have spent the past four years as a high
          school chemistry teacher and varsity football coach.
        </p>
        <p>
          I've recently graduated from Epicodus, a 20-week web development school based in Portland,
          OR. During that time, I've had the opportunity to immerse myself in popular languages,
          libraries, and frameworks such as C#, ES6, ASP.NET Core, Angular 6, and React.
        </p>
        <p>
          I enjoy both front-end and back-end development. I take pride in designing client-side
          solutions that are intuitive and easy to interact with, and also am very interested in
          database design, management, and architecture.
        </p>
        <p>
          Browse some of my{' '}
          <Link className="project-link" to="/projects">
            work
          </Link>
          , view my{' '}
          <Link className="project-link" to="/skills">
            skills
          </Link>
          , or{' '}
          <a className="project-link" href="mailto:ryanjmurry@gmail.com">
            shoot me an email
          </a>
          !
        </p>
        <p>
          You can also find me on{' '}
          <a className="project-link" href="https://www.linkedin.com/in/ryanjmurry/">
            LinkedIn
          </a>
          ,{' '}
          <a className="project-link" href="https://github.com/ryanjmurry">
            GitHub
          </a>
          , and{' '}
          <a className="project-link" href="https://www.twitter.com/ryanjmurry">
            Twitter
          </a>
          .
        </p>
      </TextBox>
      <div className="page-button">
        <ProfileButtons screenWidth={screenWidth} />
      </div>
    </Wrapper>
  );
};

export default ProfilePage;
