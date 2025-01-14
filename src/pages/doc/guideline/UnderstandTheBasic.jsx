import React from "react";
import { useState } from "react";
import { ChevronRight, ChevronDown, Logs, X } from "lucide-react";

const UnderstandTheBasic = () => {
  // TODO handle scroll section
  const handleScrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const [isGuideline, setIsGuideline] = useState(false);
  return (
    <div>
      <div
        className="cursor-pointer"
        onClick={() => {
          setIsGuideline(!isGuideline);
        }}
      >
        {isGuideline ? (
          <div className="flex items-center justify-between">
            <div className="font-medium">Guideline</div>
            <ChevronDown className="w-4 h-4" />
          </div>
        ) : (
          <div className="flex items-center justify-between">
            <div className="font-medium">Guideline</div>
            <ChevronRight className="w-4 h-4" />
          </div>
        )}
      </div>

      <div
        className={`${
          isGuideline ? "block" : "hidden"
        } pl-4 space-y-2 text-sm text-gray-600`}
      >
        <li
          className="list-none cursor-pointer hover:text-secondaryColor"
          onClick={() => handleScrollToSection("understandthebasic")}
        >
          Understand the Basics
        </li>
        <li
          className="list-none cursor-pointer hover:text-secondaryColor"
          onClick={() => handleScrollToSection("startwithreactbasic")}
        >
          Start with React Basics
        </li>
        <li
          className="list-none cursor-pointer hover:text-secondaryColor"
          onClick={() => handleScrollToSection("understandreactcoreconcepts")}
        >
          Understand React Core Concepts
        </li>
        <li className="list-none cursor-pointer hover:text-secondaryColor">
          Style Your React App
        </li>
        <li className="list-none cursor-pointer hover:text-secondaryColor">
          Manage State Efficiently
        </li>
        <li className="list-none cursor-pointer hover:text-secondaryColor">
          API Integration
        </li>
        <li className="list-none cursor-pointer hover:text-secondaryColor">
          Explore Advanced Topics
        </li>
        <li className="list-none cursor-pointer hover:text-secondaryColor">
          Build Projects
        </li>
        <li className="list-none cursor-pointer hover:text-secondaryColor">
          Learn Backend Integration
        </li>
        <li className="list-none cursor-pointer hover:text-secondaryColor">
          Deploy Your Applications
        </li>
        <li className="list-none cursor-pointer hover:text-secondaryColor">
          Recommended Learning Resources
        </li>
      </div>
    </div>
  );
};

export const DetailUderstandTheBasic = () => {
  return (
    <div>
      <h1 className="text-xl font-bold m-3" id="understandthebasic">
        Uderstand The Basic
      </h1>
      <p>Before diving into React, ensure you’re comfortable with:</p>
      <ul className="list-disc pl-5 leading-8">
        <li>HTML/CSS: Semantic HTML and responsive design principles.</li>
        <li>JavaScript (ES6+):</li>
        <ul className="">
          <li>let, const, var, template literals</li>
          <li>Arrow functions, destructuring</li>
          <li>Promises and async/await</li>
          <li>Modules (import and export)</li>
          <li>
            Array methods like <span className="text-code-extra">.map()</span>,
            <span className="text-code-extra">.reduce()</span>,
            <span className="text-code-extra">.filter()</span>
          </li>
        </ul>
      </ul>
      <h1 className="text-xl font-bold m-3" id="startwithreactbasic">
        Start with React Basic
      </h1>
      <p>Learn the core concepts of React step by step:</p>
      <ul className="list-disc pl-5 leading-8">
        <li>
          Create React App: Learn how to set up a project using{" "}
          <span className="text-code-extra">npx create-react-app</span> or Vite.
        </li>
        <li>
          JSX: Understand how JSX works and how it compiles to JavaScript.
        </li>
        <li>Components:</li>
        <ul className="list-item">
          <li>Functional components (focus more on these).</li>
          <li>Props: Passing data between components.</li>
          <li>State: Managing dynamic data with useState.</li>
        </ul>
        <li>
          Event Handling: Learn how to handle events like clicks or form
          submissions.
        </li>
      </ul>
      <h1 className="text-xl font-bold m-3" id="startwithreactbasic">
        Understand React Core Concepts
      </h1>
      <p>Dive deeper into key concepts:</p>
      <ul className="list-disc pl-5 leading-8">
        <li>React Hooks:</li>
        <ul>
          <li>
            <span className="text-code-extra">useState</span>,{" "}
            <span className="text-code-extra">useEffect</span> (state and
            lifecycle).
          </li>
          <li>
            <span className="text-code-extra">useContext</span> (state sharing
            across components).
          </li>
        </ul>
        <li>React Router: Learn to navigate between pages.</li>
        <li>Forms: Handling inputs, validation, and form submission.</li>
        <li>Conditional Rendering: Render elements based on conditions.</li>
        <li>Lists and Keys: Dynamically render lists using .map().</li>
      </ul>
      <p>Practical Task: Build a simple Todo App.</p>
      <h1 className="text-xl font-bold m-3" id="startwithreactbasic">
        Style Your React App
      </h1>
      <p>Use Tailwind CSS (your favorite) to style your projects:</p>
      <ul className="list-disc pl-5 leading-8">
        <li>Set up Tailwind CSS in a React project.</li>
        <li>Use utility classes to style components dynamically.</li>
        <p>Resources</p>
        <li>
          <a href="https://tailwindcss.com/docs/installation">
            Tailwind CSS + React Guide
          </a>
        </li>
      </ul>
      <h1 className="text-xl font-bold m-3" id="startwithreactbasic">
        Manage State Efficiently
      </h1>
      <p>Learn advanced state management:</p>
      <ul>
        <li>Context API: Share state across multiple components.</li>
        <li>
          Third-party Libraries: Explore Redux Toolkit (if needed for larger
          apps).
        </li>
      </ul>
      <p>Practical Task: Create a shopping cart system.</p>
      <h1 className="text-xl font-bold m-3" id="startwithreactbasic">
        API Integration
      </h1>
      <p>Learn to fetch and manipulate data from external APIs:</p>
      <ul className="list-disc leading-8 pl-5">
        <li>Fetch API or Axios: Make HTTP requests.</li>
        <li>Understand the useEffect hook for side effects.</li>
        <li>Handle errors and loading states.</li>
      </ul>
      <p>
        Practical Task: Build a Weather App that fetches data from an API like
        OpenWeatherMap.
      </p>
      <h1 className="text-xl font-bold m-3" id="startwithreactbasic">
        Explore Advanced Topics
      </h1>
      <ul className="list-disc leading-8 pl-5">
        <li>Code Splitting: Optimize app performance.</li>
        <li>Custom Hooks: Create reusable logic for your apps.</li>
        <li>Testing: Write unit tests using Jest or React Testing Library.</li>
        <li>
          React Performance Optimization: Learn about React.memo, useMemo, and
          useCallback.
        </li>
      </ul>
      <h1 className="text-xl font-bold m-3" id="startwithreactbasic">
        Build Projects
      </h1>
      <p>
        Building projects will solidify your learning. Start small and gradually
        work on complex apps:
      </p>
      <ul className="list-decimal leading-8 pl-5">
        <li>Portfolio Website</li>
        <li>E-commerce Website (your favorite project idea 🛒)</li>
        <li>Social Media Dashboard</li>
      </ul>
    </div>
  );
};

export default UnderstandTheBasic;
