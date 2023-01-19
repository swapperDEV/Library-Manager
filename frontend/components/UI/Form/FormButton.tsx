import React from "react";
import styles from "./formbutton.module.scss";
export const FormButton = ({
  children,
  onClick,
}: {
  children: JSX.Element;
  onClick: Function;
}) => {
  return (
    <button className={styles.button} onClick={() => onClick()}>
      {children}
    </button>
  );
};
