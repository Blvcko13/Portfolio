import React from 'react';
import useDarkMode from "./darkmode";
import "./App.css";
import Button from 'react-bootstrap/Button';
import SocialButtons from './socialButtons';

function Contact() {

    const {isDarkMode, toggleDarkMode } = useDarkMode();
    return (
        <div className={`App ${isDarkMode ? 'darkmode' : ''}`}>
            <h1>Contacts</h1>
            <SocialButtons/>
            <br />
            <Button variant="outline-secondary" onClick={toggleDarkMode}>Dark Mode </Button> 
        </div>
    );
}

  

export default Contact;