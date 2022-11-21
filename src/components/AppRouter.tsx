import { FC } from 'react'
import { Routes, Route } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector';
import { privateRoutes, publicRoutes } from '../routes';

const AppRouter: FC = () => {

    const { isAuth } = useTypedSelector(state => state.auth);

    return (
        isAuth ?
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