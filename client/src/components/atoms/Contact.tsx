import { styled } from "solid-styled-components"
import type { Component } from "solid-js"

interface IconsProps {
    size: number
    color: string
    component: Component<any>
}

const Icon = styled("div")`
    transition: all 0.2s;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
        transform: scale(1.1);
        opacity: 0.8;
    }
`

const Contact: Component<IconsProps> = ({ size, color, component }) => {
    const Component = component
    return (
        <Icon>
            <Component style={{ width: `${size}px`, height: `${size}px`, color }} />
        </Icon>
    )
}

export default Contact