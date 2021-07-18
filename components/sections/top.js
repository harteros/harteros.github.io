import styles from "./sections.module.css";
import Container from "../container";
import Particles from "react-particles-js";

export default function TopSection(){
    return(
        <div id="top"   className={styles.center}>
            <Container>
                <div>
                    <Particles params={{
                        "particles": {
                            "number": {
                                "value": 100
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
                </div>
            </Container>
        </div>
    )
}