import React from "react";
import Head from "next/head";
import { Login as LoginComponent } from "../../components/Login/Login";
import { PrivateRoute } from "../../routes/PrivateRoute";

export default function Login() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <PrivateRoute is={false}>
        <LoginComponent />
      </PrivateRoute>
    </>
  );
}
