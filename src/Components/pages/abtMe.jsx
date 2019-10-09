import React from "react";
import { SocialIcon } from 'react-social-icons';
import ReactDOM from 'react-dom';
import Logo from "./images/0.jpg"


const AbtMe = () => {
    return (
        <div>
            <h2>Hi! thank you for visiting</h2>
            <a href="https://www.linkedin.com/in/frank-amiri-55744316b/">
                <img src={Logo} alt="smiley face"/>
            </a>
            <SocialIcon url="http://twitter.com/jaketrent" />
            <SocialIcon url="https://www.linkedin.com/in/frank-amiri-55744316b/" />
            <SocialIcon url="https://github.com/frfar" />
        </div>
    );
};

export default AbtMe;