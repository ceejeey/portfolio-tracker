import AuthenticatedLayout from '@/layout/AuthenticatedLayout';
import Layout from '@/layout/Layout';
import Home from '@/pages/Home';
import Login from '@/pages/Login';
import NotFound from '@/pages/NotFound';
import { useUserStore } from '@/store/useUserStore';
import { useEffect, useState } from 'react';
import { RouteObject, useNavigate, useRoutes } from 'react-router-dom';

const Routes = () => {
    const [currentRouteObj, setCurrentRouteObj] = useState<RouteObject[]>([]);
    const routes = useRoutes(currentRouteObj);
    const { isLoggedIn } = useUserStore();

    const navigate = useNavigate();

    useEffect(() => {
        if (isLoggedIn) {
            setCurrentRouteObj([routeObject.auth]);
            navigate(`/`, { replace: true });
        } else {
            setCurrentRouteObj([routeObject.unAuth]);
            navigate(`/Login`, { replace: true });
        }
    }, [isLoggedIn]);

    const routeObject = {
        auth: {
            path: '/',
            element: <AuthenticatedLayout />,
            children: [
                { path: '/', element: <Home /> },
                { path: ':stock', element: <Home /> },
                { path: '/Login', element: <Login /> },
                { path: '*', element: <NotFound /> },
            ],
        },
        unAuth: {
            path: '/',
            element: <Layout />,
            children: [
                { path: '/Login', element: <Login /> },
                { path: '*', element: <NotFound /> },
            ],
        },
    };
    return routes;
};

export default Routes;
