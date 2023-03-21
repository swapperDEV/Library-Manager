import { FaUser } from "react-icons/fa";
import styles from "./member.module.scss";
export const Member = ({ member }: any) => {
  return (
    <li className={styles.member}>
      <FaUser />
      {member.name} | {member.email}
      <div className={styles.status}>
        <p>{member.status && member.status}</p>
      </div>
    </li>
  );
};
