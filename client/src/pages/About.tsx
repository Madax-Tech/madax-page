import type { Component } from "solid-js";
import { styled } from "solid-styled-components";
import { BsGithub, BsLinkedin } from "solid-icons/bs";

import Glass from "@/styles/Glass";
import img1 from "@/assets/images/img1.jpg"
import img2 from "@/assets/images/img2.jpg"

const Page = styled("section")`
    padding: 24px;
    max-width: 1100px;
    margin: 0 auto;
    font-family: system-ui, -apple-system, "Segoe UI", Roboto, "Helvetica Neue", Arial;
`;

const Row = styled("section")`
    display: flex;
    gap: 16px;
    align-items: stretch;

    @media (max-width: 720px) {
        flex-direction: column;
    }
`;

const Block = styled("div")`
    flex: 1;
    ${Glass};
    border: 1px solid var(--color8);
    border-radius: 10px;
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 16px;
    box-shadow: 0 1px 6px rgba(0,0,0,0.04);
    text-decoration: none;
    color: inherit;

    transition: transform .15s ease, box-shadow .15s ease;
`;

const Meta = styled("div")`
    display: flex;
    flex-direction: row;
    gap: 8px;

    @media (max-width: 720px) {
        flex-direction: column;
        align-items: center;
        text-align: center;
    }
`;

const Header = styled("div")`
    display: flex;
    gap: 5px;
    align-items: start;
    justify-content: center;
    flex-direction: column;

    @media (max-width: 720px) {
        align-items: center;
    }
`;

const Avatar = styled("img")`
    width: clamp(80px, 15vw, 90px);
    height: clamp(80px, 15vw, 90px);
    border-radius: 12px;
    object-fit: cover;
    flex-shrink: 0;
`;

const Role = styled("p")`
    color: var(--color5);
    font-size: 0.9rem;
`;

const Bio = styled("p")`
    color: var(--color7);
    font-size: 0.95rem;
`;

const TechList = styled("ul")`
    list-style: none;
    padding: 0;
    margin: 6px 0 0;
    gap: 8px;
    flex-wrap: wrap;
    
    display: flex;
    @media (max-width: 720px) {
        align-items: center;
        justify-content: center;
    }
`;

const Tech = styled("li")`
    padding: 6px 10px;
    border-radius: 999px;
    font-size: clamp(12px, 5vw, 16px);
`;

const SocialLinks = styled("div")`
    display: flex;
    gap: 12px;
    margin-top: auto;
    padding-top: 8px;
    border-top: 1px solid var(--color8);
`;

const SocialIcon = styled("a")`
    color: var(--color5);
    font-size: 24px;
    transition: color .2s ease, transform .2s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
        color: var(--color3);
        transform: scale(1.15);
    }
`;

const AboutPage: Component<{ id: string }> = (props) => {
    return (
        <Page id={props.id}>
            <Row>
                <Block>
                    <Meta>
                        <Avatar src={img1} alt="Dev 1" />
                        <Header>
                            <h3>Davi Lima</h3>
                            <Role>Desenvolvedor Full-stack</Role>
                            <Bio>Criando soluções de software modernas com alta eficiência.</Bio>
                        </Header>
                    </Meta>
                    <TechList>
                        <Tech>TypeScript</Tech>
                        <Tech>Nodejs</Tech>
                        <Tech>Nestjs</Tech>
                        <Tech>Reactjs</Tech>
                        <Tech>PostgresSQL</Tech>
                        <Tech>MongoDB</Tech>
                        <Tech>Docker</Tech>
                        <Tech>Golang</Tech>
                    </TechList>
                    <SocialLinks>
                        <SocialIcon href="https://github.com/Zelchi" target="_blank">
                            <BsGithub size={30} />
                        </SocialIcon>
                        <SocialIcon href="https://linkedin.com/in/davi-lima" target="_blank">
                            <BsLinkedin size={30} />
                        </SocialIcon>
                    </SocialLinks>
                </Block>

                <Block>
                    <Meta>
                        <Avatar src={img2} alt="Dev 2" />
                        <Header>
                            <h3>Marcos Paulo</h3>
                            <Role>Engenheiro de Qualidade / DevOps</Role>
                            <Bio>Garantindo a qualidade e eficiência dos sistemas e confiabilidade em ambiente de nuvem.</Bio>
                        </Header>
                    </Meta>
                    <TechList>
                        <Tech>Python</Tech>
                        <Tech>Django</Tech>
                        <Tech>Anaconda</Tech>
                        <Tech>Selenium</Tech>
                        <Tech>Docker</Tech>
                        <Tech>AWS</Tech>
                        <Tech>EC2</Tech>
                        <Tech>S3</Tech>
                        <Tech>Linux</Tech>
                    </TechList>
                    <SocialLinks>
                        <SocialIcon href="https://github.com/Marcosdev03" target="_blank">
                            <BsGithub size={30} />
                        </SocialIcon>
                        <SocialIcon href="https://linkedin.com/in/marcos-paulo" target="_blank">
                            <BsLinkedin size={30} />
                        </SocialIcon>
                    </SocialLinks>
                </Block>
            </Row>
        </Page>
    );
};

export default AboutPage;