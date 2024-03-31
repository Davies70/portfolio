import React from 'react'
import { Container } from '@mui/material'
import { Header } from '../components'
import HomePageContent from '../components/HomePageContent'
import styles from '../styles/styles'


const Hero = () => {
  return (
    <>
      <Header />
      <Container sx={styles.homePage}>
        <HomePageContent />
      </Container>
      
    </>
  )
}

export default Hero
