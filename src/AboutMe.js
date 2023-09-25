import React from 'react';
import webdev from './img/webdev.png';
import Button from "react-bootstrap/Button";
import useDarkMode from "./darkmode";
import "./App.css";

function AboutMe(){

    const {isDarkMode, toggleDarkMode } = useDarkMode();
    return (
        <div className={`App ${isDarkMode ? 'darkmode' : ''}`}>
            <h1>My name is <br/> Jakhonkulov Javokhirjon</h1>
            <h2>I'm a fullstack developer</h2>
            <Button variant='outline-success'>Download CV</Button><br/>
            <img src={webdev} alt='Webdeveloper' /><br/>
            <Button variant="outline-secondary" onClick={toggleDarkMode}>Dark Mode </Button> 
        </div>
    );
}

  

export default AboutMe;