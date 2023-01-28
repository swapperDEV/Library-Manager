import React from "react";
import styles from "./button.module.scss";
export const Button = ({
  children,
  handleClick,
}: {
  children: JSX.Element;
  handleClick?: Function;
}) => {
  return (
    <button
      onClick={() => {
        handleClick && handleClick();
      }}
      className={styles.button}
    >
      {children}
    </button>
  );
};
