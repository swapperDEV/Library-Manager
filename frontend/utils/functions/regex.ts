export const isEmail = (str: string) => {
  if (
    str
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      )
  ) {
    return true;
  } else {
    return false;
  }
};

export const isPhone = (str: string) => {
  const phoneRegex = "^^[0-9]+$";
  if (str.match(phoneRegex)) {
    return true;
  } else {
    return false;
  }
};
