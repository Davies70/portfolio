import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import config from '../config'
import Side from './Side'

const StyledLinkWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;

  &:after {
    content: '';
    display: block;
    width: 1px;
    height: 90px;
    margin: 0 auto;
    background-color: var(--light-slate);
  }

  a {
    margin: 20px auto;
    padding: 10px;
    font-family: var(--font-mono);
    font-size: var(--fz-xxs);
    line-height: var(--fz-lg);
    letter-spacing: 0.1em;
    writing-mode: vertical-rl;

    &:hover,
    &:focus {
      transform: translateY(-3px);
    }
  }
`

const Email = ({ isHome }) => {
  const nodeRef = useRef()

  return (
    <Side isHome={isHome} orientation='right' nodeRef={nodeRef}>
      <StyledLinkWrapper>
        <a href={`mailto:${config.email}`} ref={nodeRef}>
          {config.email}
        </a>
      </StyledLinkWrapper>
    </Side>
  )
}

Email.propTypes = {
  isHome: PropTypes.bool,
}

export default Email
