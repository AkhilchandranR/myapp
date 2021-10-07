import React from 'react'
import Project from '../components/Project';
import './Projects.css';
import mark from '../images/mark.png';
import tesla from '../images/tesla.png';
import whatsapp from '../images/whatsapp.png';


function Projects() {
    return (
        <div className="projects">
            <h1>DEMO PROJECTS</h1>
            <div className="projects__left">
                <Project 
                projectName="Mark's Portfolio"
                projectImage={mark}/>
            </div>
            <div className="projects__right">
            <Project 
                projectName="Covid-19 Tracker"
                projectImage={mark}/>
            </div>
            <div className="projects__left">
            <Project 
                projectName="Tesla Clone"
                projectImage={tesla}/>
            </div>
            <div className="projects__right">
            <Project 
                projectName="Whatsapp Clone"
                projectImage={whatsapp}/>
            </div>           
        </div>
    )
}

export default Projects
