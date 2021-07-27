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
                    data.categories.map((projects)=>(
                        <Projects key={projects.id} projects={projects} title={projects.title}/>
                    ))
                }
                </>
            </div>
        </div>
    )
}

export default Portfolio
