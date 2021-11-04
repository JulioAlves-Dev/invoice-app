import React from "react";
import { Link } from "react-router-dom";
import styles from "./Header.module.css";
import logo from "./../Assets/logo.svg";
import { ReactComponent as Moon } from "./../Assets/icon-moon.svg";
import { ReactComponent as Sun } from "./../Assets/icon-sun.svg";
import user from "./../Assets/image-avatar.jpg";

import { GlobalContext } from "../Context/GlobalMode";

const Header = () => {
  const global = React.useContext(GlobalContext);

  return (
    <header className={styles.Header}>
      <div className={styles.Logo}>
        <Link to="/">
          <img src={logo} alt="Logo" className={styles.LogoImg} />
        </Link>
      </div>

      <div className={styles.ModeUser}>
        <div className={styles.Mode}>
          <button
            onClick={() => {
              global.setMode((mode) => {
                window.localStorage.setItem("mode", mode ? "light" : "dark");
                return !mode;
              });
            }}
          >
            {global.mode ? (
              <span>
                <Sun />
              </span>
            ) : (
              <span>
                <Moon />
              </span>
            )}
          </button>
        </div>
        <div className={styles.UserPhoto}>
          <div className={styles.Photo}>
            <img src={user} alt="User" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
