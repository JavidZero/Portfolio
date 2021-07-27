import React from 'react'
import './Resume.css'

function Resume({data}) {
    return (
      <div className="resume" id="resume">
        <div className="resume-inner">
          <div className="title">
            <h1>Resume</h1>
          </div>
          {/* Education */}
          <div className="resume-groupContainer">
            <h3>Education</h3>
            <div className="resume-itemContainer">
              {data.education.map((educationItem) => (
                <div key={educationItem.id} className="resume-item">
                  <h2>{educationItem.school}</h2>
                  <p className="position">
                    {educationItem.degree}
                    {" - "}
                    <span>{educationItem.graduated}</span>
                  </p>
                  <p className="description">{educationItem.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Work */}
          <div className="resume-groupContainer">
            <h3>Work</h3>
            <div className="resume-itemContainer">
              {data.work.map((workItem) => (
                <div key={workItem.id} className="resume-item">
                  <h2>{workItem.company}</h2>
                  <p className="position">
                    {workItem.title}
                    {" - "}
                    <span>{workItem.years}</span>
                  </p>
                  <p className="description">{workItem.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="resume-groupContainer">
            <h3>Skills</h3>
            <div className="resume-itemContainer">
              {data.skills.map((skillItem, i) => (
                <ul className="resume-list" key={i}>
                  <li>
                    <p>{skillItem.name}</p>
                    <div>
                      <span style={{ width: skillItem.level }}></span>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="resume-groupContainer">
            <h3>Languages</h3>
            <div className="resume-itemContainer">
              {data.languages.map((languageItem, i) => (
                <ul className="resume-list" key={i}>
                  <li>
                    <p>{languageItem.name}</p>
                    <div>
                      <span style={{ width: languageItem.level }}></span>
                    </div>
                  </li>
                </ul>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
}

export default Resume
