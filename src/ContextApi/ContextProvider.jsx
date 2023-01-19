import React, { createContext, useState } from "react";
import AxiosInstance from "../Apis/AxiosInstance";
export let ContextApi = createContext();

const ContextProvider = ({ children }) => {
  let [user, setUser] = useState({
    name: "",
    role: "",
  });
  let token = window.localStorage.getItem("token");

  let userDetails = async () => {
    try {
      let { data } = await AxiosInstance.get("/auth/me", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      console.log(data.data.role);
      setUser(...user);
    } catch (error) {
      console.log(error.code);
    }
  };
  userDetails();
  return <ContextApi.Provider value={user}>{children}</ContextApi.Provider>;
};

export default ContextProvider;
