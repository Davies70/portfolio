import React from 'react'
import PropTypes from 'prop-types'
import styled, { ThemeProvider } from 'styled-components'
import { GlobalStyle, theme } from '../styles'
import Nav from './Nav'

const StyledContent = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const Layout = ({ children }) => {
  return (
    <>
      <div id='root'>
        <ThemeProvider theme={theme}>
          <GlobalStyle />
          <a className='skip-to-content' href='#content'>
            Skip to Content
          </a>
          <StyledContent>
            <Nav />
            <div id='content'>{children}</div>
          </StyledContent>
        </ThemeProvider>
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node,
}

export default Layout
