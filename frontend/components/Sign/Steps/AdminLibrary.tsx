import React, { useRef } from "react";
import { FormButton } from "../../UI/Form/FormButton";
import { Input } from "../../UI/Form/Input";
import styles from "./steps.module.scss";
type AdminLibrary = {
  changeStep: Function;
  libraryName: string;
};
export const AdminLibrary = ({ changeStep, libraryName }: AdminLibrary) => {
  const name = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  return (
    <>
      <div className={styles.step}>
        <p className={styles.title}>Admin Account</p>
        <Input
          name={"Name"}
          ref={name}
          icon={<p className={styles.names}>{libraryName}_</p>}
        />
        <Input name={"Password"} ref={password} type="password" />
        <Input name={"Email"} ref={email} type="email" />
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
