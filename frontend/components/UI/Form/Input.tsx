import React, { forwardRef } from "react";
import styles from "./input.module.scss";

interface Props {
  name: string;
  icon?: JSX.Element;
}

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  return (
    <div className={styles.wrapper}>
      <p>{props.name}</p>
      <div className={styles.cont}>
        {props.icon && <>{props.icon}</>}
        <input maxLength={20} ref={ref} />
      </div>
    </div>
  );
});
Input.displayName = "Input";
