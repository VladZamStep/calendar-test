import { FC } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector';
import EventPage from '../pages/EventPage';
import LoginPage from '../pages/LoginPage';
import { privateRoutes, publicRoutes } from '../routes';

const AppRouter: FC = () => {

    const { isAuth } = useTypedSelector(state => state.auth);

    const ProtectedRoute = ({ children }: any) => {
        if (!isAuth) {
            return <Navigate to="login" />
        }
        return children;
    }

    return (
        <>
            <Routes>
                <Route path='/' element={
                    <ProtectedRoute>
                        <EventPage />
                    </ProtectedRoute>
                } />
                <Route path='/login' element={<LoginPage />} />
            </Routes>
        </>
    )
}

export default AppRouter;