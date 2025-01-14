import React, { useState } from "react";
import { ChevronRight, ChevronDown, Logs, X } from "lucide-react";
import UnderstandTheBasic from "./guideline/UnderstandTheBasic";

// import handleScrollToSection from "./MainContent";
export const Sidebar = () => {
  const [isShowSideBar, setIsShowSideBar] = useState(false);
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [isGettingStart, setIsGettingStart] = useState(false);

  return (
    <>
      {/* Button click to show side bar */}
      <div
        onClick={() => {
          setIsShowSideBar(!isShowSideBar);
        }}
        className="cursor-pointer m-auto absolute right-5 bottom-10 rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75 block lg:hidden"
      >
        {isShowSideBar ? <X /> : <Logs />}
      </div>
      {/* It use hidden absolute bg-white*/}
      <aside
        className={`${
          isShowSideBar ? "block absolute bg-white" : "hidden"
        } lg:block w-64 min-h-screen border-r border-gray-200 p-4 border-t border-gray-500/10`}
      >
        <div className="space-y-4">
          <div
            onClick={() => handleScrollToSection("section1")}
            className="font-medium cursor-pointer"
          >
            Introduction
          </div>

          <div className="space-y-2">
            {/* Start GuideLine */}
            <UnderstandTheBasic />
            {/* End of Guideline */}

            <div
              className="cursor-pointer"
              onClick={() => {
                setIsGettingStart(!isGettingStart);
              }}
            >
              {isGettingStart ? (
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

            <div
              className={`${
                isGettingStart ? "block" : "hidden"
              } pl-4 space-y-2 text-sm text-gray-600`}
            >
              <li
                className="list-none cursor-pointer hover:text-secondaryColor"
                onClick={() => handleScrollToSection("installation")}
              >
                Installation
              </li>
              <li className="list-none cursor-pointer hover:text-secondaryColor">
                Configuration
              </li>
              <li className="list-none cursor-pointer hover:text-secondaryColor">
                Playground
              </li>
              <li className="list-none cursor-pointer hover:text-secondaryColor">
                TypeScript Support
              </li>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};
