import { styled } from "solid-styled-components"
import { lazy } from "solid-js"

const HomePage = lazy(() => import("@/pages/Home"))
const AboutPage = lazy(() => import("@/pages/About"))
const ProjectsPage = lazy(() => import("@/pages/Projects"))

const Body = styled('main')`
    flex: 1;
    width: 90%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    @media (max-width: 1000px) {
        width: 100%;
    }
`

const App = () => {
    return (
        <Body>
            <HomePage id="home" />
            <ProjectsPage id="projects" />
            <AboutPage id="about" />
        </Body >
    )
}

export default App