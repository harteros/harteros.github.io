import Container from "../layout/Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare, faLinkedin, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import Particles from "react-tsparticles";
import ScrollToTop from "../scrollToTop/ScrollToTop";

export default function TopSection() {
    return (
        <div id="top">
            <Container className="full-height center">
                <div>
                    <Particles
                        id="tsparticles"
                        options={{
                            particles: {
                                links: {
                                    distance: 150,
                                    enable: true,
                                    opacity: 0.5,
                                    width: 1,
                                },

                                move: {
                                    direction: "none",
                                    enable: true,
                                    outMode: "bounce",
                                    random: false,
                                    speed: 4,
                                    straight: false,
                                },
                                number: {
                                    density: {
                                        enable: true,
                                        area: 1000,
                                    },
                                    value: 50,
                                },
                                opacity: {
                                    value: 0.5,
                                }
                            }
                        }}
                    />
                    <h2>Hello,<br/> I&apos;m Lefteris Charteros</h2>
                    <h3>I&apos;m a Data Scientist and a Machine Learning enthusiast</h3>
                    <p>
                        I conduct research and development of projects concerning Deep Learning and Federated
                        Learning. Frequently, I develop apps with various technologies that pique my interest to
                        challenge myself and expand my knowledge.
                    </p>
                    <div>
                        <a href={"https://github.com/harteros"} target={"_blank"} rel="noreferrer"><FontAwesomeIcon
                            icon={faGithubSquare} size={"2x"} className="horizontal-spacing"/></a>
                        <a href={"https://www.linkedin.com/in/lefteris-charteros/"} target={"_blank"}
                           rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size={"2x"}
                                                             className="horizontal-spacing"/></a>
                        <a href={"https://twitter.com/lharteros"} target={"_blank"} rel="noreferrer"><FontAwesomeIcon
                            icon={faTwitterSquare} size={"2x"} className="horizontal-spacing"/></a>
                    </div>
                </div>
            </Container>
            <ScrollToTop/>
        </div>
    )
}
