import { Layout, Row, Menu } from 'antd'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { useActions } from '../hooks/useActions'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { RouteNames } from '../routes'

const NavBar: FC = () => {

    const navigate = useNavigate();
    const { isAuth, user } = useTypedSelector(state => state.auth);
    const { logout } = useActions();

    const handleLogout = () => {
        logout();
        navigate(RouteNames.LOGIN_PAGE);
    }

    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth
                    ?
                    <>
                        <div style={{ color: 'white' }}>
                            {user.username}
                        </div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            selectable={false}
                        >
                            <Menu.Item
                                key={1}
                                onClick={handleLogout}
                            >
                                Выйти
                            </Menu.Item>
                        </Menu>
                    </>
                    :
                    <Menu
                        theme="light"
                        mode="horizontal"
                        selectable={false}
                    >
                        <Menu.Item
                            key={1}
                            onClick={() => navigate(RouteNames.LOGIN_PAGE)}
                        >
                            Войти
                        </Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header >
    )
};

export default NavBar;