import { Layout } from './components'
import styled from 'styled-components'
// import { Hero, About, Portfolio, Contact } from './pages'
import Hero from './components/sections/Hero'
import { StyleSheetManager } from 'styled-components'

const StyledMainContainer = styled.main`
  counter-reset: section;
`

function App() {
  return (
    <Layout >
      <StyledMainContainer className='fillHeight'>
        <Hero />
      </StyledMainContainer>
    </Layout>
  )
}

export default App
