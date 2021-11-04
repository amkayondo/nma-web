export type UserState = {
  isLoggedIn: boolean;
  isSubmitting: boolean;
  error: string;
  message?: string | undefined;
  isError: boolean;
  isLoading?: false;
  data?:any;
};

export type loginUserObject = {
  email: string;
  password: string;
};

export type signUpUserObject = {
  email: string;
  password: string;
  fullName: string;
};

export type UserInfoObject = {
  fullName: string;
  email: string;
};
