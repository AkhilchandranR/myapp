import React from 'react';
import './Skills.css';
import Skill from '../components/Skill';

function Skills() {
    return (
        <div className="skills">
            <h1>SKILLS</h1>
            <div className="skills__row1">
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
            </div>
            <div className="skills__row1">
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
            </div>
            <div className="skills__row1">
                <Skill/>
                <Skill/>
                <Skill/>
                <Skill/>
            </div>
        </div>
    )
}

export default Skills
