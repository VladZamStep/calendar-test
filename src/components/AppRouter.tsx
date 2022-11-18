import React, { FC } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'
import { privateRoutes, publicRoutes, RouteNames } from '../routes';

const AppRouter: FC = () => {

    const auth = false;

    return (
        auth ?
            <Routes>
                {privateRoutes.map(({ path, element: Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            </Routes>
            :
            <Routes>
                {publicRoutes.map(({ path, element: Component }) => (
                    <Route key={path} path={path} element={<Component />} />
                ))}
            </Routes>
    )
}

export default AppRouter;