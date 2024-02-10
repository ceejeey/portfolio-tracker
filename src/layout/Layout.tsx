import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className="flex flex-1 min-h-[100vh] min-w-full bg-black">
            {<Outlet />}
        </div>
    );
};

export default Layout;
