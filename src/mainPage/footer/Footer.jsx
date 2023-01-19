import React from "react";
import Styles from "./_footer.module.css";

const Footer = () => {
  return (
    <section className={Styles.footersection}>
      <div className={Styles.CopyRight}>
        <p>© 2022 Geeks. All Rights Reserved</p>
      </div>
      <div className={Styles.TermsCondition}>
        <ul>
          <li>About</li>
          <li>Terms & Condition</li>
          <li>Privacy Policy</li>
          <li>Contact</li>
        </ul>
      </div>
    </section>
  );
};

export default Footer;
