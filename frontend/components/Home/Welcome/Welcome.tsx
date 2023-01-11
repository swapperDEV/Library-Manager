import React from "react";
import { Button } from "../../UI/Button/Button";
import styles from "./welcome.module.scss";
export const Welcome = () => {
  return (
    <>
      {" "}
      <div className={styles.text}>
        <div className={styles.first}>
          Start with<div className={styles.circleGreen}></div>
          <div className={styles.circleRed}></div>
          <div className={styles.circleYellow}></div>
        </div>
        <div className={styles.second}>Us modern</div>
        <div className={styles.last}>
          <div className={styles.circleHalfO}></div>
          <div className={styles.circleHalfT}></div>
          <b>
            Book-rent platform<a>.</a>
          </b>
        </div>
      </div>
      <div className={styles.description}>
        Renting books cant be so easy, rent books or connect your library with
        our system.
      </div>
      <div className={styles.buttons}>
        <Button>
          <>Rent-books</>
        </Button>
        <div>
          Library Admin <b>{">"}</b>
        </div>
      </div>
    </>
  );
};
