import { useRouter } from "next/router";
import React, { useRef, useContext } from "react";
import { toast } from "react-toastify";
import { UserContext } from "../../../store/user-context";
import { createToken } from "../../../utils/functions/createToken";
import { loginAdmin } from "../../../utils/functions/loginAdmin";
import { Button } from "../../UI/Button/Button";
import { Input } from "../../UI/Form/Input";
import styles from "./login.module.scss";

export const LoginAdmin = () => {
  const login = useRef<HTMLInputElement>(null);
  const password = useRef<HTMLInputElement>(null);
  const userCtx = useContext(UserContext);
  const router = useRouter();
  const handleLoginAdmin = async () => {
    if (login.current!.value && password.current!.value) {
      const res = await loginAdmin(
        login.current!.value,
        password.current!.value
      );
      if (res.message) {
        await toast(res.message);
      }
      if (res.user) {
        await userCtx.logUser(res.user);
        createToken(res.token);
        router.push("/");
      }
    }
  };
  return (
    <section
      className={styles.wrapper}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          handleLoginAdmin();
        }
      }}
    >
      <div>
        <p className={styles.title}>Login to library admin account.</p>
        <p className={styles.info}>
          Needed to <a>manage</a> the library.
        </p>
        <div className={styles.inputs}>
          <Input name={"Admin Name"} ref={login} />
          <Input name={"Password"} ref={password} />
          <div onClick={() => handleLoginAdmin()}>
            <Button>
              <>Login</>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
