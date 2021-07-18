import Container from "../container";
import styles from "./about.module.css"
import {css} from "@emotion/react";
import sectionstyles from "./sections.module.css";


export default function About() {
    return (
        <div className={sectionstyles.center} id="about">
            <Container>
                <h2 css={css`margin-bottom: 50px`}>About me</h2>
                <section className={styles.timeline}>
                    <div className={styles.timeline__block}>
                        <div className={styles.timeline__imgSmall}/>
                        <div className={styles.timeline__content}>
                            <h6>Athens University of Economics and Business</h6>
                            <p>Enrolled for BSc studies in Computer Science</p>
                            <h2 className={styles.timeline__date}>Oct 2015</h2>
                        </div>
                    </div>
                    <div className={styles.timeline__block}>
                        <div className={styles.timeline__imgSmall}/>
                        <div className={styles.timeline__content}>
                            <h6>Huawei Seeds for the Future</h6>
                            <p>Participated in Huawei&apos;s two week program in Beijing and Shenzhen where I
                                experienced the
                                Chinese Culture, studied Mandarin, and received ICT training</p>
                            <h2 className={styles.timeline__date}>Nov 2018</h2>
                        </div>
                    </div>
                    <div className={styles.timeline__block}>
                        <div className={styles.timeline__img}/>
                        <div className={styles.timeline__content}>
                            <h6>Athens University of Economics and Business</h6>
                            <p>Graduated and received BSc in Computer Science with GPA 8.88/10 and specialization in
                                Artificial Intelligence/Machine Learning, Databases and Knowledge Management and
                                Information Systems and Information Security</p>
                            <h2 className={styles.timeline__date}>Jul 2019</h2>
                        </div>
                    </div>
                    <div className={styles.timeline__block}>
                        <div className={styles.timeline__imgSmall}/>
                        <div className={styles.timeline__content}>
                            <h6>Athens University of Economics and Business</h6>
                            <p>Enrolled for MSc studies in Computer Science</p>
                            <h2 className={styles.timeline__date}>Oct 2019</h2>
                        </div>
                    </div>
                    <div className={styles.timeline__block}>
                        <div className={styles.timeline__img}/>
                        <div className={styles.timeline__content}>
                            <h6>Athens University of Economics and Business</h6>
                            <p>Graduated and received MSc in Computer Science with GPA 9.7/10
                                and specialization in Artificial Intelligence/Machine Learning and Information
                                Systems</p>
                            <h2 className={styles.timeline__date}>Oct 2020</h2>
                        </div>
                    </div>
                    <div className={styles.timeline__block}>
                        <div className={styles.timeline__imgSmall}/>
                        <div className={styles.timeline__content}>
                            <h6>Greek Army</h6>
                            <p>Fulfilled military obligations at the Computer Science department where I worked as a
                                Software Engineer developing the
                                lethrodou.gr web app for Rhodes Officers Club</p>
                            <h2 className={styles.timeline__date}>Aug 2021</h2>
                        </div>
                    </div>
                    <div className={styles.timeline__block}>
                        <div className={styles.timeline__img}/>
                        <div className={styles.timeline__content}>
                            <h6 css={css`font-weight: 400;
                              text-align: center;
                              margin-bottom: 0`}>Searcing for new opportunities and challenges</h6>
                            <h2 className={styles.timeline__date}>Currently</h2>
                        </div>
                    </div>
                </section>
            </Container>
        </div>
    )
}