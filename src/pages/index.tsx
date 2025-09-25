import React from "react";
import { ContactMe } from "@/components/ContactMe";
import { WorkExperience } from "@/components/WorkExperience";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import { Education } from "@/components/Education";
import { Navigator } from "@/components/Navigator";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";

const Main = () => {
  return (
    <main>
      <Navigator />
      <Header />
      <Hero />
      <Skills />
      <div className="grid grid-cols-2 gap-4 px-20">
        <WorkExperience />
        <Education />
      </div>
      <Projects />
      <Services />
      <ContactMe />
    </main>
  );
};

export default Main;
