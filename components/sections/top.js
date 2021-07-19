import sectionstyles from "./sections.module.css";
import Container from "../container";
import Particles from "react-particles-js";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare, faLinkedin, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import ScrollToTop from "../scrollToTop";

export default function TopSection() {
    return (
        <div id="top" className={sectionstyles.center}>
            <Container>
                <Particles params={{
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "size": {
                            "value": 4
                        }
                    }
                }}/>
                <h2>Hello,</h2>
                <h2> I&apos;m Lefteris Harteros</h2>
                <h3>I&apos;m an MSc Graduate and a Machine Learning enthusiast</h3>

                <p>
                    I conduct research and development of projects concerning Deep Learning and Federated
                    Learning. Frequently, I develop apps with various technologies that pique my interest to
                    challenge myself and expand my knowledge.
                </p>
                <div>
                    <a href={"https://github.com/harteros"} target={"_blank"} rel="noreferrer"><FontAwesomeIcon
                        icon={faGithubSquare} size={"2x"} className={sectionstyles.spacing}/></a>
                    <a href={"https://www.linkedin.com/in/lefteris-harteros/"} target={"_blank"}
                       rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size={"2x"} className={sectionstyles.spacing}/></a>
                    <a href={"https://twitter.com/lharteros"} target={"_blank"} rel="noreferrer"><FontAwesomeIcon
                        icon={faTwitterSquare} size={"2x"} className={sectionstyles.spacing}/></a>
                </div>
            </Container>
            <ScrollToTop/>
        </div>
    )
}