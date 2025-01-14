import { useState, useEffect } from "react";

const sections = [
  { id: "getting-started", title: "Getting Started" },
  { id: "installation", title: "Installation" },
  { id: "usage", title: "Usage" },
  { id: "commend", title: "Commend" },
];

const Apps = () => {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const handleScroll = () => {
      const offsets = sections.map((section) => {
        const element = document.getElementById(section.id);
        return { id: section.id, offsetTop: element.offsetTop };
      });

      const scrollPosition = window.scrollY + window.innerHeight / 3;

      const currentSection = offsets.find(
        (section) =>
          scrollPosition >= section.offsetTop &&
          (!offsets[offsets.indexOf(section) + 1] ||
            scrollPosition < offsets[offsets.indexOf(section) + 1].offsetTop)
      );

      setActiveSection(currentSection?.id || "");
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="flex">
      {/* Sidebar */}
      <aside className="w-1/4 h-screen sticky top-0 p-4 bg-gray-100">
        <ul>
          {sections.map((section) => (
            <li key={section.id}>
              <a
                href={`#${section.id}`}
                className={`block p-2 ${
                  activeSection === section.id
                    ? "text-red-500 border-l-4 border-red-500"
                    : "text-black"
                }`}
              >
                {section.title}
              </a>
            </li>
          ))}
        </ul>
      </aside>

      {/* Main Content */}
      <main className="w-3/4 p-8 space-y-16">
        {sections.map((section) => (
          <section
            key={section.id}
            id={section.id}
            className="h-screen border border-gray-200 p-4"
          >
            <h2 className="text-2xl font-bold">{section.title}</h2>
            <p>Content for {section.title}...</p>
          </section>
        ))}
      </main>
    </div>
  );
};

export default Apps;
