import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Breadcrumb from "@/components/Common/Breadcrumb";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Seattle Permits Data Analysis",
  description: "This is a project for DSBI.",
  // other metadata
};

const AboutPage = () => {
  return (
    <>
      <Breadcrumb pageName="About Page" description="..." />
      <AboutSectionOne />
      <AboutSectionTwo />
    </>
  );
};

export default AboutPage;
