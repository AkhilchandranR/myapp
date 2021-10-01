import React from 'react'
import Project from '../components/Project';
import './Projects.css';

function Projects() {
    return (
        <div className="projects">
            <h1>DEMO PROJECTS</h1>
            <div className="projects__left">
                <Project/>
            </div>
            <div className="projects__right">
                <Project/>
            </div>
            <div className="projects__left">
                <Project/>
            </div>
            <div className="projects__right">
                <Project/>
            </div>           
        </div>
    )
}

export default Projects
