import { render } from 'solid-js/web'
import { lazy, Suspense } from 'solid-js'
import type { Component } from 'solid-js'
import Loading from './components/templates/Loading'
import { styled } from 'solid-styled-components'
import './index.css'
import Background from './components/atoms/Background'
import { Glass } from './styles/Glass'

const Navbar: Component = lazy(() => import('./components/templates/Navbar'))
const App: Component = lazy(() => import('./App'))
const Footer: Component = lazy(() => import('./components/templates/Footer'))

const Page = styled('div')`
    width: 100%;
    height: 100dvh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    overflow-y: auto;
    position: relative;

    &::-webkit-scrollbar {
        width: 3px;
        height: 3px;
    }

    &::-webkit-scrollbar-track {
        ${Glass};
    }

    &::-webkit-scrollbar-thumb {
        background-color: rgba(100, 100, 100, 0.5);
        background-clip: padding-box;
    }

    &::-webkit-scrollbar-thumb:hover {
        background-color: rgba(150, 150, 150, 0.8);
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