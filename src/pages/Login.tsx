import { FC } from 'react';
import { Layout, Flex } from 'antd';
import LoginForm from '@/components/Login/LoginForm';

const Login: FC = () => {
    return (
        <Layout className="h-[100vh] md:bg-white bg-primary">
            <div className=" pt-auto flex flex-1 flex-col flex-col-reverse md:flex-row">
                <section className="w-full p-20 ">
                    <h1 className=" text-xl text-gray-400">PortfolioPal</h1>
                    <div className="pt-40  md:flex hidden ">
                        <b className=" text-xl md:text-6xl">
                            Empower Your Investments with Ease: Streamline Your
                            Trading Experience with Me - Your All-in-One
                            Investment Tracker
                        </b>
                    </div>
                </section>
                <Flex className="w-full  justify-center items-center  bg-primary ">
                    <div className="p-20  flex flex-1 ">
                        <LoginForm />
                    </div>
                </Flex>
            </div>
        </Layout>
    );
};

export default Login;
