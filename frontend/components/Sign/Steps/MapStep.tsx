import React from "react";
import { FormButton } from "../../UI/Form/FormButton";
import { SignMap } from "./Map/SignMap";
import styles from "./steps.module.scss";
type MapStep = {
  changeStep: Function;
  signLibrary: Function;
};
export const MapStep = ({ changeStep, signLibrary }: MapStep) => {
  return (
    <>
      <div>
        <p className={styles.desc}>Drag book icon to set library location</p>
        <div className={styles.map}>
          <SignMap />
        </div>
        <div className={styles.buttons}>
          <FormButton onClick={() => changeStep(1)}>
            <>Cancel</>
          </FormButton>
          <FormButton onClick={() => signLibrary()}>
            <>Sign Library</>
          </FormButton>
        </div>
      </div>
    </>
  );
};
