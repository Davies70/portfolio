import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition } from 'react-transition-group'

const HeroList = ({ i, item, loaderDelay, ...rest }) => {
    const nodeRef = useRef()
  return (
    <CSSTransition key={i} classNames='fadeup' timeout={loaderDelay} nodeRef={nodeRef} {...rest}>
      <div style={{ transitionDelay: `${i + 1}00ms` }} ref={nodeRef}>{item}</div>
    </CSSTransition>
  )
}

HeroList.propTypes = {
  i: PropTypes.number,
  item: PropTypes.node,
  loaderDelay: PropTypes.number,
}

export default HeroList
