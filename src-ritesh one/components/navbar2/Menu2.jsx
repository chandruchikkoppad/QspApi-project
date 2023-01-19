import React from "react";
import Styles from "./_navbar2.module.css";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";

const Menu2 = () => {
  return (
    <section id={Styles.nav1}>
      <article className={Styles.nav}>
        <div>
          <a href="">
            <img
              src="https://geeks.madrasthemes.com/wp-content/uploads/2021/09/logo.svg"
              alt="Geeks"
            />
          </a>
        </div>
        <div className={Styles.sel1}>
          <select name="Browse" id="browse">
            <option value="">Browse</option>
            <option value="">Web Development</option>
            <option value="">Design</option>
            <option value="">Mobile App</option>
            <option value="">IT Software</option>
            <option value="">Marketing</option>
            <option value="">Music</option>
            <option value="">Lifestyle</option>
            <option value="">Business</option>
            <option value="">Photography</option>
          </select>
        </div>

        <div className={Styles.sel2}>
          <select name="Browse" id="browse">
            <option value="">Landings</option>
            <option value="">Web Development</option>
            <option value="">Design</option>
            <option value="">Mobile App</option>
            <option value="">IT Software</option>
            <option value="">Marketing</option>
            <option value="">Music</option>
            <option value="">Lifestyle</option>
            <option value="">Business</option>
            <option value="">Photography</option>
          </select>
        </div>

        <div className={Styles.sel3}>
          <select name="Browse" id="browse">
            <option value="">Pages</option>
            <option value="">Web Development</option>
            <option value="">Design</option>
            <option value="">Mobile App</option>
            <option value="">IT Software</option>
            <option value="">Marketing</option>
            <option value="">Music</option>
            <option value="">Lifestyle</option>
            <option value="">Business</option>
            <option value="">Photography</option>
          </select>
        </div>

        <div className={Styles.sel4}>
          <select name="Browse" id="browse">
            <option value="">Accounts</option>
            <option value="">Web Development</option>
            <option value="">Design</option>
            <option value="">Mobile App</option>
            <option value="">IT Software</option>
          </select>
        </div>

        <div className={Styles.sel5}>
          <select name="Browse" id="browse">
            <option value="">...</option>
            <option value="">Documentation</option>
            <option value="">Changelog</option>
          </select>
        </div>
        <div className={Styles.searchBar}>
          <Paper
            component="form"
            sx={{
              p: "2px 4px",
              display: "flex",
              alignItems: "center",
              width: 250,
            }}
          >
            <InputBase
              sx={{ ml: 1, flex: 1 }}
              placeholder="Search Courses"
            />
            <IconButton type="button" sx={{ p: "10px" }} aria-label="search">
              {/* <SearchIcon /> */}
            </IconButton>

          </Paper>
        </div>
      </article>
    </section>
  );
};

export default Menu2;
