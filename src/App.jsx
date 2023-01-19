import React from "react";
import Head from "./mainPage/header/Head";
import "./global.css";
import Page1 from "./mainPage/header/Page1";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignUp from "./components/auth/SignUp";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Login from "./components/auth/Login";
import BootCamp from "./components/auth/BootCamp";
import CreateCourses from "./components/auth/CreateCourses";
import AdminRoute from "./Routes/AdminRoute";
import Admin from "./components/admin/Admin";
import AdminDashboard from "./components/admin/AdminDashboard";
import Users from "./components/admin/Users";
import Navbar from "./mainPage/header/Navbar";
import GetCourses from "./components/admin/GetCourses";
import GetBootCamps from "./components/admin/GetBootCamps";

const App = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Page1 />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />

        <Route
          path="/admin"
          element={
            <AdminRoute>
              <Admin />
            </AdminRoute>
          }
        >
          <Route index element={<AdminDashboard />} />
          <Route path="bootcamps/:id/course" element={<CreateCourses />} />
          <Route path="bootcamps/:id/courses" element={<GetCourses />} />
          <Route path="bootcamp" element={<BootCamp />} />
          <Route path="bootcamps" element={<GetBootCamps />} />
          <Route path="users" element={<Users />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
