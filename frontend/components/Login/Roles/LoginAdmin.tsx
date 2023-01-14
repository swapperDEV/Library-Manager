import React, { useRef } from "react";
import { Button } from "../../UI/Button/Button";
import { Input } from "../../UI/Form/Input";
import styles from "./login.module.scss";

export const LoginAdmin = () => {
  const libraryid = useRef<HTMLInputElement>(null);
  const login = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  return (
    <section className={styles.wrapper}>
      <div>
        <p className={styles.title}>Login to library admin account.</p>
        <p className={styles.info}>
          Needed to <a>manage</a> the library.
        </p>
        <div className={styles.inputs}>
          <Input name={"Library Id"} ref={libraryid} />
          <Input name={"Login"} ref={login} />
          <Input name={"Password"} ref={password} />
          <Button>
            <>Login</>
          </Button>
        </div>
      </div>
    </section>
  );
};
