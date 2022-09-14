
import React from "react";
import "../css/About.css";
import { AiOutlineMail } from "react-icons/ai";
import { ImLinkedin } from "react-icons/im";
import { BsGithub } from "react-icons/bs";
import pdf from "../files/Resume.pdf";
import { LinkBtns, GitHub, Email, LinkedIn } from "../components/HeroSection/HeroElements"; //css in HeroElements


const About = () => {

    return (

        <div className="aboutContainer" id="About">
            <div className="aboutWrapper">

                <div className="aboutTitleContainer">
                    <h3 className="aboutTitle">About</h3>
                </div>

                <div className="resume" >
                    <div className="objective">

                        <p className="pObjective">
                            Hi there! I'm Maggie Rozell, a web designer and full-stack developer with a background
                            in graphic design and business management. I enjoy problem solving in a fast paced working environment and am looking
                            forward to growing my career with an innovative company. All of my project repositories can be viewed on my github M-Rozell.
                        </p>


                        <div className="certifications">
                            <div className="txtCertifications">Certifications:</div>
                            <ul className="certList">
                                <li>Innovate Birmingham Full-Stack Web Development</li>
                                <li> Agile Education Registered Scrum Master</li>
                                <li> Agile Education Registered Product Owner</li>
                                <li> AIDT Certified Leader</li>
                                <li> Florida Atlantic University certificate in Hospitality and Tourism Management</li>
                            </ul>
                        </div>


                        <div className="education">
                            <div className="txtEducation">Education:</div>
                            <ul className="educationList">
                                <li>Innovate Birmingham: Web-Dev</li>
                                <li>UAH: BFA (Graphic Design)</li>
                                <li>FAU: Hospitality and Tourism Management</li>
                            </ul>
                        </div>

                        <LinkBtns>
                            <a href="https://github.com/M-Rozell/Final-Resume-Site" target="blank" className="portfolioLink">Portfolio</a>
                            <GitHub href="https://github.com/M-Rozell" target="_blank"><BsGithub /></GitHub>
                            <Email href="mailto: maggiemagnum@gmail.com" ><AiOutlineMail /></Email>
                            <LinkedIn href="https://www.linkedin.com/in/maggie-rozell/" target="_blank"><ImLinkedin /></LinkedIn>
                            <a href={pdf} target="blank" rel="noreferrer" className="resumeLink">Resume</a>
                        </LinkBtns>

                    </div>
                </div>
            </div>
        </div>
    )
};

export default About;