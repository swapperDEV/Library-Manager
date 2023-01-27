import { useTheme } from "next-themes";
import React, { useContext } from "react";
import { FaLightbulb, FaUser } from "react-icons/fa";
import { UserContext } from "../../../../store/user-context";
import styles from "./switch.module.scss";
export const LightSwitch = () => {
  const { theme, setTheme } = useTheme();
  const userCtx = useContext(UserContext);

  const toggle = () => {
    if (theme === "light") {
      setTheme("dark");
    } else [setTheme("light")];
  };
  return (
    <div className={styles.navBut}>
      {userCtx.userExist && (
        <div className={styles.userBadge}>
          <FaUser />
          {userCtx.user.name}
        </div>
      )}
      <div className={styles.bubble}>
        <FaLightbulb onClick={toggle} />
      </div>
    </div>
  );
};
