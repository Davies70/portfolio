import Cover1 from './images/ThrillerFiend2.png';
import Cover2 from './images/cheapbites1.png';
import Cover4 from './images/shopapo.png';

export const projects = [
  {
    frontmatter: {
      github: 'https://github.com/Davies70/sumbot',
      external: 'https://sumbot.netlify.app',
      title: 'Sumbot: AI Text Summarizer',
      tech: ['HTML', 'CSS', 'JavaScript'],
    },
    html: '<p>A lightweight browser-based text summarization tool that extracts the most important sentences and keywords from a given text. It uses multiple summarization algorithms including frequency-based, simple, keyword-based, and graph-based (PageRank) methods.</p>',
  },

  {
    frontmatter: {
      github: 'https://github.com/Davies70/z-Commerce',
      title: 'Z-Commerce',
      tech: ['React', 'Redux', 'Strapi', 'Stripe'],
    },
    html: '<p>Z-Commerce is a sleek fashion e-commerce site built with React and Strapi. Users can browse collections, manage carts, and securely checkout using Stripe. Styled with Sass and fully responsive.</p>',
  },
];

export const featuredProjects = [
  {
    node: {
      frontmatter: {
        external: 'https://cheapbites.vercel.app',
        title: 'CheapBites',
        tech: ['NextJS', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Leaflet'],
        github: 'https://github.com/Davies70/cheapbites',
        cover: Cover2,
        cta: '',
      },
      html: '<p>CheapBites helps users find affordable restaurants nearby using FourSquare and the Geolocation API. It features a dynamic Leaflet map, dietary-based suggestions, reviews, and a food quiz. Built with Next.js and secured via NextAuth.</p>',
    },
  },

  {
    node: {
      frontmatter: {
        external: 'https://thrillerfiend.netlify.app',
        title: 'ThrillerFiend',
        tech: [
          'React',
          'Material UI',
          'Firebase',
          'Firestore',
          'Google Books API',
          'New York Times API',
        ],
        github: 'https://github.com/Davies70/ThrillerFiend',
        cover: Cover1,
        cta: '',
      },
      html: '<p>ThrillerFiend is a web app for thriller fans to discover and track books. It integrates Google Books and NYT APIs for discovery, offers personal notes, ratings, author info, and a reading blog. Built with Firebase and React.</p>',
    },
  },

  {
    node: {
      frontmatter: {
        external: 'https://shopapocalypse.netlify.app/',
        title: 'ShopApocalypse',
        tech: ['React', 'TypeScript', 'Framer Motion', 'gsap'],
        github: 'https://github.com/Davies70/shopapocalypse',
        cover: Cover4,
        cta: '',
      },
      html: '<p>ShopApocalypse is a parody eCommerce site for doomsday gear and survival kits. Featuring animated UI with GSAP and Framer Motion, it delivers a quirky, immersive user experience using React and TypeScript.</p>',
    },
  },
];
