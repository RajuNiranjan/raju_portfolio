import { ContactMe } from "@/components/ContactMe";
import WorkExperience from "@/components/ExperienceTimeLine";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Services } from "@/components/Services";
import React from "react";

const Main = () => {
  return (
    <main>
      <Header />
      <Hero />
      <WorkExperience />
      <Services />
      <ContactMe />
    </main>
  );
};

export default Main;
