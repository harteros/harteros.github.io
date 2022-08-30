import Container from "../layout/Container";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare, faLinkedin, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";
import ScrollToTop from "../scrollToTop/ScrollToTop";
import {css} from "@emotion/react";
import styles from "./top.module.css"

export default function TopSection() {
    return (
        <div id="top">
            <Container className="full-height" css={css` display: flex;
              align-items: center;`}>
                <div>
                    {/*<Particles*/}
                    {/*    id="tsparticles"*/}
                    {/*    options={{*/}
                    {/*        particles: {*/}
                    {/*            links: {*/}
                    {/*                distance: 150,*/}
                    {/*                enable: true,*/}
                    {/*                opacity: 0.5,*/}
                    {/*                width: 1,*/}
                    {/*            },*/}

                    {/*            move: {*/}
                    {/*                direction: "none",*/}
                    {/*                enable: true,*/}
                    {/*                outMode: "bounce",*/}
                    {/*                random: false,*/}
                    {/*                speed: 4,*/}
                    {/*                straight: false,*/}
                    {/*            },*/}
                    {/*            number: {*/}
                    {/*                density: {*/}
                    {/*                    enable: true,*/}
                    {/*                    area: 1000,*/}
                    {/*                },*/}
                    {/*                value: 50,*/}
                    {/*            },*/}
                    {/*            opacity: {*/}
                    {/*                value: 0.5,*/}
                    {/*            }*/}
                    {/*        }*/}
                    {/*    }}*/}
                    {/*/>*/}
                    <h4><span className={styles.colorful}>Hello, my name is</span></h4>
                    <h1>Lefteris Charteros</h1>
                    <h1>I&apos;m a Software Engineer and a Data Scientist</h1>
                    <p style={{maxWidth: "600px"}}>
                        I love developing software using various programming languages and frameworks
                        and combining it with anything that has to do with Machine and Deep Learning to create smart
                        products and systems, cause who doesn&apos;t want a system that can do its own work.
                        I also enjoy learning new skills and best practices and applying
                        them on projects that i am working on at that time.

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
