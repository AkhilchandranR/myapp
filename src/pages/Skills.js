import React from 'react';
import './Skills.css';
import Skill from '../components/Skill';
import html from '../images/html.png';
import css from '../images/css.png';
import js from '../images/javascript.png';
import ts from '../images/typescript.png';
import mocha from '../images/moch.png';
import physics from '../images/physics.png';
import next from '../images/next-js.svg';
import jest from '../images/jest.png';
import python from '../images/python.png';
import django from '../images/django.png';
import flask from '../images/flask.png';
import firebase from '../images/firebase.png';


function Skills() {
    return (
        <div className="skills">
            <h1>SKILLS</h1>
            <div className="skills__row1">
                <Skill skillImage={html} skillName="HTML"/>
                <Skill skillImage={css} skillName="CSS"/>
                <Skill skillImage={js} skillName="Javascript"/>
                <Skill skillImage={ts} skillName="Typescript"/>
            </div>
            <div className="skills__row1">
                <Skill skillImage={physics} skillName="React js"/>
                <Skill skillImage={next} skillName="Next js"/>
                <Skill skillImage={mocha} skillName="Mocha"/>
                <Skill skillImage={jest} skillName="Jest"/>
            </div>
            <div className="skills__row1">
                <Skill skillImage={python} skillName="Python"/>
                <Skill skillImage={django} skillName="Django"/>
                <Skill skillImage={flask} skillName="Flask"/>
                <Skill skillImage={firebase} skillName="Firebase"/>
            </div>
        </div>
    )
}

export default Skills
