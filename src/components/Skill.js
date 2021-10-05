import React from 'react';
import './Skill.css';

function Skill({skillName,skillImage}) {
    return (
        <div className="skill">
            <img src={skillImage} alt="skill"/>
            <p>{skillName}</p>
        </div>
    )
}

export default Skill
