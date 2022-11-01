import React, { useContext } from "react";
import {
  HomeOutlined,
  DarkModeOutlined,
  WbSunnyOutlined,
  GridViewOutlined,
  NotificationsOutlined,
  EmailOutlined,
  PersonOutline,
  SearchOutlined,
} from "@mui/icons-material";

import "./navbar.scss";
import { Link } from "react-router-dom";
import { DarkModeContext } from "../../context/darkModeContext";
import { AuthContext } from "../../context/authContext";

const Navbar = () => {
  const { toggleDarkMode, darkMode } = useContext(DarkModeContext);
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <span>lamasocial</span>
        </Link>
        <HomeOutlined />
        {darkMode ? (
          <WbSunnyOutlined onClick={toggleDarkMode} />
        ) : (
          <DarkModeOutlined onClick={toggleDarkMode} />
        )}
        <GridViewOutlined />
        <div className="search">
          <SearchOutlined />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <div className="right">
        <PersonOutline />
        <EmailOutlined />
        <NotificationsOutlined />
        <div className="user">
          <img src={currentUser.profilePic} alt="profile image" />
          <span>{currentUser.name}</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
