// import { Search, Github, Sun, Home, ChevronRight } from "lucide-react";
export const RightSidebar = () => {
  return (
    <aside className="hidden lg:block w-64 p-4 border-l border-gray-200 border-t border-gray-500/10">
      <div className="space-y-4">
        <h2 className="font-medium">Fast Track</h2>

        <div className="space-y-2 text-sm">
          <div className="text-gray-600">
            Docusaurus: Documentation Made Easy
          </div>
          <div className="text-gray-600">Migrating from v1</div>
          <div className="text-gray-600">Features</div>
          <div className="text-gray-600">Design principles</div>
          <div className="text-gray-600">Comparison with other tools</div>

          <div className="pl-4 space-y-2">
            <div className="text-gray-600">Gatsby</div>
            <div className="text-gray-600">Next.js</div>
            <div className="text-gray-600">VitePress</div>
            <div className="text-gray-600">MkDocs</div>
            <div className="text-gray-600">Docsify</div>
            <div className="text-gray-600">GitBook</div>
            <div className="text-gray-600">Jekyll</div>
          </div>

          <div className="text-gray-600">Staying Informed</div>
          <div className="text-gray-600">Something missing?</div>
        </div>
      </div>
    </aside>
  );
};
