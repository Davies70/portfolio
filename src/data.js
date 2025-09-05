import Cover1 from './images/ThrillerFiend2.png';
import Cover2 from './images/cheapbites1.png';
import Cover4 from './images/shopapo.png';

export const projects = [
  {
    frontmatter: {
      github: 'https://github.com/Davies70/q_Books/',
      external: 'https://fanciful-pastelito-176d7b.netlify.app/',
      title: 'q_Books',
      tech: ['HTML', 'CSS', 'JavaScript'],
    },
    html: '<p>q_Books is a lightweight web app that lets users search books in real-time using the Google Books API. Search by title, author, or genre. It also includes a toggleable day/night reading mode for user comfort.</p>',
  },

  {
    frontmatter: {
      github: 'https://github.com/Davies70/patientor_backend',
      external: 'https://patientorbackend-production.up.railway.app',
      title: 'Patientor',
      tech: ['TypeScript', 'React', 'Node.js', 'Express', 'Material UI'],
    },
    html: '<p>Patientor is a modern healthcare management platform. It stores patient records securely, displays health summaries, and supports medical history tracking—streamlining care processes for clinics.</p>',
  },

  {
    frontmatter: {
      github: 'https://github.com/Davies70/rate-repository-app/',
      title: 'Rate My Repository App',
      tech: ['React Native'],
    },
    html: `<p>RateMyRepository is a React Native app for rating and reviewing GitHub repositories. It fetches repo data using GitHub’s API and offers sorting, review analytics, and a polished interface for feedback-driven collaboration.</p>`,
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
  // {
  //   node: {
  //     frontmatter: {
  //       external: 'https://cheapbites.vercel.app',
  //       title: 'CheapBites',
  //       tech: [
  //         'NextJS',
  //         'TypeScript',
  //         'Tailwind CSS',
  //         'MongoDB',
  //         'FourSquare API',
  //         'Geolocation API',
  //         'Leaflet',
  //       ],
  //       github: 'https://github.com/Davies70/cheapbites',
  //       cover: Cover2,
  //       cta: '',
  //     },
  //     html: '<p>CheapBites helps users find affordable restaurants nearby using FourSquare and the Geolocation API. It features a dynamic Leaflet map, dietary-based suggestions, reviews, and a food quiz. Built with Next.js and secured via NextAuth.</p>',
  //   },
  // },

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
