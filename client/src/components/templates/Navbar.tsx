import { FaSolidBars, FaSolidXmark, FaBrandsSquareWhatsapp, FaBrandsSquareLinkedin, FaBrandsSquareInstagram } from "solid-icons/fa"
import { createSignal, onCleanup, onMount, Show, type Component } from "solid-js"
import { styled } from "solid-styled-components"

import Contact from "@/components/atoms/Contact"
import Anchor from "@/components/atoms/Anchor"
import Glass from "@/styles/Glass"

//#region Desktop
const Desktop = styled("nav")`
    ${Glass};
    position: sticky;
    top: 0;
    flex-shrink: 0;
    width: 100%;
    height: 60px;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding: 0 20px;
    gap: 10px;
    border-bottom: 1px solid var(--color8);
    z-index: 10;
`
const DesktopBox = styled("div")`
    width: 33.33%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 20px;

    &:first-child {
        justify-content: start;
    }

    &:last-child {
        justify-content: end;
    }
`
const DesktopItem = styled(Anchor)`
    color: var(--color5);
    cursor: pointer;
`
//#endregion
//#region Mobile
const MobileMargin = styled("div")`
    width: 100%;
    height: 60px;
    flex-shrink: 0;
`
const Mobile = styled("nav")`
    ${Glass};
    padding: 0 20px;
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    border-bottom: 1px solid var(--color8);
    z-index: 10;
    position: fixed;
    top: 0;
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
    overflow: hidden;
    max-height: 0;
    padding: 0;
    opacity: 0;
    transform: translateY(-8px);
    transition: max-height 320ms ease, opacity 240ms ease, transform 240ms ease, padding 240ms ease;

    &.open {
        padding: 5px 0;
        max-height: 500px;
        opacity: 1;
        transform: translateY(0);
    }
`
const MobileItem = styled("a")`
    width: 100%;
    text-align: center;
    padding: 10px 0;
    color: var(--color5);
    cursor: pointer;
    text-decoration: none;
    border: 1px solid var(--color8);

    &:hover {
        background-color: var(--color8);
    }
`
const MobileBars = styled(FaSolidBars)`
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
const MobileClose = styled(FaSolidXmark)`
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
//#region Common
const IconsGroup = styled("div")`
    display: flex;
    flex-direction: row;
    gap: 5px;
`
const Logo = styled(Anchor)`
    color: var(--color5);
    font-size: clamp(16px, 10vw, 30px);
    font-weight: bold;
    left: 20px;
    cursor: pointer;
`
//#endregion

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

const Navbar: Component = () => {

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

        const container = getScrollContainer(el)
        const offset = 80

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
                        <DesktopItem onClick={(e: MouseEvent) => { e.preventDefault(); scrollToSection("projects") }}>Projetos</DesktopItem>
                        <DesktopItem onClick={(e: MouseEvent) => { e.preventDefault(); scrollToSection("about") }}>Sobre</DesktopItem>
                    </DesktopBox>
                    <DesktopBox>
                        <IconsGroup>
                            <Contact size={40} color="var(--color5)" component={FaBrandsSquareWhatsapp} />
                            <Contact size={40} color="var(--color5)" component={FaBrandsSquareLinkedin} />
                            <Contact size={40} color="var(--color5)" component={FaBrandsSquareInstagram} />
                        </IconsGroup>
                    </DesktopBox>
                </Desktop>
            </Show>
            <Show when={size() <= 1000} >
                <>
                    <MobileMargin />
                    <Mobile>
                        <MobileBox>
                            <Logo onClick={(e: MouseEvent) => { e.preventDefault(); scrollToSection("home") }}>
                                Madax Tech
                            </Logo>
                            {open() ? (<MobileClose onClick={() => setOpen(p => !p)} />) : (<MobileBars onClick={() => setOpen(p => !p)} />)}
                        </MobileBox>
                        <MobileMenu class={open() ? "open" : ""} aria-hidden={!open()}>
                            <MobileItem onClick={(e: MouseEvent) => { e.preventDefault(); scrollToSection("home") }}>Inicio</MobileItem>
                            <MobileItem onClick={(e: MouseEvent) => { e.preventDefault(); scrollToSection("projects") }}>Projetos</MobileItem>
                            <MobileItem onClick={(e: MouseEvent) => { e.preventDefault(); scrollToSection("about") }}>Sobre</MobileItem>
                            <MobileContact>
                                <IconsGroup>
                                    <Contact size={35} color="var(--color5)" component={FaBrandsSquareWhatsapp} />
                                    <Contact size={35} color="var(--color5)" component={FaBrandsSquareLinkedin} />
                                    <Contact size={35} color="var(--color5)" component={FaBrandsSquareInstagram} />
                                </IconsGroup>
                            </MobileContact>
                        </MobileMenu>
                    </Mobile>
                </>
            </Show >
        </>
    )
}

export default Navbar;