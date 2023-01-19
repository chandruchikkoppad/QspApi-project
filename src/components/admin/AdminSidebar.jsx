import React from "react";
import Styles from "./Admin.module.css";
import { NavLink } from "react-router-dom";
import { AiFillDashboard } from "react-icons/ai";
import { MdOutlineLibraryBooks } from "react-icons/md";
import { SiBootstrap } from "react-icons/si";
const AdminSidebar = () => {
  return (
    <div className={Styles.sidebarProfile}>
      <nav>
        <ul>
          <li>
            <NavLink to="/admin" activeClassName="active">
              <span>
                <AiFillDashboard />
              </span>{" "}
              My DashBoard
            </NavLink>
          </li>
          <li>
            <NavLink to="/admin/bootcamp" activeClassName="active">
              <span>
                <SiBootstrap />
              </span>{" "}
              Create-BootCamp
            </NavLink>
          </li>

          <li>
            <NavLink to="/admin/bootcamps" activeClassName="active">
              <span>
                <MdOutlineLibraryBooks />
              </span>
              View-BootCamps
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
