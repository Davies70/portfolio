import Cover1 from './images/ThrillerFiend2.png';
import Cover2 from './images/cheapbites1.png';
import Cover4 from './images/shopapo.png';
import CoverSecure from './images/secure-file-processing.png';

export const projects = [
  {
    node: {
      frontmatter: {
        title: 'Secure File Processing Pipeline',
        external: 'https://secure-file-processing-ui.vercel.app/',
        github: 'https://github.com/Davies70/secure-file-upload',
        tech: [
          'Next.js',
          'TypeScript',
          'Tailwind CSS',
          'AWS Lambda',
          'API Gateway',
          'S3',
          'DynamoDB',
          'Serverless Framework',
          'IndexedDB',
          'CI/CD',
        ],
        cover: CoverSecure,
        cta: 'View Dashboard',
      },
      html: `
        <p>
          Secure File Processing Pipeline is a full-stack, serverless application for uploading,
          optimizing, and managing image and PDF files. It combines a modern Next.js dashboard
          with a scalable AWS backend built using Lambda, S3, and DynamoDB.
        </p>

        <p>
          Files are uploaded securely via presigned S3 URLs, automatically processed through
          an event-driven pipeline, and optimized using Sharp (WebP conversion) and PDF compression.
          Processing status and compression metrics are tracked in DynamoDB and exposed through
          RESTful APIs.
        </p>

        <p>
          The frontend provides drag-and-drop uploads, real-time progress tracking, asynchronous
          status polling, dark/light theming, and persistent before/after image comparison using
          IndexedDB to eliminate presigned URL expiry issues.
        </p>

        <p>
          <strong>Repos:</strong><br/>
          Backend API – 
          <a href="https://github.com/Davies70/secure-file-upload" target="_blank">
            github.com/Davies70/secure-file-upload
          </a><br/>
          Frontend UI – 
          <a href="https://github.com/Davies70/secure-file-processing-ui" target="_blank">
            github.com/Davies70/secure-file-processing-ui
          </a>
        </p>
      `,
    },
  },
  {
    frontmatter: {
      github: 'https://github.com/Davies70/sumbot',
      external: 'https://sumbot.netlify.app',
      title: 'Sumbot — AI Text Summarizer',
      tech: ['HTML', 'CSS', 'JavaScript'],
    },
    html: `
      <p>
        Sumbot is a lightweight, browser-based text summarization tool that extracts key sentences
        and concepts from long-form text. It implements multiple summarization strategies,
        including frequency-based scoring, keyword extraction, and a graph-based PageRank approach.
      </p>
    `,
  },
  {
    node: {
      frontmatter: {
        external: 'https://shopapocalypse.netlify.app/',
        title: 'ShopApocalypse',
        tech: ['React', 'TypeScript', 'Framer Motion', 'GSAP'],
        github: 'https://github.com/Davies70/shopapocalypse',
        cover: Cover4,
        cta: '',
      },
      html: `
      <p>
        ShopApocalypse is a parody eCommerce experience for doomsday and survival gear.
        The project emphasizes advanced UI animation and interaction design using
        Framer Motion and GSAP.
      </p>
      <p>
        Built with React and TypeScript, it showcases complex animation timelines,
        transitions, and immersive visual storytelling.
      </p>
    `,
    },
  },

  {
    frontmatter: {
      github: 'https://github.com/Davies70/inventory-manager',
      title: 'InventoryManager API',
      tech: [
        'AWS Lambda',
        'API Gateway',
        'DynamoDB',
        'Serverless Framework',
        'GitHub Actions',
      ],
    },
    html: `
      <p>
        InventoryManager is a serverless REST API for managing inventory records at scale.
        Built on AWS Lambda and DynamoDB, it supports full CRUD operations, secure IAM-based access,
        and automated deployments via GitHub Actions using infrastructure as code.
      </p>
    `,
  },
];

export const featuredProjects = [
  {
    node: {
      frontmatter: {
        external: 'https://cheapbites.vercel.app',
        title: 'CheapBites',
        tech: ['Next.js', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Leaflet'],
        github: 'https://github.com/Davies70/cheapbites',
        cover: Cover2,
        cta: '',
      },
      html: `
      <p>
        CheapBites helps users discover affordable restaurants nearby using geolocation and
        the Foursquare Places API. The app features an interactive Leaflet map, dietary-based
        filtering, reviews, and curated food recommendations.
      </p>
      <p>
        Built with Next.js and TypeScript, the platform focuses on performance, responsive design,
        and secure authentication via NextAuth.
      </p>
    `,
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
      html: `
      <p>
        ThrillerFiend is a discovery and tracking platform for thriller and crime fiction fans.
        It integrates the Google Books and New York Times APIs to surface trending titles,
        author information, and curated recommendations.
      </p>
      <p>
        Users can rate books, save personal notes, and follow a reading blog, with all data
        persisted using Firebase and Firestore.
      </p>
    `,
    },
  },
];
