import React, { useState } from 'react'
import "./Projects.css"
import Project from '../project/Project'

function Projects({title, projects}) {
    const [seeMore, setSeeMore] = useState(false);

    const showMoreorLess = () =>{
        setSeeMore(!seeMore);
    }

    return (
      <div className="projects">
        <div className="title">
          <h2>{title}</h2>
        </div>
        {!seeMore ? (
          <div className="elements-container">
            {projects.projectslist.slice(0, 6).map((project) => {
              if (project.finished) {
                return <Project key={project.id} project={project} />;
              }

              return <></>;
            })}
          </div>
        ) : (
          <div className="elements-container">
            {
              projects.projectslist
                .map((project) => {
                  if (project.finished) {
                    return <Project key={project.id} project={project} />;
                  }

                  return <></>;
                })}
          </div>
        )}

        {projects.projectslist.length > 6 && (
          <div className="see-more">
            <button onClick={showMoreorLess}>
              {seeMore ? "See Less..." : "See More"}
            </button>
          </div>
        )}
      </div>
    );
}

export default Projects