import { apiIP } from "../data/config";

export const loginAdmin = async (login: string, password: string) => {
  const res = await fetch(`${apiIP}/auth/login/admin`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: login,
      password: password,
    }),
  });
  const json = await res.json();
  console.log(json);
  return json;
};
