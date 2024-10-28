import React from "react";
import "../../style/about.scss";
import AboutSection from "../../Component/Section/AboutSection";
import NumbersSection from "../../Component/Section/NumbersSection";
import StorySection from "../../Component/Section/StorySection";
import TeamSection from "../../Component/Section/TeamSection";
import BlogSection from "../../Component/Section/BlogSection";

export default function AboutPage() {
  return (
    <div className="about__container__wrapper">
      <div id="about">
        <AboutSection />
      </div>
      <div id="numbers">
        <NumbersSection />
      </div>
      <div id="story">
        <StorySection />
      </div>
      <div id="team">
        <TeamSection />
      </div>
      <div id="blog">
        <BlogSection />
      </div>
    </div>
  );
}
