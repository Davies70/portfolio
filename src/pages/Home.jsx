import React from 'react'
import Header from '../components/Header'
import { Container } from '@mui/material'
import HomePageContent from '../components/HomePageContent'
import styles from '../styles/styles'

// .home-page {
//   min-height: 100vh;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background-color: #f5f5f5;
//   text-align: center;
// }

// .content {
//   max-width: 600px;
// }

// .heading {
//   font-size: 2.5rem;
//   font-weight: bold;
//   margin-bottom: 1rem;
//   color: #333;
// }

// .subheading {
//   font-size: 1.5rem;
//   margin-bottom: 2rem;
//   color: #666;
// }

// .image-container {
//   border-radius: 50%;
//   overflow: hidden;
//   margin-bottom: 2rem;
// }

// .profile-image {
//   width: 200px;
//   height: 200px;
//   object-fit: cover;
//   border-radius: 50%;
// }

// .description {
//   font-size: 1.1rem;
//   color: #555;
// }

// const Home = () => {
//   return (
//     <>
//       <Header />
//       <div className='home-page'>
//         <div className='content'>
//           <h1 className='heading'>Hi, I'm Davies</h1>
//           <h2 className='subheading'>Full-Stack Developer</h2>
//           <div className='image-container'>
//             <img
//               src='/your-profile-picture.jpg'
//               alt='Your Profile'
//               className='profile-image'
//             />
//           </div>
//           <p className='description'>
//             Welcome to my portfolio website. I build web applications with a
//             passion for both frontend and backend development.
//           </p>
//         </div>
//       </div>
//     </>
//   )
// }

const Home = () => {
  return (
    <Container>
      <Header />
      <HomePageContent />
    </Container>
  )
}

export default Home
