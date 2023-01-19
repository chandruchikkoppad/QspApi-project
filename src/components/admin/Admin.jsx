import React from "react";
import Navbar from "../../mainPage/header/Navbar";
import Styles from "./Admin.module.css";
import AdminMainBlock from "./AdminMainBlock";
import AdminSidebar from "./AdminSidebar";

const Admin = () => {
  return (
    <section id={Styles.profileBlock}>
      <article>
        <AdminSidebar />
        <AdminMainBlock />
      </article>
    </section>
  );
};

export default Admin;
