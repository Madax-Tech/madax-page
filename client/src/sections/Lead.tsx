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
    align-items: start;
    justify-content: center;

    gap: 30px;
    width: 90%;

    @media (max-width: 800px) {
        flex-direction: column;
    }
`

const Label = styled.div`
    gap: 10px;
    width: 100%;
`

const Text = styled.p`
    margin-bottom: 10px;
    width: 100%;
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
    width: 100%;

    &:focus {
        filter: brightness(2);
        color: var(--color5);
        border: 1px solid var(--color1);
    }
`

const Description = styled.textarea`
    ${Glass};
    resize: none;
    width: 90%;
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
    const [nome, setNome] = createSignal("")
    const [email, setEmail] = createSignal("")
    const [description, setDescription] = createSignal("")
    const [website, setWebsite] = createSignal("")
    const [loading, setLoading] = createSignal(false)
    const [feedback, setFeedback] = createSignal("")

    const handleSubmit = async (e: SubmitEvent) => {
        e.preventDefault()
        setFeedback("")
        setLoading(true)

        try {
            const res = await fetch("/api/lead", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    nome: nome(),
                    email: email(),
                    description: description(),
                    website: website(),
                }),
            })

            const data = await res.json()
            if (!res.ok) throw new Error(data?.error || "Erro ao enviar")

            setFeedback("Mensagem enviada com sucesso.")
            setNome("")
            setEmail("")
            setDescription("")
            setWebsite("")
        } catch (err: any) {
            setFeedback(err?.message || "Falha ao enviar mensagem.")
        } finally {
            setLoading(false)
        }
    }

    return (
        <Container id={props.id} onSubmit={handleSubmit}>
            <Title>Contato</Title>

            <input
                type="text"
                name="website"
                value={website()}
                onInput={(e) => setWebsite(e.currentTarget.value)}
                autocomplete="off"
                tabindex="-1"
                style={{ display: "none" }}
            />

            <Box>
                <Label>
                    <Text>Nome</Text>
                    <Input type="text" onInput={(e) => setNome(e.currentTarget.value)} value={nome()} />
                </Label>
                <Label>
                    <Text>Email</Text>
                    <Input type="email" onInput={(e) => setEmail(e.currentTarget.value)} value={email()} />
                </Label>
            </Box>
            <Description onInput={(e) => setDescription(e.currentTarget.value)} value={description()} />
            <Submit type="submit" disabled={loading()}>
                {loading() ? "Enviando..." : "Enviar"}
            </Submit>
            <Text>{feedback()}</Text>
        </Container>
    )
}

export default Lead