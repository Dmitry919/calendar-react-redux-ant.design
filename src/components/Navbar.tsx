import React, {FC} from 'react';
import {Layout, Menu, Row} from "antd";
import {RouteNames} from "../router";
import {Link} from 'react-router-dom';
import {useTypedSelector} from "../hooks/useTypedSelector";
import {useAction} from "../hooks/useActions";

const Navbar: FC = () => {
    const {isAuth, user} = useTypedSelector(state => state.auth);
    const {logout} = useAction();

    return (
        <Layout.Header>
            <Row justify="end">
                {isAuth ?
                    <>
                        <div style={{color: "white"}}>
                            {user.username}
                        </div>
                        <Menu theme='dark' mode="horizontal" selectable={false}>
                            <Menu.Item onClick={logout}
                                       key={1}>Выйти</Menu.Item>
                        </Menu>
                    </>
                    :
                        <Menu theme="dark" mode="horizontal" selectable={false}>
                            <Menu.Item key={1}>
                                <Link to={RouteNames.LOGIN}>Логин</Link>
                            </Menu.Item>
                        </Menu>
                }

            </Row>
        </Layout.Header>
    );
};

export default Navbar;