import React from "react";
import { FormButton } from "../../UI/Form/FormButton";
import { Input } from "../../UI/Form/Input";
import styles from "./steps.module.scss";
type AdminLibrary = {
  changeStep: Function;
};
export const AdminLibrary = ({ changeStep }: AdminLibrary) => {
  return (
    <>
      {" "}
      <div className={styles.step}>
        <p className={styles.title}>Admin Account</p>
        <Input name={"Name"} />
        <Input name={"Password"} />
        <Input name={"Email"} />
        <div className={styles.buttons}>
          <FormButton onClick={() => changeStep(1)}>
            <>Cancel</>
          </FormButton>
          <FormButton onClick={() => changeStep(3)}>
            <>Save</>
          </FormButton>
        </div>
      </div>
    </>
  );
};
