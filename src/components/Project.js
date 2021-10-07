import React from 'react'
import './Project.css';

function Project({ projectName,projectDescription,projectImage }) {
    return (
        <div className="project">
            <div className="project__color"></div>
            <div className="project__description">
                <h3>{projectName}</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                     when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
            </div>
            <div className="project__image">
                <img src={projectImage} alt="project"/>
            </div>
        </div>
    )
}

export default Project