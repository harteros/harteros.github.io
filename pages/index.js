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
                <title>Lefteris Charteros</title>
                <meta property="og:title" content="Lefteris Harteros" key="title"/>
                <meta name="description" content="Lefteris Harteros Personal Website"/>
                <meta property="og:type" content="Website"/>
                <meta name="image" property="og:image" content="https://harteros.github.io/website_thumbnail.png"/>
                <meta name="description" property="og:description" content="Lefteris Harteros Personal Website"/>
                <meta name="author" content="Lefteris Harteros"/>
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
