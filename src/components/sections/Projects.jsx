import React, { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import config from '../../config';
import sr from '../../utils/sr';
import { projects } from '../../data';
import Project from '../Project';

const StyledProjectsSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  -webkit-box-align: center;

  h2 {
    font-size: clamp(24px, 5vw, var(--fz-heading));
  }

  .archive-link {
    font-family: var(--font-mono);
    font-size: var(--fz-sm);
    &:after {
      bottom: 0.1em;
    }
  }

  .projects-grid {
    ${({ theme }) => theme.mixins.resetList};
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 15px;
    position: relative;
    margin-top: 50px;
    width: 100%;

    @media (max-width: 1080px) {
      grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
  }

  .more-button {
    ${({ theme }) => theme.mixins.button};
    margin: 80px auto 0;
  }
`;

const Projects = () => {
  const [showMore, setShowMore] = useState(false);
  const revealTitle = useRef(null);
  const revealArchiveLink = useRef(null);
  const revealProjects = useRef([]);

  useEffect(() => {
    sr.reveal(revealTitle.current, config.srConfig());
    sr.reveal(revealArchiveLink.current, config.srConfig());
    revealProjects.current.forEach((ref, i) =>
      sr.reveal(ref, config.srConfig(i * 100))
    );
  }, []);

  const GRID_LIMIT = 6;

  const firstSix = projects.slice(0, GRID_LIMIT);
  const projectsToShow = showMore ? projects : firstSix;

  return (
    <StyledProjectsSection>
      <h2 ref={revealTitle}>Other Noteworthy Projects</h2>
      <p
        className='inline-link archive-link'
        to='/archive'
        ref={revealArchiveLink}
      >
        view the archive
      </p>

      <ul className='projects-grid'>
        {projectsToShow.map((node, i) => {
          return (
            <Project
              node={node}
              i={i}
              revealProjects={revealProjects}
              key={i}
            />
          );
        })}
      </ul>
      {projects.length > 6 && (
        <button
          className='more-button'
          onClick={() => {
            setShowMore(!showMore);
          }}
        >
          Show {showMore ? 'Less' : 'More'}
        </button>
      )}
    </StyledProjectsSection>
  );
};

export default Projects;
