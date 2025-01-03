import React from "react";
import SidebarItem from "./Sidebaritems"; 
import { routes } from "./routes"; // Assuming you have a routes file

const Sidebar = () => {
  return (
    <nav className="h-full text-white border-r flex flex-col w-full">
      <div className="flex flex-col ">
        {routes.map((route) => (
          <SidebarItem
            key={route.href}
            icon={route.icon}
            label={route.label}
            href={route.href}
          />
        ))}
      </div>
    </nav>
  );
};

export default Sidebar;
