import React from 'react'
import './Project.css'

function Project({project}) {

    
    return (
      <div className="project-main">
        <div
          className="project"
        >
          <div className="project-image">
            <img src={project.image} alt=""/>
          </div>
          <div className="project-info">
            <a href={project.url} target="_blank" rel="noreferrer">
              View Project
            </a>
          </div>
        </div>
        <div className="project-title">
          <a href={project.url} target="_blank" rel="noreferrer">
            {project.title}
          </a>
        </div>
      </div>
    );
}

export default Project
