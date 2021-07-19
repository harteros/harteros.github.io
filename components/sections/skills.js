import Container from "../container";
import {Col, Row} from "react-bootstrap";
import sectionstyles from "./sections.module.css";
import styles from "./skills.module.css"
import {css} from "@emotion/react";

export default function Skills() {
    return (
        <div className={sectionstyles.center} id={"skills"}>
            <Container>
                    <Row css={css`justify-content: space-between;
                      align-items: center`}>
                        <Col xs={12} md={5}>
                            <h2>Skills</h2>
                            <p>Throughout my studies and career, I&apos;ve dealt mainly with Python and Java, working on a
                                variety of
                                projects in Machine Learning and Artificial Intelligence as well as on Android and
                                native
                                Java applications.
                            </p>
                            <p>Recently I became interested in web technologies and developed with Javascript, HTML and
                                CSS for creating web apps as well as websites with frameworks such as React and Angular.</p>
                        </Col>
                        <Col xs={12} md={6}>
                            <p>Java</p>
                            <div className={styles.skill__bars}>
                                <div className={styles.skills + " " + styles.java}/>
                            </div>
                            <p>Python</p>
                            <div className={styles.skill__bars}>
                                <div className={styles.skills + " " + styles.python}/>
                            </div>
                            <p>Javascript</p>
                            <div className={styles.skill__bars}>
                                <div className={styles.skills + " " + styles.js}/>
                            </div>
                            <p>HTML</p>
                            <div className={styles.skill__bars}>
                                <div className={styles.skills + " " + styles.html}/>
                            </div>
                            <p>CSS</p>
                            <div className={styles.skill__bars}>
                                <div className={styles.skills + " " + styles.css}/>
                            </div>
                        </Col>
                    </Row>
            </Container>
        </div>
    )
}