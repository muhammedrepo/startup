import React from "react";
import { TopSection } from "../../components";
import { ScrollToTop } from "../../constants";
import Support from "../HomePage/Support";

const Contact = () => {
  return (
    <>
      <ScrollToTop />
      <TopSection title="Contact Page" subtitle="Contact page" />
      <Support />
    </>
  );
};

export default Contact;
