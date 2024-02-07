import { FC } from 'react';
import { Layout, Flex } from 'antd';
import LoginForm from '@/components/Login/LoginForm';

const Login: FC = () => {
    return (
        <Layout className="h-[100vh]">
            <Flex gap="middle" className=" pt-auto flex flex-1 ">
                <section className="w-full p-20 ">
                    <h1 className=" text-xl text-gray-400">PortfolioPal</h1>
                    <div className="pt-40">
                        <b className="text-6xl ">
                            Empower Your Investments with Ease: Streamline Your
                            Trading Experience with Me - Your All-in-One
                            Investment Tracker
                        </b>
                        <p></p>
                    </div>
                </section>
                <Flex className="w-full  justify-center items-center bg-primary ">
                    <div className="p-20  flex flex-1 ">
                        <LoginForm />
                    </div>
                </Flex>
            </Flex>
        </Layout>
    );
};

export default Login;
