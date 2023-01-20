import React, { useRef } from "react";
import { toast } from "react-toastify";
import { isPhone } from "../../../utils/functions/regex";
import { FormButton } from "../../UI/Form/FormButton";
import { Input } from "../../UI/Form/Input";
import styles from "./steps.module.scss";

type types = {
  changeStep: Function;
  setLibraryAddress: Function;
  setLibraryName: Function;
  setLibraryPhone: Function;
};

export const AboutLibrary = ({
  changeStep,
  setLibraryAddress,
  setLibraryName,
  setLibraryPhone,
}: types) => {
  const libraryName = useRef<HTMLInputElement>(null);
  const libraryAddress = useRef<HTMLInputElement>(null);
  const libraryPhone = useRef<HTMLInputElement>(null);

  const validateForm = () => {
    if (libraryName.current!.value.length >= 7) {
      setLibraryName(libraryName.current!.value);
      if (libraryAddress.current!.value.length >= 7) {
        setLibraryAddress(libraryAddress.current!.value);
        if (
          libraryPhone.current!.value.length >= 9 &&
          libraryPhone.current!.value.length <= 11
        ) {
          if (isPhone(libraryPhone.current!.value)) {
            setLibraryPhone(libraryPhone.current!.value);
            changeStep(2, "about");
          } else {
            toast("Phone must contains only numbers");
          }
        } else {
          toast("Phone numer is not valid");
        }
      } else {
        toast("Library Address is too short");
      }
    } else {
      toast("Library Name is too short");
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
        <p className={styles.title}>Info about library</p>
        <Input name={"Library Name"} ref={libraryName} />
        <Input name={"Library Address"} ref={libraryAddress} />
        <Input name={"Library Phone"} ref={libraryPhone} />
        <FormButton onClick={() => validateForm()}>
          <>Save</>
        </FormButton>
      </div>
    </>
  );
};
