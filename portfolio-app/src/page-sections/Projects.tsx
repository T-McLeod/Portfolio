import React, { useEffect, useState } from 'react';
import Project from '../components/Project';
import './Projects.css';

interface ProjectData {
  title: string;
  description: string;
  link: string;
}

const Projects: React.FC = () => {
  const [projects, setProjects] = useState<ProjectData[]>([]);
  const BASE_URL = 'https://portfolio-3rm0.onrender.com/api/'

  useEffect(() => {
    fetch(`${BASE_URL}/projects/`)
      .then(response => response.json())
      .then(data => setProjects(data))
      .catch(error => console.error('Error fetching projects:', error));
  }, [BASE_URL]);

  return (
    <div className="projects">
      <h2>Projects</h2>
      {projects.map((project, index) => (
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