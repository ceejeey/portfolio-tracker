import { useUserStore } from '@/store/useUserStore';
import { Button, Checkbox, Form, Input } from 'antd';

type TFieldType = {
    username?: string;
    password?: string;
    remember?: string;
};

const LoginForm: React.FC = () => {
    const { setIsLoggedIn } = useUserStore();
    const USERNAME = import.meta.env.VITE_USERNAME as string;
    const PASSWORD = import.meta.env.VITE_PASSWORD as string;

    const authCredentialsValidation = (username: string, password: string) => {
        if (username === USERNAME && password === PASSWORD) setIsLoggedIn(true);
    };

    const onFinish = (values: TFieldType) => {
        const username = values?.username;
        const password = values?.password;
        try {
            if (username && password) {
                authCredentialsValidation(username, password);
            } else {
                throw Error;
            }
        } catch (error) {
            console.log('🚀 ~ onFinish ~ error:', error);
        }
    };

    const onFinishFailed = (errorInfo: any) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <Form
            className="flex flex-col flex-1 bg-white backdrop-blur-md rounded-3xl p-7 md:p-20 py-5 md:py-10  border-primary border-2 md:w-full max-w-full m-auto w-[20%]"
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="on"
            layout="vertical"
        >
            <div className="text">
                <h1 className="pb-2 md:pb-10 text-md md:text-xl">
                    PortfolioPal
                </h1>
                <p className="py-2 m-0 text-base md:text-2xl font-medium">
                    Sign in to PortfolioPal
                </p>
                <p className="pb-6 m-0 text-gray-400 font-light">
                    Not your device? Use a private or incognito window to sign
                    in.
                </p>
            </div>
            <div className="py-2">
                <Form.Item<TFieldType>
                    label="Username"
                    name="username"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your username!',
                        },
                    ]}
                >
                    <Input size="large" className="rounded-md" />
                </Form.Item>

                <Form.Item<TFieldType>
                    label="Password"
                    name="password"
                    rules={[
                        {
                            required: true,
                            message: 'Please input your password!',
                        },
                    ]}
                >
                    <Input.Password size="large" className="rounded-md" />
                </Form.Item>
            </div>
            <div className="flex justify-end items-end pt-10 flex-col-reverse  md:justify-end ">
                <Form.Item<TFieldType>
                    name="remember"
                    valuePropName="checked"
                    wrapperCol={{ offset: 100, span: 200 }}
                >
                    <Checkbox className="text-xs md:text-md p-0">
                        Remember me
                    </Checkbox>
                </Form.Item>

                <Form.Item className="flex w-full gap:5 md:gap-0 justify-end">
                    <Button
                        type="primary"
                        htmlType="submit"
                        size={'large'}
                        className="  px-12 md:px-20 rounded-lg  "
                    >
                        Submit
                    </Button>
                </Form.Item>
            </div>
        </Form>
    );
};

export default LoginForm;
