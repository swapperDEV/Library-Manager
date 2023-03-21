import { sessionTime } from "../data/config";

export const createToken = (token: string) => {
  localStorage.setItem("token", token);
  const remainingMilliseconds = sessionTime;
  const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
  localStorage.setItem("expiryDate", expiryDate.toISOString());
};
