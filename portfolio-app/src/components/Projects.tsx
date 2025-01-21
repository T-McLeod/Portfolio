import React from 'react';
import Project from './Project';
import './Projects.css';

const Projects: React.FC = () => {
  const projectList = [
    {
      title: 'Project One',
      description: 'This is a description of project one.',
      link: 'https://example.com/project-one'
    },
    {
      title: 'Project Two',
      description: 'This is a description of project two.',
      link: 'https://example.com/project-two'
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