import { Layout, Row, Menu } from 'antd'
import { Header } from 'antd/es/layout/layout'
import React, { FC } from 'react'
import { useNavigate } from 'react-router-dom'
import { RouteNames } from '../routes'

const NavBar: FC = () => {

    const navigate = useNavigate();
    const auth = true;

    return (
        <Layout.Header>
            <Row justify="end">
                {auth
                    ?
                    <>
                        <div style={{ color: 'white' }}>
                            Vlad
                        </div>
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            selectable={false}
                        >
                            <Menu.Item
                                key={1}
                                onClick={() => console.log('logout')}
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