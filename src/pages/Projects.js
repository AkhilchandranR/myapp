import React from 'react'
import Project from '../components/Project';
import './Projects.css';
import mark from '../images/mark.png';
import covid from '../images/covid.jpeg';
import catchweight from '../images/catchweight.png';
import stanbets from '../images/stanbets.png';
import service from '../images/service.png';
import Bounce from 'react-reveal/Bounce';


function Projects() {
    return (
        <div className="projects">
            <div className='headings'>
                <h1>DEMO PROJECTS</h1>
            </div>
            <div className="projects__left">
                <Bounce left>
                    <Project 
                        projectName="Catchweight ERP"
                        projectImage={catchweight}
                        projectDescription="Official website for catchweight erp ,It manages diffrent business aspects of the entire firm. It is 
                        an all in one web based ERP solution enriched with catchweight inventory feature. Maintain your inventory in dual units of measure. Ideal product for supply chain, FMCG etc."
                         projectLink="https://catchweighterp.com/"/>
                </Bounce>
            </div>    
            <div className="projects__right">
                <Bounce right>
                    <Project 
                        projectName="Stanbets"
                        projectImage={stanbets}
                        projectDescription="This is a live betting website which i have done for an Australian startup.
                        Users can login,chat,make bets in this website,users can be muted or banned from chatting or playing in this website.
                        This is fired up with firebase at the backend."
                        projectLink="https://stanbets-f4ad4.web.app/"/>
                </Bounce>
            </div>    
            <div className="projects__left">
                <Bounce left>
                    <Project 
                    projectName="Mark's Portfolio"
                    projectImage={mark}
                    projectDescription="This is Mark's portfolio,a freelancer who wanted a portfolio website 
                    for himself.The website was portrays his life and skills to perform the task he promises to do
                    .This is a demo version of the portfolio website."
                    projectLink="https://quizzical-cori-92b385.netlify.app/"/>
                </Bounce>
            </div>
            <div className="projects__right">
                <Bounce right>
                    <Project 
                        projectName="Covid-19 Tracker"
                        projectImage={covid}
                        projectDescription="Covid 19 tracker gives the real time data of covid cases across the world.
                        You can filter according to the countries or states of your choice.
                        A graphical representation of data is available as a map and a line graph."/>
                </Bounce>
            </div>
            <div className="projects__left">
                <Bounce left>
                    <Project 
                    projectName="Service Pack AI"
                    projectImage={service}
                    projectDescription="This is a landing website for a service based web development company. This is their 
                    company main websie. This Showcases all the services they provide. Link is provided below."
                    projectLink="https://www.servicepack.ai/"/>
                </Bounce>
            </div>   
        </div>
    )
}

export default Projects
