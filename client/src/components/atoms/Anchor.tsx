import type { Component, ParentProps } from 'solid-js';
import { styled } from 'solid-styled-components';

const Container = styled('p')`
    color: var(--color6);
    position: relative;
    text-decoration: none;
    display: inline-block;
    padding-bottom: 4px;

    &::before {
        content: '';
        position: absolute;
        width: 100%;
        height: 4px;
        border-radius: 4px;
        background-color: var(--color3);
        bottom: 0;
        left: 0;
        transform-origin: right;
        transform: scaleX(0);
        transition: transform .3s ease-in-out;
    }

    &:hover::before {
        transform-origin: left;
        transform: scaleX(1);
    }
`;

const Anchor: Component<ParentProps> = (props) => {
    const { children, ...rest } = props;
    return <Container {...rest}>{children}</Container>;
};

export default Anchor;