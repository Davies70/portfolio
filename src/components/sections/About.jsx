import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import config from '../../config';
import sr from '../../utils/sr';
import me from '../../images/me.jpg';

const StyledAboutSection = styled.section`
  max-width: 900px;

  .inner {
    display: grid;
    grid-template-columns: 3fr 2fr;
    grid-gap: 50px;

    @media (max-width: 768px) {
      display: block;
    }
  }
`;
const StyledText = styled.div`
  ul.skills-list {
    display: grid;
    grid-template-columns: repeat(2, minmax(140px, 200px));
    grid-gap: 0 10px;
    padding: 0;
    margin: 20px 0 0 0;
    overflow: hidden;
    list-style: none;

    li {
      position: relative;
      margin-bottom: 10px;
      padding-left: 20px;
      font-family: var(--font-mono);
      font-size: var(--fz-xs);

      &:before {
        content: '▹';
        position: absolute;
        left: 0;
        color: var(--green);
        font-size: var(--fz-sm);
        line-height: 12px;
      }
    }
  }
`;
const StyledPic = styled.div`
  position: relative;
  max-width: 300px;

  @media (max-width: 768px) {
    margin: 50px auto 0;
    width: 70%;
  }

  .wrapper {
    ${({ theme }) => theme.mixins.boxShadow};
    display: block;
    position: relative;
    width: 100%;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover,
    &:focus {
      outline: 0;
      transform: translate(-4px, -4px);

      &:after {
        transform: translate(8px, 8px);
      }

      .img {
        filter: none;
        mix-blend-mode: normal;
      }
    }

    .img {
      position: relative;
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      display: block;
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
      top: 0;
      left: 0;
      background-color: var(--navy);
      mix-blend-mode: screen;
    }

    &:after {
      border: 2px solid var(--green);
      top: 14px;
      left: 14px;
      z-index: -1;
    }
  }
`;

const About = () => {
  const revealContainer = useRef(null);

  useEffect(() => {
    sr.reveal(revealContainer.current, config.srConfig());
  }, []);

  const skills = [
    'JavaScript (ES6+)',
    'TypeScript',
    'Node.js',
    'Next.js',
    'Python',
    'Express',
    'React',
    'React Native',
  ];

  return (
    <StyledAboutSection id='about' ref={revealContainer}>
      <h2 className='numbered-heading'>About Me</h2>

      <div className='inner'>
        <StyledText>
          <div>
            <p>
              My interest in web development started back in 2017, from building
              simple websites to complex fullstack applications.
            </p>

            <p>
              I’ve honed my skills and crafted a range of web applications that
              I frequently utilize.
            </p>

            <p>
              I also recently made{' '}
              <a href='https://cheapbites.vercel.app'>a web app</a> designed to
              help food lovers find budget-friendly dining options nearby.
            </p>

            <p>A few technologies I’ve been working with recently:</p>
          </div>

          <ul className='skills-list'>
            {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
          </ul>
        </StyledText>

        <StyledPic>
          <div className='wrapper'>
            <img src={me} width={500} className='img' alt='Headshot' />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
