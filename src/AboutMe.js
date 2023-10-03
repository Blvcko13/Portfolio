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
            <a href='https://drive.google.com/u/0/uc?id=16PSNmveYEhe0BuQUd6q4n-4Mu1fedQxq&export=download' className='downloadlink'>Download CV</a>
            </Button><br/>
            <img src={webdev} alt='Webdeveloper' /><br/>
        </div>
    );
}

  

export default AboutMe;
