/* eslint-disable */
import React from 'react';
import "./About.css";
import photoImg from "../../assets/mail.png";
const About = () => {
    return (
        <div>
            <h1 className="header">About Us:</h1>
            <div className="textHeader">
                <div className="textContent">
                    <h3>WHO WE ARE</h3>
                    <p>
                        We are a group of students currently studying Computer Science at
                        'Faculty of Computer Science and Engineering - Skopje'. Our mission
                        is to build a project including the Map.
                    </p>
                    <h3>THE PURPOSE OF THE SYSTEM</h3>
                    <p>
                        As i said earlier the system should work with the Google Map. The
                        map should show all the stores in North Macedonia. Also the stores
                        could be rated, could be commented and also users can add new
                        stores. The stores will be displayed like a card and they can be
                        found by searching in the searchbar or by using the filters. Hope
                        you enjoy it :)
                    </p>
                </div>
            </div>
            <h1 className="header">Contact us via:</h1>
            <div className="textHeader">
                <div className="textContent">
                    <div className="textRow">
                        <img src={photoImg} alt="Mail" style={{ width: "60px" }} />
                        <p>techtitansdians@gmail.com</p>
                    </div>
                </div>
            </div>
            <div class="banner">
                <div class="banner__content">© сите права се задржани</div>
            </div>
        </div>
    )
}

export default About
