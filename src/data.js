import Cover3 from './images/Patientor.png';
import Cover1 from './images/ThrillerFiend2.png';

export const projects = [
  {
    frontmatter: {
      github: 'https://github.com/project1',
      external: 'https://project1.com',
      title: 'Project 1',
      tech: ['React', 'JavaScript'],
    },
    html: '<p>This is the description for Project 1.</p>',
  },

  {
    frontmatter: {
      github: 'https://github.com/project2',
      external: 'https://project2.com',
      title: 'Project 2',
      tech: ['Vue', 'JavaScript'],
    },
    html: '<p>This is the description for Project 2.</p>',
  },

  {
    frontmatter: {
      github: 'https://github.com/project3',
      external: 'https://project3.com',
      title: 'Meet Patientor: A Modern Healthcare Solution',
      tech: ['TypeScript', 'React', 'Node.js'],
    },
    html: `<p>Powered by TypeScript, React, Node.js, Express, and Material UI, Patientor simplifies healthcare management. It efficiently stores patient data, offers instant health statuses, and tracks medical checks, improving patient care workflows. Discover Patientor for streamlined healthcare management.</p>`,
  },

  {
    frontmatter: {
      github: 'https://github.com/project4',
      external: 'https://project4.com',
      title: 'Project 4',
      tech: ['React', 'TypeScript'],
    },
    html: '<p>This is the description for Project 4.</p>',
  },

  {
    frontmatter: {
      github: 'https://github.com/project5',
      external: 'https://project5.com',
      title: 'Project 5',
      tech: ['Vue', 'TypeScript'],
    },
    html: '<p>This is the description for Project 5.</p>',
  },

  {
    frontmatter: {
      github: 'https://github.com/project6',
      external: 'https://project6.com',
      title: 'Project 6',
      tech: ['React', 'JavaScript'],
    },
    html: '<p>This is the description for Project 6.</p>',
  },

  {
    frontmatter: {
      github: 'https://github.com/project10',
      external: 'https://project10.com',
      title: 'Project 7',
      tech: ['Angular', 'TypeScript'],
    },
    html: '<p>This is the description for Project 10.</p>',
  },
  {
    frontmatter: {
      github: 'https://github.com/project10',
      external: 'https://project10.com',
      title: 'Project 8',
      tech: ['Angular', 'TypeScript'],
    },
    html: '<p>This is the description for Project 10.</p>',
  },
  {
    frontmatter: {
      github: 'https://github.com/project10',
      external: 'https://project10.com',
      title: 'Project 9',
      tech: ['Angular', 'TypeScript'],
    },
    html: '<p>This is the description for Project 10.</p>',
  },
  {
    frontmatter: {
      github: 'https://github.com/project10',
      external: 'https://project10.com',
      title: 'Project 10',
      tech: ['Angular', 'TypeScript'],
    },
    html: '<p>This is the description for Project 10.</p>',
  },
  {
    frontmatter: {
      github: 'https://github.com/project10',
      external: 'https://project10.com',
      title: 'Project 11',
      tech: ['Angular', 'TypeScript'],
    },
    html: '<p>This is the description for Project 10.</p>',
  },
  {
    frontmatter: {
      github: 'https://github.com/project10',
      external: 'https://project10.com',
      title: 'Project 12',
      tech: ['Angular', 'TypeScript'],
    },
    html: '<p>This is the description for Project 10.</p>',
  },
  {
    frontmatter: {
      github: 'https://github.com/project10',
      external: 'https://project10.com',
      title: 'Project 13',
      tech: ['Angular', 'TypeScript'],
    },
    html: '<p>This is the description for Project 10.</p>',
  },
  {
    frontmatter: {
      github: 'https://github.com/project10',
      external: 'https://project10.com',
      title: 'Project 14',
      tech: ['Angular', 'TypeScript'],
    },
    html: '<p>This is the description for Project 10.</p>',
  },
  {
    frontmatter: {
      github: 'https://github.com/project10',
      external: 'https://project10.com',
      title: 'Project 15',
      tech: ['Angular', 'TypeScript'],
    },
    html: '<p>This is the description for Project 10.</p>',
  },
  {
    frontmatter: {
      github: 'https://github.com/project10',
      external: 'https://project10.com',
      title: 'Project 16',
      tech: ['Angular', 'TypeScript'],
    },
    html: '<p>This is the description for Project 10.</p>',
  },
];

export const featuredProjects = [
  {
    node: {
      frontmatter: {
        external: 'https://thrillerfiend.netlify.app',
        title: 'ThrillerFiend',
        tech: [
          'React',
          'Material UI',
          'firebase',
          'firestore',
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
        external: 'https://example.com',
        title: 'Project 2',
        tech: ['Vue', 'Tailwind CSS'],
        github: 'https://github.com/example/project2',
        cover:
          'https://images.pexels.com/photos/20838756/pexels-photo-20838756/free-photo-of-bali-s-best-hikes.jpeg',
        cta: '',
      },
      html: '<p>This is the project description for Project 2.</p>',
    },
  },

  {
    node: {
      frontmatter: {
        external: 'https://jgxmdk-3001.csb.app/',
        title: 'Patientor',
        tech: ['TypeScript', 'React', 'Node.js'],
        github: 'https://github.com/Davies70/patientor_backend',
        cover: Cover3,
        cta: '',
      },

      html: '<p>Meet Patientor: A Modern Healthcare Solution.<br><br>Powered by TypeScript, React, Node.js, Express, and Material UI, Patientor simplifies healthcare management. It efficiently stores patient data, offers instant health statuses, and tracks medical checks, improving patient care workflows.</p>',
    },
  },
];
