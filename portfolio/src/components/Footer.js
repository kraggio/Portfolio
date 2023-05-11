import React from "react";
import "../css/Footer.css";
import instagram from "../images/instagram.png";
import linkedin from "../images/linkedin.png";
import twitter from "../images/twitt.png";

function Footer() {
  return (
    <footer>
      <a href="https://www.twitter.com/">
        <img src={twitter} alt="facebook logo" className="media" />
      </a>

      <a href="https://www.linkedin.com/in/k-raggio/">
        <img src={linkedin} alt="linkedin" className="media" />
      </a>

      <p>
        <a href="https://www.instagram.com">
          <img src={instagram} alt="instagram" className="media" />
        </a>
      </p>

      {/* <p>&copy; 2023 StudioPrints</p> */}
    </footer>
  );
}

export default Footer;
