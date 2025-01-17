import React from "react";
import { useState, useEffect } from "react";
import { ChevronRight, ChevronDown } from "lucide-react";
import CodeCard from "./CodeCard";
import Npm_Node_V from "./code/Npm_Node_V.jsx";
const Getting_Start = () => {
  // State to track the active tab
  const [activeTab, setActiveTab] = useState(1);

  // State to manage the visibility of the Guideline section
  const [isGuideline, setIsGuideline] = useState(false);

  // Function to handle tab clicks
  const handleTabClick = (tabNumber) => {
    setActiveTab(tabNumber);
  };

  // Function to handle smooth scrolling to sections
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Dynamic list of sidebar items
  const sidebarItems = [
    { id: 1, label: "Installation", sectionId: "installation" },
  ];

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-64">
        {/* Guideline Section */}
        <div
          className="cursor-pointer"
          onClick={() => {
            setIsGuideline(!isGuideline);
          }}
        >
          {isGuideline ? (
            <div className="flex items-center justify-between">
              <div className="font-medium">Getting Start</div>
              <ChevronDown className="w-4 h-4" />
            </div>
          ) : (
            <div className="flex items-center justify-between">
              <div className="font-medium">Getting Start</div>
              <ChevronRight className="w-4 h-4" />
            </div>
          )}
        </div>

        {/* Sidebar Items */}
        <div
          className={`${
            isGuideline ? "block" : "hidden"
          } pl-4 space-y-2 text-sm text-gray-600`}
        >
          {sidebarItems.map((item) => (
            <div
              key={item.id}
              className={`list-none cursor-pointer hover:text-secondaryColor ${
                activeTab === item.id ? "text-secondaryColor" : ""
              }`}
              onClick={() => {
                handleTabClick(item.id);
                handleScrollToSection(item.sectionId);
              }}
            >
              {item.label}
            </div>
          ))}
        </div>
      </aside>
    </div>
  );
};

export const Getting_Start_Content = () => {
  return (
    <div>
      <h1 className="text-xl font-bold m-3" id="installation"> Installation
      </h1>
      <p>
        We can setup react js using{" "}
        <span className="text-code-extra">Create App</span> and using{" "}
        <span className="text-code-extra">vite</span>
      </p>
      <p className="font-bold my-2">Step 1: Install Node.js and npm</p>
      <p className="pl-5 leading-8">
        Make sure you have Node.js and npm (Node Package Manager) installed on
        your machine. You can download and install them from nodejs.org. <br />{" "}
        To check if they are installed, run the following commands in your
        terminal:
      </p>
      <div className="flex justify-center my-10">
        <Npm_Node_V />
      </div>
    </div>
  );
};
export default Getting_Start;
