import React from "react";
import Head from "next/head";
import { Login as LoginComponent } from "../../components/Login/Login";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <LoginComponent />
    </>
  );
}
