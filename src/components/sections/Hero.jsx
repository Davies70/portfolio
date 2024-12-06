import React, { useState, useEffect } from 'react';
import { TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '../../utils';
import HeroList from '../HeroList';

const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--slate);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
    return () => clearTimeout(timeout);
  }, []);

  const one = <h1>Hello, my name is</h1>;
  const two = <h2 className='big-heading'>Davies Ajayi.</h2>;
  const three = <h3 className='big-heading'>I create functional web apps.</h3>;
  const four = (
    <>
      <p>
        I build products that I would actually use.
        Currently, I’m focused on fullstack applications with seamless user
        experience.{' '}
      </p>
    </>
  );
  const five = (
    <a
      className='email-link'
      href='https://cheapbites.vercel.app/'
      target='_blank'
      rel='noreferrer'
    >
      Check out my latest project: CheapBites!
    </a>
  );

  const items = [one, two, three, four, five];

  return (
    <StyledHeroSection>
      <TransitionGroup component={null}>
        {isMounted &&
          items.map((item, i) => (
            <HeroList i={i} item={item} key={i} loaderDelay={loaderDelay} />
          ))}
      </TransitionGroup>
    </StyledHeroSection>
  );
};

export default Hero;
