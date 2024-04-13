import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="App">
      群组layout
      <Outlet />
    </div>
  );
};

export default Layout;
