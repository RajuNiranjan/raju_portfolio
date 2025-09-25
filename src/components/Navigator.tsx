import { navigators } from "@/utils/data";
import React, { useState, useEffect } from "react";

export const Navigator = () => {
  const [activeSection, setActiveSection] = useState("about");

  useEffect(() => {
    const handleScroll = () => {
      const sections = navigators.map((nav) => document.getElementById(nav.id));
      const scrollPosition = window.scrollY + 200;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navigators[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="fixed top-1/2 right-10 z-50 flex flex-col items-end gap-1 -translate-y-1/2">
      {navigators.map((item) => (
        <div key={item.id} className="flex items-center group">
          <span
            onClick={() => scrollToSection(item.id)}
            className={`
              cursor-pointer
              transition-all duration-300 ease-in-out
              ${
                activeSection === item.id
                  ? "font-semibold text-sm  text-black"
                  : "text-xs text-gray-400"
              }
            `}
          >
            {item.name} -
          </span>
        </div>
      ))}
    </div>
  );
};
