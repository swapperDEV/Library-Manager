import { createContext } from "react";
import { libraryType } from "../types/library";
export type LibraryData = {
  library: libraryType;
};

export const LibraryContext = createContext<LibraryData>({
  library: {
    name: "",
    address: "",
    phone: "",
    coords: [0, 0],
    adminName: "",
    adminPassword: "",
    adminEmail: "",
  },
});
