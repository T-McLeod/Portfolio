import React from 'react';
import './Home.css';

const Home: React.FC = () => {
  return (
    <div className="home">
      <header className="home-header">
        <h1>Tanner McLeod</h1>
        <p>Failure is simply the opportunity to begin again, this time more intelligently.</p>
      </header>
      <section className="about-me">
        <h2>About Me</h2>
        <img src="../assets/react.svg" alt="Tanner's Headshot" className="headshot" />
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
        <h2>Projects</h2>
        <p>Check out some of my projects below:</p>
        {/* Add project links or descriptions here */}
      </section>
      <section className="contact">
        <h2>Contact Me</h2>
        <p>If you'd like to get in touch, feel free to reach out!</p>
        {/* Add contact form or email link here */}
      </section>
    </div>
  );
};

export default Home;