import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="Layout">
      公共layout
      <Outlet />
    </div>
  );
};

export default Layout;
