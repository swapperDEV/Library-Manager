import React, { useRef } from "react";
import { toast } from "react-toastify";
import { isEmail } from "../../../utils/functions/regex";
import { FormButton } from "../../UI/Form/FormButton";
import { Input } from "../../UI/Form/Input";
import styles from "./steps.module.scss";

type AdminLibrary = {
  changeStep: Function;
  libraryName: string;
  setAdminName: Function;
  setAdminPassword: Function;
  setAdminEmail: Function;
};

export const AdminLibrary = ({
  changeStep,
  libraryName,
  setAdminName,
  setAdminPassword,
  setAdminEmail,
}: AdminLibrary) => {
  const name = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const passwordrepeat = useRef<HTMLInputElement>(null);
  const email = useRef<HTMLInputElement>(null);
  const validateForm = () => {
    if (name.current!.value.length >= 5) {
      setAdminName(name.current!.value);
      if (password.current!.value.length >= 7) {
        if (password.current!.value === passwordrepeat.current!.value) {
          setAdminPassword(password.current!.value);
          if (isEmail(email.current!.value)) {
            setAdminEmail(email.current!.value);
            changeStep(3, "admin");
          } else {
            toast("Email is not valid");
          }
        } else {
          toast("Passwords don't match");
        }
      } else {
        toast("Password is too short");
      }
    } else {
      toast("Login is too short");
    }
  };
  return (
    <>
      <div
        className={styles.step}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            validateForm();
          }
        }}
      >
        <p className={styles.title}>Admin Account</p>
        <Input
          name={"Login"}
          ref={name}
          icon={<p className={styles.names}>{libraryName}_</p>}
        />
        <Input name={"Password"} ref={password} type="password" />
        <Input name={"Repeat password"} ref={passwordrepeat} type="password" />
        <Input name={"Email"} ref={email} />
        <div className={styles.buttons}>
          <FormButton onClick={() => changeStep(1)}>
            <>Cancel</>
          </FormButton>
          <FormButton onClick={() => validateForm()}>
            <>Save</>
          </FormButton>
        </div>
      </div>
    </>
  );
};
