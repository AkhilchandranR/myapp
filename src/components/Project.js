import React from 'react'
import './Project.css';

function Project({ projectName,projectDescription,projectImage,projectLink }) {
    return (
        <div className="project">
            <div className="project__color"></div>
            <div className="project__description">
                <h3>{projectName}</h3>
                <p>{projectDescription}</p>
                {projectLink ?(
                    <a href={projectLink} target="_blank" rel="noreferrer">
                        <p>Demo</p>
                    </a>
                ):(
                    <p className="project__linkNotAvailable"><i>Demo not available now.</i></p>
                )}
                
            </div>
            <div className="project__image">
                <img src={projectImage} alt="project"/>
            </div>
        </div>
    )
}

export default Project