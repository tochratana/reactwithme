import React, { useState } from "react";
import { ChevronRight, ChevronDown, Logs, X } from "lucide-react";
import UnderstandTheBasic from "./guideline/UnderstandTheBasic";
import Getting_Start from "./getting-start/Getting_Start";

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

            {/* Start Getting Start */}
            <Getting_Start />
            {/* End Getting Start */}
          </div>
        </div>
      </aside>
    </>
  );
};
