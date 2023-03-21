import { useRouter } from "next/router";
import React, { useState, useContext } from "react";
import { toast } from "react-toastify";
import { LibraryContext } from "../../../../store/library-context";
import { Button } from "../../../UI/Button/Button";
import { NewMember } from "./Actions/NewMember/NewMember";
import styles from "./members.module.scss";
import { MembersList } from "./MembersList/MembersList";
export const Members = () => {
  const [action, setAction] = useState<string>("start");
  const libCtx = useContext(LibraryContext);
  const router = useRouter();
  const changeSubPage = async (action: string) => {
    if (libCtx.library.checkUserAuth) {
      if (await !libCtx.library.checkUserAuth()) {
        router.push("/logout");
      } else {
        setAction(action);
      }
    }
  };
  return (
    <div className={styles.wrapper}>
      {action === "start" && (
        <div className={styles.start}>
          <div className={styles.head}>
            <p>MEMBERS</p>
            <Button handleClick={() => changeSubPage("new")}>
              {<>Add new member</>}
            </Button>
          </div>
          <div className={styles.line}></div>
          <MembersList />
        </div>
      )}
      {action === "new" && <NewMember setAction={changeSubPage} />}
    </div>
  );
};
