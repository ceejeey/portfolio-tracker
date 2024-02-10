import React, { useState } from 'react';
import { Outlet } from 'react-router-dom';

import { UserOutlined, DollarCircleFilled } from '@ant-design/icons';
import { Avatar, Layout, Menu, Popover, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout;

const items = [DollarCircleFilled].map((icon, index) => ({
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

    return (
        <Layout className="min-h-[100vh]">
            <Sider
                width={90}
                className=" w-20"
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
                <Header className="py-8">
                    <div className="flex justify-end">
                        <Popover
                            placement="bottom"
                            title={'text'}
                            content={'content'}
                        >
                            <Avatar size={48} icon={<UserOutlined />} />
                        </Popover>
                    </div>
                </Header>
                <Content className="h-full  md:overscroll-none py-10">
                    {/* <div
                        style={{
                            // padding: 24,
                            minHeight: '100vh',
                            maxHeight: '100%',
                            // background: colorBgContainer,
                            borderRadius: borderRadiusLG,
                        }}
                    > */}
                    <Outlet />
                    {/* </div> */}
                </Content>
                <Footer className="text-center ">
                    Portfolio ©{new Date().getFullYear()} Created by Dubai
                    holdings
                </Footer>
            </Layout>
        </Layout>
    );
};

export default AuthenticatedLayout;
