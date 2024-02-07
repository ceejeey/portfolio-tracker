import React from "react";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-1 min-h-full min-w-full bg-black">
      {<Outlet />}
    </div>
  );
};

export default Layout;
