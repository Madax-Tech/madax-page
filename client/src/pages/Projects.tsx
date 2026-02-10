import { styled } from "solid-styled-components";
import { For, type Component } from "solid-js";

import Glass from "@/styles/Glass";
import img3 from "@/assets/images/img3.jpg";
import img4 from "@/assets/images/img4.jpg";

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

const Card = styled("article")`
    ${Glass};
    border: 1px solid var(--color8);
    border-radius: 10px;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    transition: transform .15s ease, box-shadow .15s ease;

    &:hover {
        transform: translateY(-6px);
        box-shadow: 0 8px 24px rgba(0,0,0,0.08);
        cursor: pointer;
    }
`;

const ImageWrap = styled("div")`
    width: 100%;
    aspect-ratio: 16/9;
    overflow: hidden;
`;

const Img = styled("img")`
    width: 100%;
    height: 100%;
    object-fit: cover;
    display: block;
`;

const Content = styled("div")`
    padding: 12px 14px 16px;
    display: flex;
    flex-direction: column;
    gap: 8px;

    h2 { margin: 0; font-size: 1.125rem; }
    p { margin: 0; color: var(--color7); font-size: 0.95rem; font-weight: 300; line-height: 1.4; }
`;

const TechList = styled("ul")`
    list-style: none;
    padding: 0;
    margin: 8px 0 0;
    display: flex;
    gap: 8px;
    flex-wrap: wrap;
`;

const Tech = styled("li")`
    padding: 4px 8px;
    border-radius: 999px;
    font-size: 0.8rem;
`;

const ProjectsPage: Component<{ id: string }> = (props) => {
    return (
        <Grid id={props.id}>
            <For each={projects}>
                {(p) => (
                    <Card>
                        <ImageWrap>
                            <Img src={p.image} alt={p.title} />
                        </ImageWrap>
                        <Content>
                            <h2>{p.title}</h2>
                            <p>{p.description}</p>
                            <TechList>
                                <For each={p.tech}>{(t) => <Tech>{t}</Tech>}</For>
                            </TechList>
                        </Content>
                    </Card>
                )}
            </For>
        </Grid>
    );
};

export default ProjectsPage;