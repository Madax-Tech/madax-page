import { createSignal, type Component } from "solid-js"
import { styled } from "solid-styled-components"
import Glass from "@/styles/Glass"

const Container = styled.form`
    ${Glass};
    width: 85%;
    max-width: 800px;
    padding: clamp(20px, 4vw, 40px);
    margin: 20px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 30px;
    border: 1px solid var(--color8);
    border-radius: 10px;
    margin-bottom: 40px;
`

const Title = styled.h1`
    font-size: 24px;
    width: 100%;
    padding: 3px;
    border-bottom: 1px solid var(--color8);
`

const Box = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;

    gap: 30px;
    width: 100%;
    height: auto;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`

const Label = styled.div`
    gap: 10px;
`

const Text = styled.p`
    margin-bottom: 10px;
`

const Input = styled.input`
    ${Glass};
    outline: none;
    height: 30px;
    color: var(--color5);
    border: 1px solid var(--color8);
    border-radius: 10px;
    padding-left: 10px;
    padding-left: 10px;

    &:focus {
        filter: brightness(2);
        color: var(--color5);
        border: 1px solid var(--color1);
    }
`

const Description = styled.textarea`
    ${Glass};
    resize: none;
    width: 100%;
    height: 200px;
    padding: 10px;
    border: 1px solid var(--color8);
    border-radius: 10px;
    outline: none;
    color: var(--color5);

    &:focus {
        filter: brightness(2);
        color: var(--color5);
        border: 1px solid var(--color1);
    }
`

const Submit = styled.button`
    ${Glass};  
    padding: 10px 30px;
    border: 1px solid var(--color8);
    border-radius: 10px;
    outline: none;
    color: var(--color5);
    transition: all 100ms ease-in-out;

    &:hover {
        filter: brightness(1.5);
        color: var(--color4);
    }
`

const Lead: Component<{ id: string }> = (props) => {

    const [nome, setNome] = createSignal("");
    const [email, setEmail] = createSignal("");
    const [description, setDescription] = createSignal("");

    return (
        <Container id={props.id}>
            <Title>Contato</Title>
            <Box>
                <Label>
                    <Text>Nome</Text>
                    <Input type="name" onChange={(e) => setNome(e.target.value)} value={nome()} />
                </Label>
                <Label>
                    <Text>Email</Text>
                    <Input typeof="email" onChange={(e) => setEmail(e.target.value)} value={email()} />
                </Label>
            </Box>
            <Description aria-controls="false" onChange={(e) => setDescription(e.target.value)} value={description()} ></Description>
            <Submit onSubmit={() => { console.log(nome); console.log(email); console.log(description) }} >Enviar</Submit>
        </Container>
    )
}

export default Lead