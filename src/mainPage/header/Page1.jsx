import React from "react";
import ContentSection from "../content/ContentSection";
import Footer from "../footer/Footer";
import Head from "./Head";
import Styles from "./_header.module.css";

const Page1 = () => {
  return (
    <div className={Styles.Page1}>
      <Head />
      <ContentSection />
      <ContentSection />
      <ContentSection />
      <ContentSection />
      <Footer />
    </div>
  );
};

export default Page1;
