import React from "react";
import Sidebar from "@/components/ui/Sidebar";
import Header from "../components/admindashboard/Header";
const Dashboardlayout = ({ children }) => {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      {/* Main Content Area */}
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-4 w-full h-full">{children}</main>
      </div>
    </div>
  );
};

export default Dashboardlayout;
