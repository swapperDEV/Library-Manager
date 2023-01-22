import { apiIP } from "../data/config";

export const checkAuth = async () => {
  const token = localStorage.getItem("token");
  const expiryDate = localStorage.getItem("expiryDate");
  if (!token || !expiryDate) {
    return false;
  }
  if (new Date(expiryDate) <= new Date()) {
    return false;
  }
  const res = await fetch(`${apiIP}/auth/checklogin`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + token,
    },
  });
  const json = await res.json();
  return json;
};
