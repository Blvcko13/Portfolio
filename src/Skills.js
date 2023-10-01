import React from 'react';
import html from './img/html.png'
import css from './img/css.png';
import javascript from './img/javascript.svg';
import reactjs from './img/reactjs.png';
import sass from './img/sass.png';
import bootstrap from './img/bootstrap.png';
import mysql from './img/MySQL.png';
import "./App.css";

function Skills(){

    return (
        <div >
            <h1>Skills</h1>
            <div className='logos'>
                <div id='skills'>
                    <img src={html} alt='html logo'  /> <hr/>
                    <h2>HTML</h2>
                </div>
                <div id='skills'>
                    <img src={css} alt='css logo'  /> <hr/>
                    <h2>CSS</h2>
                </div>
                <div id='skills'>
                    <img src={javascript} alt='javascript logo'  /> <hr/>
                    <h2>Javascript</h2>
                </div>
                <div id='skills' >
                    <img src={reactjs} alt='reactjs logo' /> <hr/>
                    <h2>Reactjs</h2>
                </div>
                <div id='skills' >
                    <img src={sass} alt='sass logo' /> <hr/>
                    <h2>Sass</h2>
                </div>
                <div id='skills' >
                    <img src={bootstrap} alt='bootstrap logo' /> <hr/>
                    <h2>Bootstrap</h2>
                </div>
                <div id='skills' >
                    <img src={mysql} alt='mysql logo' /> <hr/>
                    <h2>MySQL</h2>
                </div>
            </div>
        </div>
    );
}

  

export default Skills;