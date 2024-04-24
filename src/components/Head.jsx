import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'
import config from '../config'
import appleIcon from '../images/favicons/apple-touch-icon.png'
import manifest from '../images/favicons/site.webmanifest'
import favicon16x16 from '../images/favicons/favicon-16x16.png'
import favicon32x32 from '../images/favicons/favicon-32x32.png'

const Head = ({ title, description, image }) => {
  const pathname = window.location.pathname

  const site = {
    defaultTitle: 'Davies Ajayi',
    defaultDescription: `I’m a software developer specializing in creating products that I would
    actually use. Currently, I’m focused on fullstack applications with
    seamless user experience.`,
    siteUrl: 'https://daviesajayi.netlify.app/',
  }
  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    
    twitterUsername,
  } = site

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image}`,
    url: `${siteUrl}${pathname}`,
  }

  return (
    <Helmet
      title={title}
      defaultTitle={seo.title}
      titleTemplate={`%s | ${defaultTitle}`}
    >
      <html lang='en' />

      <meta name='description' content={seo.description} />
      <meta name='image' content={seo.image} />

      <meta property='og:title' content={seo.title} />
      <meta property='og:description' content={seo.description} />
      <meta property='og:image' content={seo.image} />
      <meta property='og:url' content={seo.url} />
      <meta property='og:type' content='website' />

      <meta name='twitter:card' content='summary_large_image' />
      <meta name='twitter:creator' content={twitterUsername} />
      <meta name='twitter:title' content={seo.title} />
      <meta name='twitter:description' content={seo.description} />
      <meta name='twitter:image' content={seo.image} />
      
      <meta name='theme-color' content={config.navyColor} /> 
      <link rel='apple-touch-icon' sizes='180x180' href={appleIcon} />
      <link rel='icon' type='image/png' sizes='32x32' href={favicon32x32} />
      <link rel='icon' type='image/png' sizes='16x16' href={favicon16x16} />
      <link rel='manifest' href={manifest} />
      <meta
        name='google-site-verification'
        content='DCl7VAf9tcz6eD9gb67NfkNnJ1PKRNcg8qQiwpbx9Lk'
      />
    </Helmet>
  )
}

export default Head

Head.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  image: PropTypes.string,
}

Head.defaultProps = {
  title: null,
  description: null,
  image: null,
}
