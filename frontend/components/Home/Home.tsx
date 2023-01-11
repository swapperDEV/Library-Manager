import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import { Welcome } from "./Welcome/Welcome";
import { Navbar } from "./UI/Navbar/Navbar";

export const Home = () => {
  return (
    <main className={styles.wrapper}>
      <Navbar />
      <section>
        <header>
          <Welcome />
        </header>
        <aside>
          <Image src={"/bookshd.png"} width="620" height="500" alt="book-man" />
        </aside>
      </section>
      <footer>
        <div></div>
      </footer>
    </main>
  );
};
