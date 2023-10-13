import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <main className="h-screen bg-[#1C1A24]">
      <Outlet />
    </main>
  );
};
