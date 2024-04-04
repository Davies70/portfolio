import { Layout } from './components'
import styled from 'styled-components'
// import { Hero, About, Portfolio, Contact } from './pages'
import Hero from './components/sections/Hero'
import About from './components/sections/About'

const StyledMainContainer = styled.main`
  counter-reset: section;
`

function App() {
  return (
    <Layout>
      <StyledMainContainer className='fillHeight'>
        <Hero />
        <About />
      </StyledMainContainer>
    </Layout>
  )
}

export default App
