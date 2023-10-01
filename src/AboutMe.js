import React from 'react';
import webdev from './img/webdev.png';
import Button from "react-bootstrap/Button";
import "./App.css";

function AboutMe(){

    return (
        <div >
            <h1 className='header'> Hi &#128075; I am <br/> Jakhonkulov Javokhirjon</h1>
            <h2 className='header'>I'm front end developer</h2>
            <Button variant='outline-success'>Download CV</Button><br/>
            <img src={webdev} alt='Webdeveloper' /><br/>
        </div>
    );
}

  

export default AboutMe;