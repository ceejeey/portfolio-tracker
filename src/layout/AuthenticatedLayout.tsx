import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import {
    UploadOutlined,
    UserOutlined,
    VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items = [
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    UserOutlined,
].map((icon, index) => ({
    key: String(index + 1),
    icon: React.createElement(icon, { style: { fontSize: '18px' } }),
    className: 'border-none',
    // label: `nav ${index + 1}`,
}));

const AuthenticatedLayout = () => {
    const [isNavOpen, setIsNavOpen] = useState(false);
    const navItems = [
        {
            name: 'Projects',
            nav: '/projects',
            icon: 'bg-folder',
            iconVariant: 'group-hover:bg-folderVariant',
        },
        {
            name: 'Settings',
            nav: '/settings',
            icon: 'bg-setting',
            iconVariant: 'group-hover:bg-settingVariant',
        },
    ];

    const {
        token: { colorBgContainer, borderRadiusLG },
    } = theme.useToken();
    console.log(
        '🚀 ~ AuthenticatedLayout ~ colorBgContainer:',
        colorBgContainer
    );

    return (
        <Layout className="h-[100vh]">
            <Sider
                width={90}
                className="  bg- w-20"
                breakpoint="lg"
                collapsedWidth="0"
                onBreakpoint={(broken) => {
                    console.log(broken);
                }}
                onCollapse={(collapsed, type) => {
                    console.log(collapsed, type);
                }}
            >
                <div className="flex flex-1 h-full">
                    <Menu
                        theme="light"
                        mode="vertical"
                        defaultSelectedKeys={['4']}
                        items={items}
                        className="m-auto rounded-xl bg-transparent border-none!important"
                    />
                </div>
            </Sider>
            <Layout>
                <Header>
                    <div className="flex justify-end">menu</div>
                </Header>
                <Content style={{ margin: '24px 16px 0' }}>
                    <div
                        style={{
                            padding: 24,
                            minHeight: 360,
                            background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    >
                        <Outlet />
                    </div>
                </Content>
                <Footer className="text-center bg-white">
                    Portfolio ©{new Date().getFullYear()} Created by Dubai
                    holdings
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AuthenticatedLayout;
