import React, { useContext } from "react";
import { useRouter } from "next/router";
import { FaBookOpen } from "react-icons/fa";
import styles from "./navbar.module.scss";
import { LightSwitch } from "./Elements/LightSwitch";
import { UserContext } from "../../../store/user-context";
import { PageLogo } from "./Elements/PageLogo";

export const Navbar = () => {
  const router = useRouter();
  const userCtx = useContext(UserContext);

  const navbarLogout = [
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
  const navbarLogin = [
    {
      text: "Home",
      link: "/",
    },
    {
      text: "About",
      link: "/about",
    },
    {
      text: "Books",
      link: "/manager",
    },
    {
      text: "Logout",
      link: "/logout",
    },
  ];
  return (
    <>
      <nav className={styles.nav}>
        <PageLogo />
        <ul>
          {userCtx.userExist ? (
            <>
              {navbarLogin.map((link) => (
                <li key={link.text} onClick={() => router.push(`${link.link}`)}>
                  {link.text}
                </li>
              ))}
            </>
          ) : (
            <>
              {navbarLogout.map((link) => (
                <li key={link.text} onClick={() => router.push(`${link.link}`)}>
                  {link.text}
                </li>
              ))}
            </>
          )}
        </ul>
        <LightSwitch />
      </nav>
    </>
  );
};
