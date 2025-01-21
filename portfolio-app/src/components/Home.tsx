import React from 'react';
import Projects from './Projects';
import './Home.css';
import headshot from '../assets/Tanner_McLeod_Headshot.jpg';

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="home-header">
        <img src={headshot} alt="Tanner's Headshot" className="headshot" />
        <div className="header-text">
          <h1>Tanner McLeod</h1>
          <p>Failure is simply the opportunity to begin again, this time more intelligently.</p>
        </div>
      </header>
      <section className="about-me">
        <h2>About Me</h2>
        <p>
          Hi, I'm Tanner, a passionate software engineering student with a love for developing innovative solutions. 
          I have experience in JavaScript, React, TypeScript, CSS, and Node.js. I'm always eager to learn new technologies 
          and improve my skills.
        </p>
      </section>
      <section className="skills">
        <h2>Skills</h2>
        <ul>
          <li>JavaScript</li>
          <li>React</li>
          <li>TypeScript</li>
          <li>CSS</li>
          <li>Node.js</li>
        </ul>
      </section>
      <section className="projects">
        <Projects />
      </section>
      <section className="contact">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out!</p>
      </section>
    </div>
  );
};

export default Home;