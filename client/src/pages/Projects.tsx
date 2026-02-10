import { styled } from "solid-styled-components";
import { For, type Component } from "solid-js";

import Glass from "@/styles/Glass";
import img3 from "@/assets/images/img3.jpg";
import img4 from "@/assets/images/img4.jpg";
import img5 from "@/assets/images/img5.jpg";

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
        title: "Madax Dashboard",
        image: img3,
        tech: ["TypeScript", "React", "Nestjs"],
        description: "Painel administrativo com gráficos em tempo real, autenticação e gerenciamento de usuários.",
    },
    {
        id: 2,
        title: "Loja Virtual",
        image: img4,
        tech: ["Solid Start", "Stripe", "Prisma"],
        description: "E-commerce com checkout integrado, catálogo dinâmico e painel de pedidos.",
    },
    {
        id: 3,
        title: "App Mobile",
        image: img5,
        tech: ["Ionic", "GraphQL", "Expo"],
        description: "Aplicativo móvel multiplataforma com sync offline e notificações push.",
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
    p { margin: 0; color: #374151; font-size: 0.95rem; }
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