import Cover1 from './images/ThrillerFiend2.png';
import Cover2 from './images/cheapbites1.png';
import Cover4 from './images/portfolio.png';
export const projects = [
  {
    frontmatter: {
      github: 'https://github.com/Davies70/q_Books/',
      external: 'https://fanciful-pastelito-176d7b.netlify.app/',
      title: 'q_Books',
      tech: ['HTML', 'CSS', 'JavaScript'],
    },
    html: '<p>The web app comes with a search feature that allows you to search books on Google Books in real time. Search can be performed using book titles, author names, genre. The web app also includes a day and night mode feature.</p>',
  },

  {
    frontmatter: {
      github: 'https://github.com/Davies70/patientor_backend',
      external: 'https://patientorbackend-production.up.railway.app',
      title: 'Patentor',
      tech: ['TypeScript', 'React', 'Node.js', 'Express', 'Material UI'],
    },
    html: '<p>Meet Patientor: A Modern Healthcare Solution.<br><br>Patientor simplifies healthcare management. It efficiently stores patient data, offers instant health statuses, and tracks medical checks, improving patient care workflows.</p>',
  },

  {
    frontmatter: {
      github: 'https://github.com/Davies70/rate-repository-app/',
      title: 'Rate My Repository App',
      tech: ['ReactNative'],
    },
    html: `<p>RateMyRepository is a React Native app designed to simplify feedback collection for GitHub repositories. With a sleek and intuitive interface, users can explore repositories, leave ratings, and provide reviews to help developers improve their projects. The app integrates with the GitHub API to fetch repository details and offers features like sorting by ratings, managing favorite repositories, and viewing detailed analytics for repository feedback. Whether you're a developer seeking constructive input or a contributor looking to share your insights, RateMyRepository streamlines the collaboration process in the open-source community.</p>`,
  },

  {
    frontmatter: {
      github: 'https://github.com/Davies70/z-Commerce',
      title: 'Z-Commerce',
      tech: ['Reac', 'Redux', 'Strapi', 'Stripe'],
    },
    html: '<p>Z-Commerce is a modern fashion e-commerce website built using React, Redux, Sass, Strapi, and Stripe. It allows users to browse and purchase the latest fashion items, manage their shopping cart, and complete transactions securely using Stripe payment processing.</p>',
  },
];

export const featuredProjects = [
  {
    node: {
      frontmatter: {
        external: 'https://cheapbites.vercel.app',
        title: 'CheapBites',
        tech: [
          'NextJS',
          'TypeScript',
          'Tailwind CSS',
          'MongoDB',
          'FourSquare API',
          'Geolocation API',
          'Leaflet',
        ],
        github: 'https://github.com/Davies70/cheapbites',
        cover: Cover2,
        cta: '',
      },
      html: '<p>CheapBites is a Next.js-powered web app that helps users find affordable dining options nearby using the FourSquare and Geolocation APIs. Featuring an interactive Leaflet map, users can adjust search radius, explore reviews, save favorite spots, and receive personalized recommendations based on dietary preferences and a fun food quiz. With secure NextAuth authentication and MongoDB for data storage, CheapBites offers a seamless and tailored experience for budget-conscious food enthusiasts.</p>',
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
      html: '<p>ThrillerFiend is a React-based web app designed for thriller book enthusiasts. It allows users to discover new books through the Google Books API and stay updated on latest releases via the New York Times API. Readers can manage personal collections, rate books, add notes, and organize their reading experiences. The app also provides author information, a pop culture blog, and an advanced search feature for efficient book discovery.</p>',
    },
  },

  {
    node: {
      frontmatter: {
        external: 'https://daviesajayi.netlify.app/',
        title: 'Portfolio Website',
        tech: ['React', 'Styled Components', 'Anime.js'],
        github: 'https://github.com/Davies70/portfolio',
        cover: Cover4,
        cta: '',
      },

      html: '<p>A responsive and interactive web application developed using React for efficient component-based architecture and dynamic rendering. Styled Components ensures modular and maintainable styling, enabling consistent theming and adaptability. **Anime.js** adds smooth animations, enhancing the user experience. The site is fully responsive, offering seamless functionality and aesthetics across various devices and screen sizes.</p>',
    },
  },
];
