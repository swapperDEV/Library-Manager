import React, { useState } from "react";
import { FaEye } from "react-icons/fa";
import styles from "./input.module.scss";

interface Props {
  name: string;
  icon?: JSX.Element;
  type?: string;
}

export const Input = React.forwardRef<HTMLInputElement, Props>((props, ref) => {
  const [showPassword, passwordShowChange] = useState(false);

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <p>{props.name}</p>
        {props.type === "password" && (
          <div
            className={showPassword ? styles.activeEye : styles.eye}
            onClick={() => passwordShowChange(!showPassword)}
          >
            <FaEye />
          </div>
        )}
      </div>
      <div className={styles.cont}>
        {props.icon && <>{props.icon}</>}
        <input
          maxLength={35}
          ref={ref}
          type={
            props.type
              ? props.type === "password"
                ? showPassword
                  ? "text"
                  : "password"
                : props.type
              : "text"
          }
        />
      </div>
    </div>
  );
});
Input.displayName = "Input";
