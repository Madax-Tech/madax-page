import { styled } from "solid-styled-components"
import { lazy } from "solid-js"

const Home = lazy(() => import("@/sections/Home"))
const About = lazy(() => import("@/sections/About"))
const Projects = lazy(() => import("@/sections/Projects"))
const Lead = lazy(() => import("@/sections/Lead"))

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
            <Home id="home" />
            <Projects id="projects" />
            <About id="about" />
            <Lead id="lead" />
        </Body >
    )
}

export default App