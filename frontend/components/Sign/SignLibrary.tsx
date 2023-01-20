import React, { useRef, useState } from "react";
import { HomeWrapper } from "../Templates/HomeWrapper";
import styles from "./signlibrary.module.scss";
import { Dot } from "../UI/Dot/Dot";
import { AboutLibrary } from "./Steps/AboutLibrary";
import { AdminLibrary } from "./Steps/AdminLibrary";
import { MapStep } from "./Steps/MapStep";
import { FadeAnimationWrapper } from "../Templates/FadeAnimationWrapper";
import { toast } from "react-toastify";

export const SignLibrary = () => {
  const [step, setStep] = useState(1);
  const [dots, setDots] = useState<Array<JSX.Element>>([]);
  const [libraryName, setLibraryName] = useState<string>("");
  const [libraryAddress, setLibraryAddress] = useState<string>("");
  const [libraryPhone, setLibraryPhone] = useState<string>("");
  const [adminName, setAdminName] = useState<string>("");
  const [adminPassword, setAdminPassword] = useState<string>("");
  const [adminEmail, setAdminEmail] = useState<string>("");
  const [coords, setCoords] = useState<string>("");

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

  const changeStep = (step: number, saveVariables: string) => {
    if (saveVariables === "about") {
    } else if (saveVariables === "clear") {
      toast("Form was cleared.");
    }
    setStep(step);
    setDots([]);
    dotsFunc();
  };
  const validLibrary = () => {};
  return (
    <HomeWrapper>
      <section className={styles.wrapper}>
        <div className={styles.description}>
          <p>Sign your library.</p>
          <p className={styles.info}>To use us managment system.</p>
        </div>
        {step === 1 && (
          <FadeAnimationWrapper>
            <AboutLibrary
              changeStep={changeStep}
              setLibraryName={(x: string) => setLibraryName(x)}
              setLibraryAddress={(x: string) => setLibraryAddress(x)}
              setLibraryPhone={(x: string) => setLibraryPhone(x)}
            />
          </FadeAnimationWrapper>
        )}
        {step === 2 && (
          <FadeAnimationWrapper>
            <AdminLibrary changeStep={changeStep} libraryName={libraryName} />
          </FadeAnimationWrapper>
        )}
        {step === 3 && (
          <FadeAnimationWrapper>
            <MapStep
              changeStep={changeStep}
              signLibrary={() => validLibrary()}
            />
          </FadeAnimationWrapper>
        )}
        <div className={styles.dots}>{dots}</div>
      </section>
    </HomeWrapper>
  );
};
