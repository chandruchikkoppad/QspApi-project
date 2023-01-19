import React from "react";
import Styles from "./_navbar2.module.css";

const SignInUp = () => {
  return (
    <section className={Styles.btns}>
      <div>
        <button className={Styles.signin}>Sign In</button>
      </div>
      <div>
        <button className={Styles.signup}>Sign Up</button>
      </div>
    </section>
  );
};

export default SignInUp;
