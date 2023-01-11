import { UserContext } from "../store/user-context";
import { useContext } from "react";

//prywatna route gdy brak usera lub gdy zła rola

export const PrivateRoute = ({
  children,
  role,
}: {
  children: JSX.Element;
  role: string;
}) => {
  const UserCtx = useContext(UserContext);
  return (
    <>
      {UserCtx.user.role && UserCtx.user.role === role ? (
        <>{children}</>
      ) : (
        <>not have access</>
      )}
    </>
  );
};
