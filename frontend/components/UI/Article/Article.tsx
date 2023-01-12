import Image from "next/image";
import React from "react";
import { Button } from "../Button/Button";
import styles from "./article.module.scss";
export const Article = () => {
  return (
    <article className={styles.article}>
      <div className={styles.content}>
        <div className={styles.title}>
          <p>Naglowek Test</p>
          <span>FRESH</span>
        </div>
        <div className={styles.description}>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus earum dicta eligendi praesentium corrupti ipsa tempora
            modi.
          </p>
        </div>
        <div>
          <Button>
            <a>Sprawdz</a>
          </Button>
        </div>
      </div>
      <figure>
        <Image
          src="/library.jpg"
          width="400"
          height="200"
          alt="library_books"
        />
      </figure>
    </article>
  );
};
