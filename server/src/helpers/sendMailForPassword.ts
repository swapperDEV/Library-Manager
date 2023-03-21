import { transporter } from "../app";

export const sendMailForPassword = (email: string) => {
  console.log("sending mail");
  transporter.sendMail(
    {
      from: "Library Manager",
      to: email,
      subject: "---",
      text: "zarejestrowano cie",
    },
    function (error: Error) {
      if (error) {
        console.log(error, "ERROR jakis dziwny");
      }
    }
  );
};
