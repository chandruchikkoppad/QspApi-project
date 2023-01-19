import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { toast } from "react-toastify";
import AxiosInstance from "../Apis/AxiosInstance";

const AdminRoute = ({ children }) => {
  let [role, setRole] = useState("");
  let token = window.localStorage.getItem("token");
  if (token) {
    let fetchData = async () => {
      try {
        let { data } = await AxiosInstance.get("/auth/me", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        let { role } = data.data;
        // console.log(role);
        setRole(role);
      } catch (error) {
        toast.error(error.code);
      }
    };
    fetchData();
    // console.log(role);
    if (
      role !== "user" ||
      (role !== null && (role === "admin" || role === "publisher"))
    ) {
      return <>{children}</>;
    } else {
      toast.warn("You'r not authorized");
      return <Navigate to="/" />;
    }
  } else {
    return <Navigate to="/login" />;
  }
};

export default AdminRoute;
