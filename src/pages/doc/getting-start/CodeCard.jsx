import React, { useState } from "react";
import { Copy, CopyCheck } from "lucide-react";

const CodeCard = () => {
  const [isCopied, setIsCopied] = useState(false);

  // Function to handle copying text
  const handleCopy = () => {
    const codeText = "npm run dev"; // Text to copy
    navigator.clipboard
      .writeText(codeText)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => setIsCopied(false), 2000); // Reset copied state after 2 seconds
      })
      .catch((err) => {
        console.error("Failed to copy text: ", err);
      });
  };

  return (
    <div className="lg:w-[60%] bg-gray-800 shadow-2xl rounded-lg overflow-hidden relative">
      {/* Header Buttons */}
      <div id="header-buttons" className="py-3 px-4 flex">
        <div className="rounded-full w-3 h-3 bg-red-500 mr-2"></div>
        <div className="rounded-full w-3 h-3 bg-yellow-500 mr-2"></div>
        <div className="rounded-full w-3 h-3 bg-green-500"></div>
      </div>

      {/* Code Area */}
      <div
        id="code-area"
        className="py-4 px-4 mt-1 text-white text-xl flex gap-4"
      >
        <span className="text-yellow-300">npm</span>
        <span className="text-white">run</span>
        <span className="text-white">dev</span>
      </div>

      {/* Copy Button */}
      <div className="absolute top-0 right-0">
        <button
          onClick={handleCopy}
          className="text-secondaryColor font-bold py-2 px-4 rounded"
        >
          {isCopied ? <CopyCheck /> : <Copy />}
        </button>
      </div>
    </div>
  );
};

export default CodeCard;
