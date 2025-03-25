
import { Outlet } from "react-router-dom";
import BottomNavigation from "../navigation/BottomNavigation";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      <main className="flex-1 container mx-auto px-4 pb-16">
        <Outlet />
      </main>
      <BottomNavigation />
    </div>
  );
};

export default MainLayout;
