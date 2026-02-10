import './index.css'
import type { Component } from 'solid-js'
import { lazy, Suspense } from 'solid-js'
import { styled } from 'solid-styled-components'
import { render } from 'solid-js/web'

import Loading from '@/components/templates/Loading'
import Background from '@/components/atoms/Background'
import Glass from '@/styles/Glass'

const Navbar: Component = lazy(() => import('@/components/templates/Navbar'))
const App: Component = lazy(() => import('@/App'))
const Footer: Component = lazy(() => import('@/components/templates/Footer'))

const Page = styled('div')`
    position: relative;

    width: 100dvw;
    height: 100dvh;
    
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;

    overflow-y: auto;
    overflow-x: hidden;

    &::-webkit-scrollbar {
        width: 3px;
        height: 3px;
    }

    &::-webkit-scrollbar-track {
        ${Glass};
    }

    &::-webkit-scrollbar-thumb {
        background-color: var(--color8);
        background-clip: padding-box;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: var(--color3);
    }
`

render(() => {
    return (
        <Suspense fallback={<Loading />}>
            <Background >
                <Page>
                    <Navbar />
                    <App />
                    <Footer />
                </Page>
            </Background>
        </Suspense>
    )
}, document.getElementById('root')!)