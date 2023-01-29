import React, { useState, useRef } from "react";
import { FaEye } from "react-icons/fa";
import { FormButton } from "../../../../../UI/Form/FormButton";
import { Input } from "../../../../../UI/Form/Input";
import styles from "./newmember.module.scss";
export const NewMember = () => {
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const repeatRef = useRef<HTMLInputElement>(null);
  const peselRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const validateForm = () => {
    const email = emailRef.current!.value;
    const password = passwordRef.current!.value;
    const pesel = peselRef.current!.value;
    const address = addressRef.current!.value;
  };
  return (
    <div className={styles.form}>
      <p className={styles.title}>Creating new Member</p>
      <div>
        <Input name={"email"} type={"email"} ref={emailRef} />
        <Input name={"password"} type={"password"} ref={passwordRef} />

        <Input type={"password"} name={"repeat password"} ref={repeatRef} />
        <Input type={"text"} name={"pesel"} ref={peselRef} />
        <Input type={"text"} name={"address"} ref={addressRef} />
        <FormButton onClick={() => validateForm()}>
          <>Create</>
        </FormButton>
      </div>
    </div>
  );
};
