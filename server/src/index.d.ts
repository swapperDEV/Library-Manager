declare namespace Express {
  interface Request {
    userId: string;
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
