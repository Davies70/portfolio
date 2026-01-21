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
    grid-template-columns: repeat(2, minmax(160px, 220px));
    grid-gap: 0 12px;
    padding: 0;
    margin: 20px 0 0 0;
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
    position: relative;
    border-radius: var(--border-radius);
    background-color: var(--green);

    &:hover {
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
      border-radius: var(--border-radius);
      mix-blend-mode: multiply;
      filter: grayscale(100%) contrast(1);
      transition: var(--transition);
    }

    &:before,
    &:after {
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: var(--border-radius);
      transition: var(--transition);
    }

    &:before {
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
    'React / Next.js',
    'Node.js',
    'Express',
    'AWS (Lambda, S3)',
    'Serverless APIs',
    'MongoDB / DynamoDB',
  ];

  return (
    <StyledAboutSection id='about' ref={revealContainer}>
      <h2 className='numbered-heading'>About Me</h2>

      <div className='inner'>
        <StyledText>
          <div>
            <p>
              I’m a full-stack software engineer who enjoys building practical,
              production-ready applications. My journey into web development
              started with simple interfaces, but quickly grew into designing
              complete systems that span frontend, backend, and cloud
              infrastructure.
            </p>

            <p>
              Today, I focus on building scalable web applications using modern
              JavaScript frameworks on the frontend and cloud-native, serverless
              architectures on the backend. I enjoy solving problems around
              performance, data flow, and real-world constraints.
            </p>

            <p>
              One example is{' '}
              <a
                href='https://cheapbites.vercel.app'
                target='_blank'
                rel='noreferrer'
              >
                CheapBites
              </a>
              , a location-based web app that helps users discover affordable
              dining options nearby, combining external APIs, maps, and
              authentication into a cohesive product.
            </p>

            <p>Technologies I’ve been working with recently:</p>
          </div>

          <ul className='skills-list'>
            {skills.map((skill, i) => (
              <li key={i}>{skill}</li>
            ))}
          </ul>
        </StyledText>

        <StyledPic>
          <div className='wrapper'>
            <img
              src={me}
              width={500}
              className='img'
              alt='Davies Ajayi headshot'
            />
          </div>
        </StyledPic>
      </div>
    </StyledAboutSection>
  );
};

export default About;
