import React from "react";
import { FormButton } from "../../../../../UI/Form/FormButton";
import { Input } from "../../../../../UI/Form/Input";
export const NewMember = () => {
  const validateForm = () => {};
  return (
    <div>
      <p>Creating new Member</p>
      <div>
        <Input />
        <Input />
        <Input />
        <FormButton onClick={() => validateForm()}>
          <>Save</>
        </FormButton>
      </div>
    </div>
  );
};
