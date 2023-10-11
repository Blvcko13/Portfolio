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
            <a href='https://drive.usercontent.google.com/download?id=1litqMvy8sZRWCaeK6ZNhbG2FazFLxpk4&export=download&authuser=0&confirm=t&uuid=1b9eba08-6acd-408c-a321-188556cc9f9d&at=APZUnTUtQZh6qlgGnlXQXGQDt4-1:1697043512928' className='downloadlink'>Download CV</a>
            </Button><br/>
            <img src={webdev} width="75%" alt='Webdeveloper' /><br/>
        </div>
    );
}

  

export default AboutMe;
