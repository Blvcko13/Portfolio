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
            <a href='https://drive.usercontent.google.com/download?id=15i6yB8VFByOEXfXs8SdyCZX4rU4NfDpa&export=download&authuser=0&confirm=t&uuid=73b79abe-7e1e-4640-8faa-27e59e4623c2&at=APZUnTU2rRf2arZ01GOZDz4I51z_:1697049951992' className='downloadlink'>Download CV</a>
            </Button><br/>
            <img src={webdev} width="75%" alt='Webdeveloper' /><br/>
        </div>
    );
}

  

export default AboutMe;
