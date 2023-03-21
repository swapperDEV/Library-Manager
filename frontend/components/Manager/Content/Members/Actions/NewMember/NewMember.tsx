import { useRouter } from "next/router";
import React, { useContext, useRef } from "react";
import { toast } from "react-toastify";
import { LibraryContext } from "../../../../../../store/library-context";
import { MemberSignup } from "../../../../../../types/member";
import { checkAuth } from "../../../../../../utils/functions/checkAuth";
import { createMember } from "../../../../../../utils/functions/createMember";
import { getLibraryData } from "../../../../../../utils/functions/getLibraryData";
import {
  isEmail,
  isPhone,
  isPesel,
} from "../../../../../../utils/functions/regex";
import { FormButton } from "../../../../../UI/Form/FormButton";
import { Input } from "../../../../../UI/Form/Input";
import styles from "./newmember.module.scss";
export const NewMember = ({ setAction }: { setAction: Function }) => {
  const router = useRouter();
  const libCtx = useContext(LibraryContext);
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);
  const peselRef = useRef<HTMLInputElement>(null);
  const addressRef = useRef<HTMLInputElement>(null);
  const phoneRef = useRef<HTMLInputElement>(null);
  const validateForm = async () => {
    if (isEmail(emailRef.current!.value)) {
      if (addressRef.current!.value.length >= 10) {
        if (isPhone(phoneRef.current!.value)) {
          if (isPesel(peselRef.current!.value)) {
            if (nameRef.current!.value.length >= 2) {
              const member: MemberSignup = {
                name: nameRef.current!.value,
                email: emailRef.current!.value,
                pesel: peselRef.current!.value,
                phone: phoneRef.current!.value,
                address: addressRef.current!.value,
                library: libCtx.library.name,
              };
              if (await checkAuth()) {
                const message = await createMember(member);
                if (message) {
                  if (message === "Created user!") {
                    if (libCtx.library.reload) {
                      await libCtx.library.reload();
                    }
                    toast("An email has been sent to the user to set password");
                    setAction("start");
                  }
                }
              } else {
                toast("Sesja wygasła");
                router.push("/logout");
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
    }
  };
  return (
    <div className={styles.form}>
      <p className={styles.title}>Create new member</p>
      <div>
        <Input type={"text"} name={"first name & surname"} ref={nameRef} />
        <Input name={"email"} type={"email"} ref={emailRef} />
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
