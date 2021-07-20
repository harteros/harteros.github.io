import Container from "../layout/Container";
import Button from "../button/Button";

export default function Contact() {
    return (
        <div id="contact">
            <Container className="full-height center">
                <div>
                <h2 className="text-center">Contact me</h2>
                <p>If you have any questions about me or my projects feel free to contact me. You can also check out
                    my <a href={"Resume_Charteros.pdf"} target={"_blank"} rel="noreferrer"><b>Resume</b></a> to find
                    about more about me. I am open to conversations and eager to talk about
                    new opportunities. </p>
                <Button to={"https://www.linkedin.com/in/lefteris-harteros/"}>Send a message</Button>
                </div>
            </Container>
        </div>
    )
}