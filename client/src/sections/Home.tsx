import { styled } from 'solid-styled-components'
import { type Component } from 'solid-js'

import Glass from '@/styles/Glass'

const Page = styled("div")`
    ${Glass};
    padding: clamp(20px, 4vw, 40px);
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 30px;
    border: 1px solid var(--color8);
    border-radius: 10px;
`

const Title = styled('h1')`
    margin: 0;
    font-size: clamp(16px, 4vw, 30px);
    text-align: center;
`

const Subtitle = styled('p')`
    margin: 0;
    opacity: 0.95;
    font-size: clamp(15px, 2.2vw, 18px);
    max-width: 900px;
    text-align: center;
`

const Home: Component<{ id: string }> = (props) => {
    return (
        <Page id={props.id}>
            <Title>Desenvolvimento de sistemas sob medida para acelerar seu negócio</Title>
            <Subtitle>
                Fazemos manutenção e refatoração de sistemas, teste de qualidade e segurança,
                além de criar sistemas personalizados para atender às necessidades específicas para seu negócio.
            </Subtitle>
        </Page>
    )
}

export default Home