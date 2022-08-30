import Container from "../layout/Container";
import {Col, Row} from "react-bootstrap";
import Card from "../card/Card";
import Button from "../button/Button";

export default function Portfolio() {
    return (
        <div id="portfolio">
            <Container className="full-height center">
                <div>
                <h2>Portfolio</h2>
                <p className="vertical-spacing">A few of my projects that are worth mentioning. You can find more on
                    my <b><a href={"https://github.com/harteros"} target={"_blank"} rel="noreferrer">Github</a></b> page
                </p>
                <Row className="center">
                    <Col sm={12} md={6} lg={4}>
                        <Card to={"https://ieeexplore.ieee.org/abstract/document/9145219"}>
                            <Card.Header>Mobile App for Breast Image Analysis</Card.Header>
                            <Card.Body>An image recognition and analysis app for patients that have undergone breast
                                cancer surgery</Card.Body>
                            <Card.Credentials>
                                <Card.Block language={"python"}>Python</Card.Block>
                                <Card.Block language={"java"}>Java</Card.Block>
                            </Card.Credentials>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card to={"https:////www.pyxida.aueb.gr/index.php?op=view_object&object_id=8109"}>
                            <Card.Header>Research in Federated Learning</Card.Header>
                            <Card.Body>A novel approach to improve the global model convergence
                                speed as well as to create personalized local models for each device in Federated
                                Learning</Card.Body>
                            <Card.Credentials>
                                <Card.Block language={"python"}>Python</Card.Block>
                            </Card.Credentials>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card to={"https://github.com/harteros/natural-language-processing"}>
                            <Card.Header>Natural Language Processing</Card.Header>
                            <Card.Body>Text classification projects with different NLP techniques</Card.Body>
                            <Card.Credentials>
                                <Card.Block language={"python"}>Python</Card.Block>
                            </Card.Credentials>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card
                            to={"https://play.google.com/store/apps/details?id=lefteris.harteros.gr.koksotiriou&hl=el&gl=US"}>
                            <Card.Header>Kok Sotiriou</Card.Header>
                            <Card.Body>An android application for driving theory</Card.Body>
                            <Card.Credentials>
                                <Card.Block language={"java"}>Java</Card.Block>
                            </Card.Credentials>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card to={"https://lethrodou.gr"}>
                            <Card.Header>Lethrodou</Card.Header>
                            <Card.Body>A web app for food orders, haircut reservations and booking system for Rhodes
                                Greek Army Officers Club</Card.Body>
                            <Card.Credentials>
                                <Card.Block language={"js"}>Javascript</Card.Block>
                                <Card.Block language={"html"}>HTML</Card.Block>
                                <Card.Block language={"css"}>CSS</Card.Block>

                            </Card.Credentials>
                        </Card>
                    </Col>
                    <Col sm={12} md={6} lg={4}>
                        <Card to={"https://github.com/harteros/matrix-factorization-recommendation-system"}>
                            <Card.Header>Restaurant Recommendation System</Card.Header>
                            <Card.Body>A recommendation system using matrix factorization algorithm with client
                                application</Card.Body>
                            <Card.Credentials>
                                <Card.Block language={"java"}>Java</Card.Block>
                            </Card.Credentials>
                        </Card>
                    </Col>
                </Row>
                <Button to={"https://github.com/harteros"}>Find out more</Button>
                </div>
            </Container>
        </div>
    )
}
