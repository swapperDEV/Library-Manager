export const createToken = (token: string) => {
  localStorage.setItem("token", token);
  const remainingMilliseconds = 60 * 60 * 1000;
  const expiryDate = new Date(new Date().getTime() + remainingMilliseconds);
  localStorage.setItem("expiryDate", expiryDate.toISOString());
};
