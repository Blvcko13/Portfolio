import React from 'react';
import webdev from './img/webdev.png';
import Button from "react-bootstrap/Button";
import "./App.css";

function AboutMe(){

    return (
        <div >
            <h1 className='header'> &#128075;Hi I am <br/> Jakhonkulov Javokhirjon</h1>
            <h2 className='header'>Frontend developer</h2>
            <Button variant='outline-success'> 
            <a href='https://drive.usercontent.google.com/download?id=1j_YToxrkPnMODtfu2N_hBnKmjlDGvUqu&export=download&authuser=0&confirm=t&uuid=1cbd04d0-bbe8-4ea4-848f-b5693e4534c8&at=APZUnTW6JKk-1QAypNjEa884x3Ek:1696386484889' className='downloadlink'>Download CV</a>
            </Button><br/>
            <img src={webdev} alt='Webdeveloper' /><br/>
        </div>
    );
}

  

export default AboutMe;
