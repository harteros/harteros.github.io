import Layout from "../components/layout/Layout";
import TopSection from "../components/sections/top";
import Portfolio from "../components/sections/portfolio";
import About from "../components/sections/about";
import Head from "next/head";
import Skills from "../components/sections/skills";
import Contact from "../components/sections/contact";

export default function Home() {
    return (
        <div>
            <Head>
                <title>Lefteris Harteros</title>
                <meta property="og:title" content="Lefteris Harteros" key="title" />
            </Head>
            <Layout>
                <TopSection/>
                <About/>
                <Skills/>
                <Portfolio/>
                <Contact/>
            </Layout>
        </div>

    )
}
