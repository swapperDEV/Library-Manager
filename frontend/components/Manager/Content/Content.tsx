import { useRouter } from "next/router";
import React, { useEffect, useContext } from "react";
import { LibraryContext } from "../../../store/library-context";
import styles from "./content.module.scss";
import { Dashboard } from "./Dashboard/Dashboard";
import { Members } from "./Members/Members";
export const Content = ({ content }: { content: string }) => {
  const libCtx = useContext(LibraryContext);
  const router = useRouter();
  const checkAuth = async () => {
    if (libCtx.library.checkUserAuth) {
      if (await !libCtx.library.checkUserAuth()) {
        router.push("/logout");
      }
    }
  };
  useEffect(() => {
    checkAuth();
  }, [content]);
  return (
    <section className={styles.content}>
      {content === "members" && <Members />}
      {content === "dashboard" && <Dashboard />}
    </section>
  );
};
