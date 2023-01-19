import React, { useEffect, useState } from "react";
import { HomeWrapper } from "../Templates/HomeWrapper";
import { SignMap } from "./Map/SignMap";
import styles from "./signlibrary.module.scss";
import { Dot } from "../UI/Dot/Dot";
import { Input } from "../UI/Form/Input";
import { FormButton } from "../UI/Form/FormButton";
import { AnimatePresence } from "framer-motion";
import { MotionProvider } from "../Providers/MotionProvider";

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
  const changeStep = (step: number) => {
    setStep(step);
    setDots([]);
    dotsFunc();
  };

  return (
    <HomeWrapper>
      <section className={styles.wrapper}>
        <div className={styles.description}>
          <p>Sign your library.</p>
          <p className={styles.info}>To use us managment system.</p>
        </div>
        {step === 1 && (
          <div className={styles.form}>
            <p className={styles.title}>Info about library</p>
            <Input name={"Library Name"} />
            <Input name={"Library Address"} />
            <Input name={"Library Phone"} />
            <FormButton onClick={() => changeStep(2)}>
              <>Save</>
            </FormButton>
          </div>
        )}
        {step === 2 && (
          <MotionProvider>
            <AnimatePresence exitBeforeEnter>
              <>
                <div className={styles.form}>
                  <p className={styles.title}>Admin Account</p>
                  <Input name={"Name"} />
                  <Input name={"Password"} />
                  <Input name={"Email"} />
                  <FormButton onClick={() => changeStep(3)}>
                    <>Save</>
                  </FormButton>
                </div>
              </>
            </AnimatePresence>
          </MotionProvider>
        )}
        {step === 3 && (
          <div>
            <p className={styles.desc}>
              Drag book icon to set library location
            </p>
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
