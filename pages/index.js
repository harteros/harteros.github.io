import Link from 'next/link'
import Header from "../components/header";
import Layout from "../components/layout";
import Container from "../components/container";
import styles from "/styles/Home.module.css";
export default function Home() {
    return (
        <Layout>
            <div>
                <Container>
                    <div className={styles.center}>
                        Hello there, im still under development. Check back later!

                    </div>
                </Container>
            </div>
        </Layout>
    )
}
