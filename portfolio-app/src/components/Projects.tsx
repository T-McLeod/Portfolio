import React from 'react';
import Project from './Project';
import './Projects.css';

const Projects: React.FC = () => {
  const projectList = [
    {
      title: 'Doordash Tracker',
      description: 'Track offers given by doordash (from dasher perspective) and estimate the time required to complete trip. Intended to be used to calculate the most efficient offers to accept.',
      link: 'https://github.com/T-McLeod/DoordashTracker'
    },
    {
      title: 'Chess Project',
      description: 'A Java app to play Chess locally on computer.',
      link: 'https://github.com/T-McLeod/ChessProject'
    },
    // Add more projects as needed
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      {projectList.map((project, index) => (
        <Project
          key={index}
          title={project.title}
          description={project.description}
          link={project.link}
        />
      ))}
    </div>
  );
};

export default Projects;