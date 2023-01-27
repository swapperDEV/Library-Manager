import React, { useState } from "react";
import { Aside } from "./Aside/Aside";
import { Content } from "./Content/Content";
import { ManagerNavbar as Navbar } from "./Navbar/Navbar";
import styles from "./manager.module.scss";
export const Dashboard = () => {
  const [content, setContent] = useState("dashboard");
  return (
    <main className={styles.dashboard}>
      <Navbar content={content} setContent={setContent} />
      <Content content={content} />
      <Aside />
    </main>
  );
};
