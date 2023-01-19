import React from "react";
import Styles from "./_welcome.module.css";

const Welcome = () => {
  return (
    <section id={Styles.banner}>
      <article className={Styles.bannerWid}>
        <div className={Styles.bannerTitle}>
          <h2>
            Welcome to Geeks UI
            <br />
            Learning Application
          </h2>
          <p>
            Hand-picked Instructor and expertly crafted
            <br />
            courses, designed for the modern students and
            <br /> entrepreneur.
          </p>
          <button className={Styles.CourseBtn}>Browser Courses</button>
          <button className={Styles.InstructorBtn}>Are You Instructor?</button>
        </div>
        <div>
          <img
            src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/hero-img.png"
            alt=""
            className={Styles.hero}
          />
        </div>
      </article>
    </section>
  );
};

export default Welcome;
