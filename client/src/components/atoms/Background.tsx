import { type ParentProps } from "solid-js"
import { styled, keyframes } from "solid-styled-components"

const multipleBoxShadow = (n: number) => {
    const parts: string[] = []
    for (let i = 0; i < n; i++) {
        const x = Math.floor(Math.random() * 2000)
        const y = Math.floor(Math.random() * 2000)
        parts.push(`${x}px ${y}px #FFF`)
    }
    return parts.join(", ")
}

const shadowsSmall = multipleBoxShadow(700)
const shadowsMedium = multipleBoxShadow(200)
const shadowsBig = multipleBoxShadow(100)

const animStar = keyframes`
  from { transform: translateY(0px); }
  to   { transform: translateY(-2000px); }
`

const BackgroundContainer = styled("div")`
  position: relative;
  width: 100%;
  min-height: calc(100dvh - 60px);
  background: radial-gradient(ellipse at bottom, #1B2735 0%, #090A0F 100%);
  overflow: hidden;
`

const Stars = styled("div") <{ size: number; shadows: string; duration: string }>`
  position: absolute;
  top: 0;
  left: 0;
  width: ${p => p.size}px;
  height: ${p => p.size}px;
  background: transparent;
  box-shadow: ${p => p.shadows};
  animation: ${animStar} ${p => p.duration} linear infinite;

  &::after {
    content: " ";
    position: absolute;
    top: 2000px;
    left: 0;
    width: ${p => p.size}px;
    height: ${p => p.size}px;
    background: transparent;
    box-shadow: ${p => p.shadows};
  }
`

export default function Background(props: ParentProps) {
    return (
        <BackgroundContainer>
            <Stars size={1} shadows={shadowsSmall} duration={"50s"} />
            <Stars size={2} shadows={shadowsMedium} duration={"100s"} />
            <Stars size={3} shadows={shadowsBig} duration={"150s"} />
            {props.children}
        </BackgroundContainer>
    )
}