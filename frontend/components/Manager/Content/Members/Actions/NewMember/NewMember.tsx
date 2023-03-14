import React, { useContext, useRef } from "react";
import { toast } from "react-toastify";
import { LibraryContext } from "../../../../../../store/library-context";
import { MemberSignup } from "../../../../../../types/member";
import { createMember } from "../../../../../../utils/functions/createMember";
import {
  isEmail,
  isPhone,
  isPesel,
} from "../../../../../../utils/functions/regex";
import { FormButton } from "../../../../../UI/Form/FormButton";
import { Input } from "../../../../../UI/Form/Input";
import styles from "./newmember.module.scss";
export const NewMember = ({ setAction }: { setAction: Function }) => {
  const libCtx = useContext(LibraryContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);
  const repeatRef = useRef<HTMLInputElement>(null);
  const peselRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const validateForm = async () => {
    if (isEmail(emailRef.current!.value)) {
      if (passwordRef.current!.value.length >= 7) {
        if (passwordRef.current!.value === repeatRef.current!.value) {
          if (addressRef.current!.value.length >= 10) {
            if (isPhone(phoneRef.current!.value)) {
              if (isPesel(peselRef.current!.value)) {
                if (nameRef.current!.value.length >= 2) {
                  const member: MemberSignup = {
                    name: nameRef.current!.value,
                    email: emailRef.current!.value,
                    password: passwordRef.current!.value,
                    pesel: peselRef.current!.value,
                    phone: phoneRef.current!.value,
                    address: addressRef.current!.value,
                    library: libCtx.library.name,
                  };
                  const message = await createMember(member);
                  console.log(message);
                  if (message === "Created user!") {
                    console.log("true");
                    setAction("start");
                  }
                } else {
                  toast("Name is too short");
                }
              } else {
                toast("Pesel is not valid");
              }
            } else {
              toast("Phone number is not valid");
            }
          } else {
            toast("Address is too short");
          }
        } else {
          toast("Passwords don't match");
        }
      } else {
        toast("Password is too short");
      }
    } else {
      toast("Email is not valid");
    }
  };
  return (
    <div className={styles.form}>
      <p className={styles.title}>Create new member</p>
      <div>
        <Input type={"text"} name={"name"} ref={nameRef} />
        <Input name={"email"} type={"email"} ref={emailRef} />
        <Input name={"password"} type={"password"} ref={passwordRef} />
        <Input type={"password"} name={"repeat password"} ref={repeatRef} />
        <Input type={"text"} name={"pesel"} ref={peselRef} />
        <Input type={"text"} name={"address"} ref={addressRef} />
        <Input type={"text"} name={"phone"} ref={phoneRef} />
        <div className={styles.buttons}>
          {" "}
          <FormButton onClick={() => validateForm()}>
            <>Create</>
          </FormButton>
          <FormButton onClick={() => setAction("start")}>
            <>Cancel</>
          </FormButton>
        </div>
      </div>
    </div>
  );
};
