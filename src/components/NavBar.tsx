import { Layout, Row, Menu } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React, { Dispatch, FC } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { useTypedSelector } from '../hooks/useTypedSelector'
import { RouteNames } from '../routes'
import { AppDispatch } from '../store'
import { AuthActionCreators } from '../store/reducers/auth/action-creators'

const NavBar: FC = () => {

    const navigate = useNavigate();
    const { isAuth, user } = useTypedSelector(state => state.auth);
    const dispatch: Dispatch<any> = useDispatch();

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
                                onClick={() => dispatch(AuthActionCreators.logout())}
                            >
                                Logout
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
                            Login
                        </Menu.Item>
                    </Menu>
                }
            </Row>
        </Layout.Header >
    )
}

export default NavBar