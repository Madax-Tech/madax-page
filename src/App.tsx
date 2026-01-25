import { lazy, Suspense } from "solid-js"
import Loading from "./components/templates/Loading"
import { styled } from "solid-styled-components"
import { Glass } from "@/styles/Glass"

const HomePage = lazy(() => import("./pages/Home"))
const AboutPage = lazy(() => import("./pages/About"))
const ContactPage = lazy(() => import("./pages/Contact"))
const ProjectsPage = lazy(() => import("./pages/Projects"))
const ServicesPage = lazy(() => import("./pages/Services"))

const Body = styled('main')`
    ${Glass};
    flex: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 20px;
    padding: 20px;
`

const App = () => {
    return (
        <Suspense fallback={<Loading />}>
            <Body>
                <section id="home"><HomePage /></section>
                <section id="services"><ServicesPage /></section>
                <section id="projects"><ProjectsPage /></section>
                <section id="about"><AboutPage /></section>
                <section id="contact"><ContactPage /></section>
            </Body>
        </Suspense>
    )
}

export default App