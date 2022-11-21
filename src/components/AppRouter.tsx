import { FC } from 'react'
import { Routes, Route, useNavigate, Navigate } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector';
import EventPage from '../pages/EventPage';
import LoginPage from '../pages/LoginPage';

const AppRouter: FC = () => {

    const { isAuth } = useTypedSelector(state => state.auth);

    // const ProtectedRoute = ({ children }: any) => {
    //     if (!isAuth) {
    //         return <Navigate to="login" />
    //     }
    //     return children;
    // }

    return (
        <>
            <Routes>
                <Route path='/'>
                    <Route path='/login' element={<LoginPage />} />
                    <Route path='/main'>
                        <Route index element={
                            // <ProtectedRoute>
                            <EventPage />
                            // </ProtectedRoute>
                        } />
                    </Route>
                </Route>
            </Routes>
        </>
    )
}

export default AppRouter;