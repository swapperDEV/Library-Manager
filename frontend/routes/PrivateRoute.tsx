import { UserContext } from "../store/user-context";
import { useContext } from "react";

export const PrivateRoute = ({
  children,
  role,
  is,
}: {
  children: JSX.Element;
  role: string;
  is: boolean;
}) => {
  const UserCtx = useContext(UserContext);
  return (
    <>
      {UserCtx.userExist && is && (
        <>
          {UserCtx.user.role && UserCtx.user.role === role ? (
            <>{children}</>
          ) : (
            <>not have access</>
          )}
        </>
      )}
      {UserCtx.userExist === false && !is && <>{children}</>}
    </>
  );
};
