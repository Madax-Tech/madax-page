import { styled } from "solid-styled-components";
import { For, type Component } from "solid-js";
import Project from "@/components/atoms/Project";
import projectsData from "@/data/projects.json";

type Project = {
    id: number;
    title: string;
    image: string;
    tech: string[];
    description: string;
};

const Grid = styled("section")`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
    width: clamp(60%, 90%, 1000px);  
`;

const ProjectsPage: Component<{ id: string }> = (props) => {
    return (
        <Grid id={props.id}>
            <For each={projectsData}>
                {(p) => (
                    <Project {...p} />
                )}
            </For>
        </Grid>
    );
};

export default ProjectsPage;