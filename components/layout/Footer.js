import Container from "./Container";
import styles from "./Footer.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare, faLinkedin, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <div className={styles.footer}>
            <Container className="center">
                <a href={"https://github.com/harteros"} target={"_blank"} rel="noreferrer"><FontAwesomeIcon
                    icon={faGithubSquare} size={"2x"} className="horizontal-spacing"/></a>
                <a href={"https://www.linkedin.com/in/lefteris-charteros/"} target={"_blank"}
                   rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size={"2x"} className="horizontal-spacing"/></a>
                <a href={"https://twitter.com/lharteros"} target={"_blank"} rel="noreferrer"><FontAwesomeIcon
                    icon={faTwitterSquare} size={"2x"} className="horizontal-spacing"/></a>
                <div className={styles.credentials}>Designed & Built by Lefteris Charteros</div>
            </Container>
        </div>
    )
}
