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
            <a href='https://drive.usercontent.google.com/download?id=1nmjJiycnVOc2zTmzjFeBCaavTFnqTYkK&export=download&authuser=0&confirm=t&uuid=36c8b7cc-8863-474b-b9ed-44082dad1d62&at=APZUnTVcouxUr3l8mtKvDGEEMlYf:1696953877733' className='downloadlink'>Download CV</a>
            </Button><br/>
            <img src={webdev} width="75%" alt='Webdeveloper' /><br/>
        </div>
    );
}

  

export default AboutMe;
