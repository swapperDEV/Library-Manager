import React, { useContext, useState } from "react";
import { HomeWrapper } from "../Templates/HomeWrapper";
import { useRouter } from "next/router";
import styles from "./signlibrary.module.scss";
import { Dot } from "../UI/Dot/Dot";
import { AboutLibrary } from "./Steps/AboutLibrary";
import { AdminLibrary } from "./Steps/AdminLibrary";
import { MapStep } from "./Steps/MapStep";
import { FadeAnimationWrapper } from "../Templates/FadeAnimationWrapper";
import { toast } from "react-toastify";
import { signLibraryCall } from "../../utils/functions/signLibrary";
import { useUser } from "../../utils/hooks/useUser";
import { UserContext } from "../../store/user-context";
import { createToken } from "../../utils/functions/createToken";

export const SignLibrary = () => {
  const [step, setStep] = useState(1);
  const router = useRouter();
  const [dots, setDots] = useState<Array<JSX.Element>>([]);
  const [libraryName, setLibraryName] = useState<string>("");
  const [libraryAddress, setLibraryAddress] = useState<string>("");
  const [libraryPhone, setLibraryPhone] = useState<string>("");
  const [adminName, setAdminName] = useState<string>("");
  const [adminPassword, setAdminPassword] = useState<string>("");
  const [adminEmail, setAdminEmail] = useState<string>("");
  const [coords, setCoords] = useState<[number, number]>([0, 0]);
  const UserCtx = useContext(UserContext);

  const dotsFunc = () => {
    for (let i = 0; i < step; i++) {
      dots.push(<Dot key={Math.random()} fill={true} />);
    }
    for (let i = dots.length; i < 3; i++) {
      dots.push(<Dot key={Math.random()} fill={false} />);
    }
  };
  if (dots.length < 3) {
    dotsFunc();
  }

  const changeStep = (step: number, saveVariables: string) => {
    if (saveVariables === "clear") {
      toast("Form was cleared.");
    }
    setStep(step);
    setDots([]);
    dotsFunc();
  };
  const signLibrary = async () => {
    const library = {
      name: libraryName,
      address: libraryAddress,
      phone: libraryPhone,
      coords: coords,
      adminName: `${libraryName}_${adminName}`,
      adminPassword: adminPassword,
      adminEmail: adminEmail,
    };
    const res = await signLibraryCall(library);
    await UserCtx.logUser(res.admin);
    createToken(res.token);
    router.push("/");
  };
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
            <AdminLibrary
              changeStep={changeStep}
              libraryName={libraryName}
              setAdminName={(x: string) => setAdminName(x)}
              setAdminPassword={(x: string) => setAdminPassword(x)}
              setAdminEmail={(x: string) => setAdminEmail(x)}
            />
          </FadeAnimationWrapper>
        )}
        {step === 3 && (
          <FadeAnimationWrapper>
            <MapStep
              changeStep={changeStep}
              signLibrary={() => signLibrary()}
              setCoords={(x: [number, number]) => setCoords(x)}
            />
          </FadeAnimationWrapper>
        )}
        <div className={styles.dots}>{dots}</div>
      </section>
    </HomeWrapper>
  );
};
