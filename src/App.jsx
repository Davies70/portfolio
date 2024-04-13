import styled from 'styled-components'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Layout from './components/Layout'
import Featured from './components/sections/Featured'
import Projects from './components/sections/Projects'

const StyledMainContainer = styled.main`
  counter-reset: section;
`
function App() {
  return (
    <Layout>
      <StyledMainContainer className='fillHeight'>
        <Hero />
        <About />
        <Featured />
        <Projects />
      </StyledMainContainer>
    </Layout>
  )
}

export default App
