import { Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div>
      <main className="overflow-x-clip">
        <Outlet></Outlet>
      </main>
    </div>
  );
};

export default RootLayout;
