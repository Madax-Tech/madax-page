import { styled } from "solid-styled-components"
import Glass from "@/styles/Glass";

const Container = styled("article")`
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

const Image = styled("img")`
    width: 100%;
    height: 100%;
    object-fit: fill;
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

type PropProject = {
    id: number,
    title: string,
    image: string,
    tech: string[]
    description: string
}

export default (props: PropProject) => {
    return (
        <Container>
            <ImageWrap>
                <Image src={props.image} />
            </ImageWrap>
            <Content>
                <p>{props.description}</p>
            </Content>
        </Container>
    )
}