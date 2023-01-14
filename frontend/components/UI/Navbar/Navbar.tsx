import React from "react";
import { useRouter } from "next/router";
import { FaBookOpen } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import styles from "./navbar.module.scss";
import { useTheme } from "next-themes";

export const Navbar = () => {
  const router = useRouter();
  const { theme, setTheme } = useTheme();

  const toggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else [setTheme("light")];
  };
  const navbar = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About",
      link: "/about",
    },
    {
      text: "I'm Customer",
      link: "/login/customer",
    },
    {
      text: "I'm Library Admin",
      link: "/login/admin",
    },
    {
      text: "Sign Library",
      link: "/sign",
    },
  ];
  return (
    <>
      <nav className={styles.nav}>
        <header>
          <a>Lib</a> Manager <FaBookOpen />
        </header>
        <ul>
          {navbar.map((link) => (
            <li key={link.text} onClick={() => router.push(`${link.link}`)}>
              {link.text}
            </li>
          ))}
        </ul>
        <div className={styles.navBut}>
          <FaLightbulb onClick={toggle} />
        </div>
      </nav>
    </>
  );
};
