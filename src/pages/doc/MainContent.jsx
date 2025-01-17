import { Home } from "lucide-react";
import Intro from "./introduction/Intro";
// import Installation from "./getting-start/Installation";
import { DetailUderstandTheBasic } from "./guideline/UnderstandTheBasic";
import { Getting_Start_Content } from "./getting-start/Getting_Start";
export const MainContent = () => {
  // Handle scroll

  return (
    // h-[calc(100vh-3.5rem)]
    <main className="flex-1 p-8 max-w-4xl h-[calc(100vh)] overflow-y-auto scrollbar-extra-thin border-t border-gray-500/10">
      <div className="flex items-center space-x-2 text-sm text-gray-600 mb-4">
        <Home className="w-4 h-4" />
        <span>›</span>
        <span>Introduction</span>
      </div>

      <div className="mb-4">Version: 3.7.0</div>

      <h1 className="text-4xl font-bold mb-8" id="section1">
        Introduction
      </h1>
      <Intro />
      <h1 className="text-4xl font-bold mb-8" id="section1">
        Guideline
      </h1>
      <DetailUderstandTheBasic />
      <h1 className="text-4xl font-bold mb-8" id="section1">
        Getting Start
      </h1>
      <Getting_Start_Content />
    </main>
  );
};
