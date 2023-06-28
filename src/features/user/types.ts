export type User = {
  name: string;
  lastName: string;
  email: string;
  location: string;
  token?: string;
};

export type RegisterUserPayload = {
  name: string;
  email: string;
  password: string;
};

export type LoginUserPayload = {
  email: string;
  password: string;
};

export type UserResponse = {
  user: User;
};

export type ErrorResponse = {
  response: {
    data: {
      msg: string;
    };
  };
};
