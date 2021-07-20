import Container from "./Container";
import styles from "./Footer.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare, faLinkedin, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <div className={styles.footer}>
            <Container className="center">
                    <a href={"https://github.com/harteros"} target={"_blank"} rel="noreferrer"><FontAwesomeIcon
                        icon={faGithubSquare} size={"lg"} className="horizontal-spacing"/></a>
                    <a href={"https://www.linkedin.com/in/lefteris-harteros/"} target={"_blank"}
                       rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size={"lg"} className="horizontal-spacing"/></a>
                    <a href={"https://twitter.com/lharteros"} target={"_blank"} rel="noreferrer"><FontAwesomeIcon
                        icon={faTwitterSquare} size={"lg"} className="horizontal-spacing"/></a>
                    <div className={styles.credentials}>Created by Lefteris Harteros</div>
            </Container>
        </div>
    )
}