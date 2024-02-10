import { FC } from 'react';
import { Layout } from 'antd';
import LoginForm from '@/components/Login/LoginForm';

const Login: FC = () => {
    return (
        <Layout className="h-full flex max-w-[100vw] overflow-hidden">
            <div className="flex flex-col md:flex-row h-full flex-1">
                <section className="w-full md:min-w-[55%] p-4 md:p-20 min-h-[100vh] hidden md:flex md:flex-col">
                    <h1 className=" text-xl text-gray-400">PortfolioPal</h1>
                    <div className="pt-40  md:flex hidden ">
                        <b className=" text-xl md:text-6xl">
                            Empower Your Investments with Ease: Streamline Your
                            Trading Experience with Me - Your All-in-One
                            Investment Tracker
                        </b>
                    </div>
                </section>
                <section className="w-full  justify-center items-center bg-primary  h-[100vh] flex  ">
                    <div className="p-10  md:p-20 flex flex-1 m-auto">
                        <LoginForm />
                    </div>
                </section>
            </div>
        </Layout>
    );
};

export default Login;
