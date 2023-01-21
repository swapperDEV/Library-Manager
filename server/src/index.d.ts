declare namespace Express {
  interface Request {
    body: {
      name: string;
      password: string;
    };
    session: {
      destroy: Function;
      id: string;
      user: {
        role: string;
      };
    };
  }
}
