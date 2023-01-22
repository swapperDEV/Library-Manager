import { UserContext } from "../store/user-context";
import { useContext } from "react";
import { useRouter } from "next/router";

export const PrivateRoute = ({
  children,
  is,
}: {
  children: JSX.Element;
  is: boolean;
}) => {
  const UserCtx = useContext(UserContext);
  const router = useRouter();
  if (UserCtx.userExist && !is) {
    router.push("/");
  }
  if (is && !UserCtx.userExist) {
    router.push("/");
  }
  return (
    <>
      {is && UserCtx.userExist && <>{children}</>}
      {!is && !UserCtx.userExist && <>{children}</>}
    </>
  );
};
