import { FaSolidBars, FaBrandsSquareWhatsapp, FaBrandsSquareLinkedin, FaBrandsSquareInstagram } from "solid-icons/fa"
import { createSignal, onCleanup, onMount, Show } from "solid-js"
import Contact from "@/components/atoms/Contact"
import { styled } from "solid-styled-components"
import { Glass } from "@/styles/Glass"
import Anchor from "../atoms/Anchor"

//#region Desktop
const Desktop = styled("nav")`
    ${Glass};
    position: relative;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
    gap: 10px;
    border-bottom: 1px solid var(--color1);
`
const DesktopBox = styled("div")`
    width: 33.33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:first-child {
        justify-content: start;
    }

    &:last-child {
        justify-content: end;
    }
`
const DesktopItem = styled(Anchor)`
    margin-left: 20px;
    color: var(--color5);
    cursor: pointer;
`
//#endregion
//#region Mobile
const Mobile = styled("nav")`
    ${Glass};
    position: relative;
    padding: 0 20px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--color1);
`
const MobileBox = styled("div")`
    width: 100%;
    height: 60px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`
const MobileMenu = styled("div")`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 5px;
    padding: 5px 0;
`
const MobileItem = styled("a")`
    width: 100%;
    text-align: center;
    padding: 10px 0;
    color: var(--color5);
    cursor: pointer;
    text-decoration: none;
    border: 1px solid var(--color3);

    &:hover {
        background-color: var(--color3);
    }
`
const MobileHamburger = styled(FaSolidBars)`
    display: none;
    color: var(--color5);
    width: 28px;
    height: 28px;
    cursor: pointer;

    @media (max-width: 1000px) {
        display: block;
        margin-left: 12px;
    }
`
const MobileContact = styled("div")`
    display: flex;
    flex-direction: row;
    gap: 10px;
    margin-top: 10px;
    margin-bottom: 10px;
`
//#endregion

const Logo = styled(Anchor)`
    color: var(--color5);
    font-size: clamp(16px, 10vw, 30px);
    font-weight: bold;
    left: 20px;
    cursor: pointer;
`

export default () => {

    const [open, setOpen] = createSignal<boolean>(false)
    const [size, setSize] = createSignal<number>(window.innerWidth)

    onMount(() => {
        const handleResize = () => setSize(window.innerWidth)
        window.addEventListener("resize", handleResize)
        onCleanup(() => window.removeEventListener("resize", handleResize))
    })

    const scrollToSection = (id: string) => {
        const el = document.getElementById(id)
        if (!el) return

        const getScrollContainer = (node: Element | null): HTMLElement | Window => {
            let cur: Element | null = node
            while (cur && cur.parentElement) {
                const parent = cur.parentElement
                const style = getComputedStyle(parent)
                const overflowY = style.overflowY
                if ((overflowY === "auto" || overflowY === "scroll" || overflowY === "overlay") && parent.scrollHeight > parent.clientHeight) {
                    return parent as HTMLElement
                }
                cur = parent
            }
            return window
        }

        const container = getScrollContainer(el)
        const navEl = document.querySelector("nav")
        const offset = (navEl as HTMLElement | null)?.clientHeight ?? 60

        if (container === window) {
            const top = el.getBoundingClientRect().top + window.pageYOffset - offset
            window.scrollTo({ top, behavior: "smooth" })
        } else {
            const c = container as HTMLElement
            const top = el.getBoundingClientRect().top - c.getBoundingClientRect().top + c.scrollTop - offset
            c.scrollTo({ top, behavior: "smooth" })
        }

        setOpen(false)
    }

    return (
        <>
            <Show when={size() > 1000} >
                <Desktop>
                    <DesktopBox>
                        <Logo onClick={(e: MouseEvent) => { e.preventDefault(); scrollToSection("home") }}>Madax Tech</Logo>
                    </DesktopBox>
                    <DesktopBox>
                        <DesktopItem onClick={(e: MouseEvent) => { e.preventDefault(); scrollToSection("home") }}>Inicio</DesktopItem>
                        <DesktopItem onClick={(e: MouseEvent) => { e.preventDefault(); scrollToSection("services") }}>Serviços</DesktopItem>
                        <DesktopItem onClick={(e: MouseEvent) => { e.preventDefault(); scrollToSection("projects") }}>Projetos</DesktopItem>
                        <DesktopItem onClick={(e: MouseEvent) => { e.preventDefault(); scrollToSection("about") }}>Sobre</DesktopItem>
                        <DesktopItem onClick={(e: MouseEvent) => { e.preventDefault(); scrollToSection("contact") }}>Contato</DesktopItem>
                    </DesktopBox>
                    <DesktopBox>
                        <Contact size={40} color="var(--color5)" component={FaBrandsSquareWhatsapp} />
                        <Contact size={40} color="var(--color5)" component={FaBrandsSquareLinkedin} />
                        <Contact size={40} color="var(--color5)" component={FaBrandsSquareInstagram} />
                    </DesktopBox>
                </Desktop>
            </Show>
            <Show when={size() <= 1000} >
                <Mobile>
                    <MobileBox>
                        <Logo onClick={(e: MouseEvent) => { e.preventDefault(); scrollToSection("home") }}>Madax Tech</Logo>
                        <MobileHamburger onClick={() => setOpen(p => !p)} />
                    </MobileBox>
                    <Show when={open()}>
                        <MobileMenu>
                            <MobileItem onClick={(e: MouseEvent) => { e.preventDefault(); scrollToSection("home") }}>Inicio</MobileItem>
                            <MobileItem onClick={(e: MouseEvent) => { e.preventDefault(); scrollToSection("services") }}>Serviços</MobileItem>
                            <MobileItem onClick={(e: MouseEvent) => { e.preventDefault(); scrollToSection("projects") }}>Projetos</MobileItem>
                            <MobileItem onClick={(e: MouseEvent) => { e.preventDefault(); scrollToSection("about") }}>Sobre</MobileItem>
                            <MobileItem onClick={(e: MouseEvent) => { e.preventDefault(); scrollToSection("contact") }}>Contato</MobileItem>
                            <MobileContact>
                                <Contact size={35} color="var(--color5)" component={FaBrandsSquareWhatsapp} />
                                <Contact size={35} color="var(--color5)" component={FaBrandsSquareLinkedin} />
                                <Contact size={35} color="var(--color5)" component={FaBrandsSquareInstagram} />
                            </MobileContact>
                        </MobileMenu>
                    </Show>
                </Mobile>
            </Show >
        </>
    )
}