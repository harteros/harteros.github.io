import Layout from "../components/layout";
import TopSection from "../components/sections/top";
import Portfolio from "../components/sections/portfolio";
import About from "../components/sections/about";
import Head from "next/head";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Lefteris Harteros</title>
                <meta property="og:title" content="Lefteris Harteros" key="title" />
            </Head>
            <Layout>
                <TopSection/>
                <Portfolio/>
                <About/>
            </Layout>
        </div>

    )
}
