import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet-async'

const Head = ({ title, description, image }) => {
  const pathname = window.location.pathname

  const site = {
    defaultTitle: 'My Portfolio',
    defaultDescription: 'Welcome to my portfolio',
    siteUrl: 'https://www.example.com',
    defaultImage: '/images/default-image.jpg',
    twitterUsername: '@mytwitterhandle',
  }
  const {
    defaultTitle,
    defaultDescription,
    siteUrl,
    defaultImage,
    twitterUsername,
  } = site

  const seo = {
    title: title || defaultTitle,
    description: description || defaultDescription,
    image: `${siteUrl}${image || defaultImage}`,
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
      <link
        rel='icon'
        href='/favicon-32x32.png?v=dedd91ab2778735e31d0a7ccbb422fb7'
        type='image/png'
      ></link>

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
