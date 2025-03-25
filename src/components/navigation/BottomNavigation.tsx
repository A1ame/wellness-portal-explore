
import { Link, useLocation } from "react-router-dom";
import { Dumbbell, Utensils, User } from "lucide-react";

const BottomNavigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 py-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-around items-center">
          <Link to="/" className={`nav-item ${isActive("/") ? "nav-item-active" : ""}`}>
            <User className="h-6 w-6" />
            <span>Dashboard</span>
          </Link>
          
          <Link to="/exercises" className={`nav-item ${isActive("/exercises") ? "nav-item-active" : ""}`}>
            <Dumbbell className="h-6 w-6" />
            <span>Exercises</span>
          </Link>
          
          <Link to="/nutrition" className={`nav-item ${isActive("/nutrition") ? "nav-item-active" : ""}`}>
            <Utensils className="h-6 w-6" />
            <span>Nutrition</span>
          </Link>
          
          <Link to="/profile" className={`nav-item ${isActive("/profile") ? "nav-item-active" : ""}`}>
            <User className="h-6 w-6" />
            <span>Profile</span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BottomNavigation;
