import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './routes/pages/App.jsx'
import './index.css'
// import { SignProvider } from './Context/Sign.jsx'
import { Provider } from 'react-redux'
import store from './redux/index.js'

import RootLayout from './routes/pages/RootLayout.jsx'
// {  Action as signAction }
import Illustrate from './routes/pages/Illustrate.jsx'
import Game from './routes/pages/Game.jsx'
import About from './routes/pages/About.jsx'
import Error from './routes/pages/Error.jsx'

import Special from './routes/pages/Special.jsx'
// const SpecialPage = lazy(() => import('./routes/pages/Special'))

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement: <Error />,
        children: [
            {
                index: '/plants',
                element: <App />,
            },
            {
                path: '/illustrate',
                id: 'plants-detail',
                children: [
                    {
                        index: true,
                        element: <Illustrate />,
                        // loader: plantsLoader,
                    },
                    {
                        path: ':plantNo',
                        element: <Illustrate />,
                        // loader: plantsLoader,
                    },
                ],
            },

            {
                path: '/game',
                element: <Game />,
            },
            { path: '/about', element: <About /> },
            {
                path: '/special',
                element: (
                    // <Suspense fallback={<p>Loading...</p>}>
                    <Special />
                    // </Suspense>
                ),
                // loader: () =>
                //     import('./routes/pages/Special.jsx').then((module) =>
                //         module.loader()
                //     ),
            },
            { path: '/error', element: <Error /> },
        ],
    },
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        {/* <SignProvider> */}
        <Provider store={store}>
            <RouterProvider router={router} />
        </Provider>

        {/* </SignProvider> */}
    </React.StrictMode>
)
