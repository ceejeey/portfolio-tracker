import { HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Login from './pages/Login';
import { ConfigProvider } from 'antd';
import Routes from '@/components/Login/Routes';

function App() {
    return <Routes />;
}

function WrappedAPP() {
    return (
        <ConfigProvider
            theme={{
                components: {
                    Button: {
                        colorPrimary: '#000',
                        algorithm: true, // Enable algorithm
                    },
                    Input: {
                        colorPrimary: '#000',
                        algorithm: true, // Enable algorithm
                    },
                    Layout: {
                        headerBg: '#fff',
                        // lightSiderBg: '#344afb',
                        siderBg: '#FAF7FD',
                        bodyBg: '#fff',
                        // colorBgBase: '#344afb',
                        colorBgContainer: '#344afb',
                        // colorPrimary: '#344afb',
                    },

                    Slider: {
                        colorBgBase: '#344afb',
                        colorBgContainer: '#344afb',
                        colorPrimary: '#344afb',
                    },
                },
                token: {
                    // Seed Token
                    colorPrimary: '#344afb',

                    borderRadius: 2,

                    // Alias Token
                    colorBgContainer: '#fff',
                },
            }}
        >
            <HashRouter>
                <App />
            </HashRouter>
        </ConfigProvider>
    );
}

export default WrappedAPP;
