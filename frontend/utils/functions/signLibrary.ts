import { toast } from "react-toastify";
import { librarySignupType } from "../../types/library";
import { apiIP } from "../data/config";

export const signLibraryCall = async (library: librarySignupType) => {
  try {
    const res = await fetch(`${apiIP}/createlib/new`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(library),
    });
    if (res.ok) {
      const json = await res.json();
      if (json.library) {
        return json;
      } else {
        toast("Error");
        return false;
      }
    } else {
      const json = await res.json();
      toast(json.message);
      return false;
    }
  } catch (error: any) {
    toast("Error");
    return false;
  }
};
