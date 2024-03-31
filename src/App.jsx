import { Layout } from './components'
import styled from 'styled-components'
// import { Hero, About, Portfolio, Contact } from './pages'

const StyledMainContainer = styled.main`
  counter-reset: section;
`

function App() {
  return (
    <Layout>
      <StyledMainContainer className='fillHeight'></StyledMainContainer>
    </Layout>
  )
}

export default App
