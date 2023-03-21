export type librarySignupType = {
  name: string;
  address: string;
  phone: string;
  coords: [number, number];
  adminName: string;
  adminPassword: string;
  adminEmail: string;
  members?: [];
};

export type libraryType = {
  name: string;
  address: string;
  phone: string;
  coords: [number, number];
  members: [];
  reload?: Function;
  checkUserAuth?: Function;
};
