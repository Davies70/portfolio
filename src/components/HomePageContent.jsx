import React from 'react'
import { Container, Typography, Box } from '@mui/material'
import styles from '../styles/styles'

const HomePageContent = () => {
  return (
    <Container sx={styles.homeContent}>
      <Typography variant='h1' sx={styles.heading}>
        {' '}
        Hi, I`m Davies
      </Typography>
      <Typography variant='h2' sx={styles.subheading}>
        Full-Stack Developer
      </Typography>
      <Box sx={styles.imageContainer}>
        <Box
          component='img'
          sx={{ w: 200, h: 200, objectFit: 'cover', borderRadius: 50 }}
          src='./assets/Davies.jpg'
          alt='profile pic'
        />
      </Box>
      <Typography>
        Welcome to my portfolio website. I build web applications with a //
        passion for both frontend and backend development.
      </Typography>
    </Container>
  )
}

export default HomePageContent
