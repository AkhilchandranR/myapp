import React from 'react'
import Project from '../components/Project';
import './Projects.css';
import mark from '../images/mark.png';
import tesla from '../images/tesla.png';
import whatsapp from '../images/whatsapp.png';
import Bounce from 'react-reveal/Bounce';


function Projects() {
    return (
        <div className="projects">
            <h1>DEMO PROJECTS</h1>
            <div className="projects__left">
                <Bounce left>
                    <Project 
                    projectName="Mark's Portfolio"
                    projectImage={mark}/>
                </Bounce>
            </div>
            <div className="projects__right">
                <Bounce right>
                    <Project 
                        projectName="Covid-19 Tracker"
                        projectImage={mark}/>
                </Bounce>
            </div>
            <div className="projects__left">
                <Bounce left>
                    <Project 
                        projectName="Tesla Clone"
                        projectImage={tesla}/>
                </Bounce>
            </div>
            <div className="projects__right">
                <Bounce right>
                    <Project 
                        projectName="Whatsapp Clone"
                        projectImage={whatsapp}/>
                </Bounce>
            </div>           
        </div>
    )
}

export default Projects
