import { render } from 'solid-js/web'
import { Router } from '@solidjs/router'
import { lazy, Suspense } from 'solid-js'
import type { Component, ParentProps } from 'solid-js'
import Loading from './components/templates/Loading'
import './index.css'

const Navbar: Component = lazy(() => import('./components/templates/Navbar'))
const App: Component = lazy(() => import('./App'))
// const Footer: Component = lazy(() => import('./components/templates/Footer'))

const Layout: Component<ParentProps> = ({ children }) => {
    return (
        <>
            <Navbar />
            {children}
            <footer>Footer</footer>
        </>
    )
}

render(() => {
    return (
        <Suspense fallback={<Loading />}>
            <Router root={Layout}>
                <App />
            </Router>
        </Suspense>
    )
}, document.getElementById('root')!)