import Layout from "../components/layout";
import TopSection from "../components/sections/top";
import Portfolio from "../components/sections/portfolio";
import About from "../components/sections/about";

export default function Home() {
    return (
        <Layout >
            <TopSection/>
            <Portfolio/>
            <About/>
        </Layout>
    )
}
