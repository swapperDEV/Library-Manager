import React, { useEffect, useState } from "react";
import { HomeWrapper } from "../Templates/HomeWrapper";
import { SignMap } from "./Map/SignMap";
import styles from "./signlibrary.module.scss";
import { Dot } from "../UI/Dot/Dot";

export const SignLibrary = () => {
  const [step, setStep] = useState(1);
  const [dots, setDots] = useState<Array<JSX.Element>>([]);

  const dotsFunc = () => {
    for (let i = 0; i < step; i++) {
      dots.push(<Dot fill={true} />);
    }
    for (let i = dots.length; i < 3; i++) {
      dots.push(<Dot fill={false} />);
    }
  };
  if (dots.length < 3) {
    dotsFunc();
  }

  return (
    <HomeWrapper>
      <section className={styles.wrapper}>
        <div className={styles.description}>
          <p>Sign your library.</p>
          <p className={styles.info}>To use us managment system.</p>
        </div>
        {step === 1 && <></>}
        {step === 2 && <></>}
        {step === 3 && (
          <div>
            <p>Drag book to library location</p>
            <div className={styles.map}>
              <SignMap />
            </div>
          </div>
        )}
        <div className={styles.dots}>{dots}</div>
      </section>
    </HomeWrapper>
  );
};
