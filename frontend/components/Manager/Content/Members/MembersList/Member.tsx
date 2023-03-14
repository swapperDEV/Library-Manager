import { FaUser } from "react-icons/fa";
import styles from "./member.module.scss";
export const Member = ({ member }: any) => {
  return (
    <li className={styles.member}>
      <FaUser />
      {member.name} | {member.email}
    </li>
  );
};
