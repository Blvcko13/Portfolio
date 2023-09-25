import telegram from "./img/telegram.png";
import instagram from "./img/instagram.png";
import facebook from "./img/facebook.png";
import  Button  from "react-bootstrap/Button";
import'./socialbuttons.css';
import React from 'react';


export default function SocialButtons() {
  return (
    <div >
      <Button id="button-52" className="m-2">
        <a href="https://t.me/Blvcko_13" className="link">
          <img src={telegram} alt="telegram" width="50px" className="logo" />
          <h2>@Blvcko_13</h2>
        </a>
      </Button>
      <br />
      <Button id="button-52"  className="m-2">
        <a href="https://www.instagram.com/blvcko_13" className="link">
          <img src={instagram} alt="instagram" width="50px" className="logo" />
          <h2>@Blvcko_13</h2>
        </a>
      </Button>
      <br />
      <Button id="button-52"  className="m-2">
        <a
          href="https://www.facebook.com/profile.php?id=100081034963115"
          className="link"
        >
          <img src={facebook} alt="facebook" width="50px" className="logo" />
          <h2>Javokhirjon Jakhonkulov</h2>
        </a>
      </Button>
    </div>
  );
}
