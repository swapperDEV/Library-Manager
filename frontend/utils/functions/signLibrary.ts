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
    if (!res.ok) {
      throw new Error(`Http error: ${res.status}`);
    } else {
      const json = await res.json();
      if (json.message === "Library & admin acc created successfully!") {
        console.log(json);
        return json;
      }
    }
  } catch (error) {
    console.log(error);
  }
};
