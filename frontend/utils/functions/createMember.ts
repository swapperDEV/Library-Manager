import { toast } from "react-toastify";
import { MemberSignup } from "../../types/member";
import { apiIP } from "../data/config";

export const createMember = async (member: MemberSignup) => {
  try {
    const res = await fetch(`${apiIP}/library/newmember`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(member),
    });
    const json = await res.json();
    console.log(json);
    console.log(json);
    if (json.message === "Created user!") {
      console.log(json);
      toast("User was created");
    } else {
      toast(json.message);
    }
    return json.message;
  } catch (error) {
    console.log(error);
  }
};
