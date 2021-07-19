import Container from "../container";
import sectionstyles from "./sections.module.css";
import Button from "../button";
import {css} from "@emotion/react";

export default function Contact() {
    return (
        <div className={sectionstyles.center} id={"contact"}>
            <Container>
                <h2 css={css`text-align: center`}>Contact me</h2>
                <p>If you have any questions about me or my projects feel free to contact me. You can also check out
                    my <a href={"Resume_Charteros.pdf"} target={"_blank"} rel="noreferrer"><b>Resume</b></a> to find about more about me. I am open to conversetions and eager to talk about
                    new opportunities. </p>
                <Button to={"https://www.linkedin.com/in/lefteris-harteros/"}>Send a message</Button>
            </Container>
        </div>
    )
}