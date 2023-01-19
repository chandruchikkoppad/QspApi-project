import React from "react";
import Styles from "./Admin.module.css";
import { Outlet } from "react-router-dom";

const AdminMainBlock = () => {
  return (
    <div className={Styles.mainProfileBlock}>
      <Outlet />
    </div>
  );
};

export default AdminMainBlock;
