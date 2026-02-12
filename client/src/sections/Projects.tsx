import { styled } from "solid-styled-components";
import { For, type Component } from "solid-js";
import Project from "@/components/atoms/Project";

import img3 from "@/assets/projects/daily_words_cover.png";
import img4 from "@/assets/projects/checklist_cover.png";

type Project = {
    id: number;
    title: string;
    image: string;
    tech: string[];
    description: string;
};

const projects: Project[] = [
    {
        id: 1,
        title: "Daily Words",
        image: img3,
        tech: ["React", "Expressjs", "Golang"],
        description: "Uma aplicação que envia palavras diárias para os usuários, versos bíblicos, autoajuda, dicas de bem-estar e motivação.",
    },
    {
        id: 2,
        title: "Checklist",
        image: img4,
        tech: ["React", "Django", "AWS EC2"],
        description: "Um Projeto para gerenciamento de tempo inteligente, com uma dashboard integrada"
    }
];

const Grid = styled("section")`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 16px;
    width: clamp(60%, 90%, 1000px);  
`;

const ProjectsPage: Component<{ id: string }> = (props) => {
    return (
        <Grid id={props.id}>
            <For each={projects}>
                {(p) => (
                    <Project {...p} />
                )}
            </For>
        </Grid>
    );
};

export default ProjectsPage;