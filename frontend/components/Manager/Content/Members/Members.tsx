import React, { useState } from "react";
import { LibraryContext } from "../../../../store/library-context";
import { Button } from "../../../UI/Button/Button";
import { NewMember } from "./Actions/NewMember/NewMember";
import styles from "./members.module.scss";
import { MembersList } from "./MembersList/MembersList";
export const Members = () => {
  const [action, setAction] = useState<string>("start");
  return (
    <div className={styles.wrapper}>
      {action === "start" && (
        <div className={styles.start}>
          <div className={styles.head}>
            <p>MEMBERS</p>
            <Button handleClick={() => setAction("new")}>
              {<>Add new member</>}
            </Button>
          </div>
          <div className={styles.line}></div>
          <MembersList />
        </div>
      )}
      {action === "new" && <NewMember setAction={setAction} />}
    </div>
  );
};
