import React from "react";

import HomeHero from "../components/HomeHero";
import HomeSectionOne from "../components/HomeSectionOne";
import HomeSectionTwo from "../components/HomeSectionTwo";
import JoinDiscordSection from "../components/JoinDiscordSection";

const HomePage: React.FC = () => {
  return (
    <>
      <HomeHero />

      <HomeSectionOne />

      <HomeSectionTwo />

      <JoinDiscordSection />
    </>
  );
};

export default HomePage;
