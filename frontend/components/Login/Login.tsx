import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { HomeWrapper } from "../Templates/HomeWrapper";
import { LoginAdmin } from "./Roles/LoginAdmin";
import { LoginCustomer } from "./Roles/LoginCustomer";

export const Login = () => {
  const path = useRouter();
  return (
    <HomeWrapper>
      <>
        {path.query.user === "customer" && <LoginCustomer />}
        {path.query.user === "admin" && <LoginAdmin />}
      </>
    </HomeWrapper>
  );
};
