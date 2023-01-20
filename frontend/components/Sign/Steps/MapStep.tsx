import React, { useState } from "react";
import { FormButton } from "../../UI/Form/FormButton";
import { SignMap } from "./Map/SignMap";
import styles from "./steps.module.scss";
type MapStep = {
  changeStep: Function;
  signLibrary: Function;
  setCoords: Function;
};
export const MapStep = ({ changeStep, signLibrary, setCoords }: MapStep) => {
  const [anchor, setAnchor] = useState<[number, number]>([52.237, 21.0175]);
  const submitMap = () => {
    setCoords(anchor);
    signLibrary();
  };
  return (
    <>
      <div>
        <p className={styles.desc}>Drag book icon to set library location</p>
        <div className={styles.map}>
          <SignMap anchor={anchor} setAnchor={setAnchor} />
        </div>
        <div className={styles.buttons}>
          <FormButton onClick={() => changeStep(1)}>
            <>Cancel</>
          </FormButton>
          <FormButton onClick={() => submitMap()}>
            <>Sign Library</>
          </FormButton>
        </div>
      </div>
    </>
  );
};
