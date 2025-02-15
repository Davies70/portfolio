import React, { useEffect, useState, useRef } from 'react'
import config from '../config'
import styled, { css } from 'styled-components'
import IconLogo from './icons/logo'
import IconHex from './icons/hex'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import { useScrollDirection } from '../hooks'
import { loaderDelay } from '../utils'
import PropTypes from 'prop-types'
import Menu from './Menu'
import NavItem from './NavItem'

const StyledHeader = styled.header`
  ${({ theme }) => theme.mixins.flexBetween};
  position: fixed;
  top: 0;
  z-index: 11;
  padding: 0px 50px;
  width: 100%;
  height: var(--nav-height);
  background-color: rgba(10, 25, 47, 0.85);
  filter: none !important;
  pointer-events: auto !important;
  user-select: auto !important;
  backdrop-filter: blur(10px);
  transition: var(--transition);

  @media (max-width: 1080px) {
    padding: 0 40px;
  }
  @media (max-width: 768px) {
    padding: 0 25px;
  }

  @media (prefers-reduced-motion: no-preference) {
    ${(props) =>
      props.$scrollDirection === 'up' &&
      !props.$scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(0px);
        background-color: rgba(10, 25, 47, 0.85);
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};

    ${(props) =>
      props.$scrollDirection === 'down' &&
      !props.$scrolledToTop &&
      css`
        height: var(--nav-scroll-height);
        transform: translateY(calc(var(--nav-scroll-height) * -1));
        box-shadow: 0 10px 30px -10px var(--navy-shadow);
      `};
  }
`

const StyledNav = styled.nav`
  ${({ theme }) => theme.mixins.flexBetween};
  position: relative;
  width: 100%;
  color: var(--lightest-slate);
  font-family: var(--font-mono);
  counter-reset: item 0;
  z-index: 12;

  .logo {
    ${({ theme }) => theme.mixins.flexCenter};

    a {
      color: var(--green);
      width: 42px;
      height: 42px;
      position: relative;
      z-index: 1;

      .hex-container {
        position: absolute;
        top: 0;
        left: 0;
        z-index: -1;
        @media (prefers-reduced-motion: no-preference) {
          transition: var(--transition);
        }
      }

      .logo-container {
        position: relative;
        z-index: 1;
        svg {
          fill: none;
          user-select: none;
          @media (prefers-reduced-motion: no-preference) {
            transition: var(--transition);
          }
          polygon {
            fill: var(--navy);
          }
        }
      }

      &:hover,
      &:focus {
        outline: 0;
        transform: translate(-4px, -4px);
        .hex-container {
          transform: translate(4px, 3px);
        }
      }
    }
  }
`

const StyledLinks = styled.div`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    display: none;
  }

  ol {
    ${({ theme }) => theme.mixins.flexBetween};
    padding: 0;
    margin: 0;
    list-style: none;

    li {
      margin: 0 5px;
      position: relative;
      counter-increment: item 1;
      font-size: var(--fz-xs);

      a {
        padding: 10px;

        &:before {
          content: '0' counter(item) '.';
          margin-right: 5px;
          color: var(--green);
          font-size: var(--fz-xxs);
          text-align: right;
        }
      }
    }
  }

  .resume-button {
    ${({ theme }) => theme.mixins.smallButton};
    margin-left: 15px;
    font-size: var(--fz-xs);
  }
`

const Nav = ({ isHome }) => {
  const [isMounted, setIsMounted] = useState(!isHome)
  const scrollDirection = useScrollDirection('down')
  const [scrolledToTop, setScrolledToTop] = useState(true)
  const logoRef = useRef()
  const resumeRef = useRef()
  const hamburgerRef = useRef()

  const handleScroll = () => {
    setScrolledToTop(window.scrollY < 50)
  }

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsMounted(true)
    }, 100)

    window.addEventListener('scroll', handleScroll)

    return () => {
      clearTimeout(timeout)
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  const timeout = isHome ? loaderDelay : 0
  const fadeClass = isHome ? 'fade' : ''
  const fadeDownClass = isHome ? 'fadedown' : ''

  const Logo = (
    <div className='logo' tabIndex='-1'>
      <a href='/' aria-label='home' ref={logoRef}>
        <div className='hex-container'>
          <IconHex />
        </div>
        <div className='logo-container'>
          <IconLogo />
        </div>
      </a>
    </div>
  )

  // const ResumeLink = (
  //   <a
  //     className='resume-button'
  //     href='/resume.pdf'
  //     target='_blank'
  //     rel='noopener noreferrer'
  //   >
  //     Resume
  //   </a>
  // )

  return (
    <StyledHeader
      $scrollDirection={scrollDirection}
      $scrolledToTop={scrolledToTop}
    >
      <StyledNav>
        <>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition
                classNames={fadeClass}
                timeout={timeout}
                nodeRef={logoRef}
              >
                <>{Logo}</>
              </CSSTransition>
            )}
          </TransitionGroup>

          <StyledLinks>
            <ol>
              <TransitionGroup component={null}>
                {config.navLinks &&
                  isMounted &&
                  config.navLinks.map(({ url, name }, i) => (
                    <NavItem
                      i={i}
                      isHome={isHome}
                      key={i}
                      url={url}
                      name={name}
                      classNames={fadeDownClass}
                      timeout={timeout}
                    />
                  ))}
              </TransitionGroup>
            </ol>
            {/* <TransitionGroup component={null}>
              {isMounted && (
                <CSSTransition
                  classNames={fadeDownClass}
                  timeout={timeout}
                  nodeRef={resumeRef}
                >
                  <div
                    style={{
                      transitionDelay: `${
                        isHome ? config.navLinks.length * 100 : 0
                      }ms`,
                    }}
                    ref={resumeRef}
                  >
                    {ResumeLink}
                  </div> 
                </CSSTransition>
              )}
            </TransitionGroup> */}
          </StyledLinks>
          <TransitionGroup component={null}>
            {isMounted && (
              <CSSTransition
                classNames={fadeClass}
                timeout={timeout}
                nodeRef={hamburgerRef}
              >
                <Menu hamburgerRef={hamburgerRef} />
              </CSSTransition>
            )}
          </TransitionGroup>
        </>
      </StyledNav>
    </StyledHeader>
  )
}

Nav.propTypes = {
  isHome: PropTypes.bool,
}

export default Nav
