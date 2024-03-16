import Home from './pages/Home'
import About from './pages/About'
import Portfolio from './pages/Portfolio'
import Contact from './pages/Contact'
import { Container } from '@mui/material'
import styles from './styles/styles'

function App() {
  return (
    <Container sx={styles.app}>
      <Home />
      <About />
      <Portfolio />
      <Contact />
    </Container>
  )
}

export default App
