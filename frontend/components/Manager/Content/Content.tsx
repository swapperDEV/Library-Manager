import React from "react";
import styles from "./content.module.scss";
import { Dashboard } from "./Dashboard/Dashboard";
import { Members } from "./Members/Members";
export const Content = ({ content }: { content: string }) => {
  return (
    <section className={styles.content}>
      {content === "members" && <Members />}
      {content === "dashboard" && <Dashboard />}
    </section>
  );
};
