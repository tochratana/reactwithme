import React from "react";
import { MainContent } from "./MainContent";
import { Sidebar } from "./Sidebar";
import { RightSidebar } from "./RightSidebar";
const DocPage = () => {
  return (
    <div className="min-h-screen bg-white">
      <div className="flex">
        <Sidebar />
        <MainContent />
        <RightSidebar />
      </div>
    </div>
  );
};

export default DocPage;
