import Container from "./container";
import styles from "./footer.module.css"
import sectionstyles from "./sections/sections.module.css"
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faGithubSquare, faLinkedin, faTwitterSquare} from "@fortawesome/free-brands-svg-icons";


export default function Footer() {
    return (
        <div className={styles.footer}>
            <Container>
                <div className={styles.footer__centered}>
                    <a href={"https://github.com/harteros"} target={"_blank"} rel="noreferrer"><FontAwesomeIcon
                        icon={faGithubSquare} size={"lg"} className={sectionstyles.spacing}/></a>
                    <a href={"https://www.linkedin.com/in/lefteris-harteros/"} target={"_blank"}
                       rel="noreferrer"><FontAwesomeIcon icon={faLinkedin} size={"lg"} className={sectionstyles.spacing}/></a>
                    <a href={"https://twitter.com/lharteros"} target={"_blank"} rel="noreferrer"><FontAwesomeIcon
                        icon={faTwitterSquare} size={"lg"} className={sectionstyles.spacing}/></a>
                    <div className={styles.credentials}>Created by Lefteris Harteros</div>
                </div>

            </Container>
        </div>
    )
}