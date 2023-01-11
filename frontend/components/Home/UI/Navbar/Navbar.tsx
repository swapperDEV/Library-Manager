import React from "react";
import { FaBookOpen } from "react-icons/fa";
import { Button } from "../Button/Button";
import styles from "./navbar.module.scss";
export const Navbar = () => {
  return (
    <>
      <nav className={styles.nav}>
        <header>
          <a>Lib</a> Manager <FaBookOpen />
        </header>
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>I{"'"}m Customer</li>
          <li>I{"'"}m Library admin</li>
          <li>Sign Library</li>
        </ul>
        <div className={styles.navBut}>
          <Button>
            <>Beta</>
          </Button>
        </div>
      </nav>
    </>
  );
};
