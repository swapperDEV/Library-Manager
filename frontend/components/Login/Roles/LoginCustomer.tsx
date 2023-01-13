import React, { useRef } from "react";
import { Button } from "../../UI/Button/Button";
import { Input } from "../Elements/Input";
import styles from "./login.module.scss";

export const LoginCustomer = () => {
  const cardid = useRef<HTMLInputElement>(null);
  const login = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);

  return (
    <section className={styles.wrapper}>
      <div>
        <p className={styles.title}>Login to your reader account.</p>
        <p className={styles.info}>
          Dont have acc? You must create it in <a>local library</a>.
        </p>
        <div className={styles.inputs}>
          <Input name={"Card Id"} ref={cardid} />
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
