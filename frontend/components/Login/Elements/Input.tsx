import React, { forwardRef } from "react";
import styles from "./input.module.scss";

interface Props {
  name: string;
}

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <div className={styles.wrapper}>
      <p>{props.name}</p>
      <input maxLength={20} ref={ref} />
    </div>
  );
});
Input.displayName = "Input";
