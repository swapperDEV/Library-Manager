import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext } from "react";
import { FaBook, FaHome, FaQuoteLeft, FaTable, FaUsers } from "react-icons/fa";
import { LightSwitch } from "../../UI/Navbar/Elements/LightSwitch";
import { PageLogo } from "../../UI/Navbar/Elements/PageLogo";
import styles from "./navbar.module.scss";
export const ManagerNavbar = ({
  content,
  setContent,
}: {
  content: string;
  setContent: Function;
}) => {
  return (
    <div className={styles.navbar}>
      <nav>
        <PageLogo />
        <div className={styles.navigation}>
          <ul>
            <Link href="/">
              <li>
                <FaHome />
                Home
              </li>
            </Link>
            <li
              onClick={() => setContent("dashboard")}
              className={content === "dashboard" ? styles.active : styles.none}
            >
              <FaTable /> Dashboard
            </li>
            <li
              onClick={() => setContent("loan")}
              className={content === "loan" ? styles.active : styles.none}
            >
              <FaQuoteLeft /> Loan Book
            </li>
            <li
              onClick={() => setContent("books")}
              className={content === "books" ? styles.active : styles.none}
            >
              <FaBook />
              Books
            </li>
            <li
              onClick={() => setContent("members")}
              className={content === "members" ? styles.active : styles.none}
            >
              <FaUsers />
              Members
            </li>
          </ul>
        </div>
        <div className={styles.switch}>
          <LightSwitch />
        </div>
      </nav>
    </div>
  );
};
