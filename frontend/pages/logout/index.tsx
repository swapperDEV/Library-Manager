import React, { useContext } from "react";
import Head from "next/head";
import { Login as LoginComponent } from "../../components/Login/Login";
import { UserContext } from "../../store/user-context";
import { useRouter } from "next/router";

export default function Logout() {
  const router = useRouter();
  const userCtx = useContext(UserContext);
  localStorage.removeItem("token");
  localStorage.removeItem("expiryDate");
  localStorage.removeItem("userId");
  userCtx.logoutUser();
  router.push("/");

  return (
    <>
      <Head>
        <title>Login</title>
      </Head>

      <>logout...</>
    </>
  );
}
