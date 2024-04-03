import React from 'react'
import '../styles/Technologies.css'

const Technologies = () => {
  return (
    <div className='technologies-page'>
      <h1 className='page-title'>Technologies</h1>

      <div className='section'>
        <h2 className='section-title'>Frontend Development</h2>
        <ul className='tech-list'>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>JavaScript</li>
          <li>React.js</li>
        </ul>
      </div>

      <div className='section'>
        <h2 className='section-title'>Backend Development</h2>
        <ul className='tech-list'>
          <li>Node.js</li>
          <li>Express.js</li>
          <li>Python</li>
          <li>Django</li>
          <li>Flask</li>
          <li>Ruby on Rails</li>
        </ul>
      </div>

      <div className='section'>
        <h2 className='section-title'>Database Technologies</h2>
        <ul className='tech-list'>
          <li>SQL (Structured Query Language)</li>
          <li>MySQL</li>
          <li>PostgreSQL</li>
          <li>MongoDB</li>
        </ul>
      </div>

      <div className='section'>
        <h2 className='section-title'>Version Control and Deployment</h2>
        <ul className='tech-list'>
          <li>Git</li>
          <li>GitHub</li>
          <li>GitLab</li>
          <li>Heroku</li>
        </ul>
      </div>

      <div className='section'>
        <h2 className='section-title'>Additional Tools and Skills</h2>
        <ul className='tech-list'>
          <li>RESTful APIs</li>
          <li>GraphQL</li>
          <li>Docker</li>
          <li>Kubernetes</li>
          <li>CI/CD</li>
        </ul>
      </div>
    </div>
  )
}

export default Technologies
