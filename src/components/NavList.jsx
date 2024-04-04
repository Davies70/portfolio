import React, { useRef } from 'react'
import { CSSTransition } from 'react-transition-group'
import PropTypes from 'prop-types'

const NavList = ({ i, classNames, timeout, isHome, url, name, ...rest }) => {
  const nodeRef = useRef()
  return (
    <CSSTransition
      key={i}
      classNames={classNames}
      timeout={timeout}
      nodeRef={nodeRef}
      {...rest}
    >
      <li
        key={i}
        style={{ transitionDelay: `${isHome ? i * 100 : 0}ms` }}
        ref={nodeRef}
      >
        <a to={url}>{name}</a>
      </li>
    </CSSTransition>
  )
}

NavList.propTypes = {
  i: PropTypes.number,
  classNames: PropTypes.string,
  timeout: PropTypes.number,
  url: PropTypes.string,
  name: PropTypes.string,
  isHome: PropTypes.bool,
}

export default NavList
