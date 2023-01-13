import React from "react";
import styles from "./home.module.scss";
import Image from "next/image";
import { Welcome } from "./Welcome/Welcome";
import { HomeWrapper } from "../Templates/HomeWrapper";

export const Home = () => {
  return (
    <HomeWrapper>
      <>
        <div className={styles.wrapper}>
          <section>
            <header>
              <Welcome />
            </header>
            <figure>
              <Image
                src={"/1727.jpg"}
                width="720"
                height="500"
                alt="book-man"
              />
            </figure>
          </section>
        </div>
      </>
    </HomeWrapper>
  );
};
