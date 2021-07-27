import React from 'react'
import Projects from '../projects/Projects'
import './Portfolio.css'

function Portfolio({data}) {
    return (
      <div className="portfolio" id="portfolio">
        <div className="portfolio-wrapper">
          <div className="title">
            <h1>Projects</h1>
          </div>
          <>
            {
              <Projects
                key={data.categories[0].id}
                projects={data.categories[0]}
                title={data.categories[0].title}
              />
            }
            {
              <Projects
                key={data.categories[1].id}
                projects={data.categories[1]}
                title={data.categories[1].title}
              />
            }
            {
              <Projects
                key={data.categories[2].id}
                projects={data.categories[2]}
                title={data.categories[2].title}
              />
            }
            {/*data.categories.map((projects) => (
              <Projects
                key={projects.id}
                projects={projects}
                title={projects.title}
              />
            ))*/}
          </>
        </div>
      </div>
    );
}

export default Portfolio
