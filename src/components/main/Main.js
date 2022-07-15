import React from "react";
import AboutDesign from "./AboutDesign";
import AboutDevelopment from "./AboutDevelopment";
import AboutPage from "./AboutPage";
import DiscussProject from "./DiscussProject";
import Exemples from "./Exemples";
import MoreInformations from "./MoreInformations";

const Main = () => {
  return (
    <main>
      <AboutPage />
      <AboutDesign />
      <AboutDevelopment />
      <Exemples />
      <MoreInformations />
      <DiscussProject />
    </main>
  );
};

export default Main;
