import { BehaviorSubject } from "rxjs";
import {
  UserInfoObject,
  UserState,
} from "../../infrastructure/types";

const initialState = {
  isLoggedIn: false,
  isSubmitting: false,
  error: "",
  message: "",
  isError: false,
};

const userSubject = new BehaviorSubject<UserState>(initialState);

export const useUserObservable = () => {
  const setNextState = (payload: any) => {
    const state = userSubject.getValue();
    userSubject.next({ ...state, ...payload });
  };

  // USER PROFILE
  const getUserInfoRequest = () => {
    return setNextState({
      data: {},
      error: "",
      isLoggedIn: false,
      isSubmitting: false,
      message: "",
      isError: false,
      isLoading: true,
    });
  };

  const getUserInfoSuccess = (data: UserInfoObject) => {
    return setNextState({
      data,
      error: "",
      isLoggedIn: true,
      isSubmitting: false,
      message: "",
      isError: false,
      isLoading: false,
    });
  };

  const getUserInfoFailure = (error: string) => {
    return setNextState({
      error,
      data: {},
      isLoggedIn: false,
      isSubmitting: false,
      message: "",
      isError: true,
      isLoading: false,
    });
  };

  //  LOGIN
  const loginUserRequest = () => {
    return setNextState({
      error: "",
      isLoggedIn: false,
      isSubmitting: true,
      isError: false,
    });
  };

  const loginUserSuccess = () => {
    return setNextState({
      error: "",
      isLoggedIn: true,
      isSubmitting: false,
      message: "login successfull",
      isError: false,
    });
  };

  const loginUserFailure = (error: string) => {
    return setNextState({
      error: "invalid password or email",
      isLoggedIn: false,
      isSubmitting: false,
      isError: true,
    });
  };

  // SIGNUP
  const signUpRequest = () => {
    return setNextState({
      error: "",
      isLoggedIn: false,
      isSubmitting: true,
      isError: false,
    });
  };

  const signUpSuccess = () => {
    return setNextState({
      error: "",
      isLoggedIn: true,
      isSubmitting: false,
      message: "account creation was successfull",
      isError: false,
    });
  };
  const signUpFailure = (error: string) => {
    return setNextState({
      error,
      isLoggedIn: false,
      isSubmitting: false,
      isError: true,
    });
  };

  const getObservable = userSubject;
  return {
    getUserInfoRequest,
    getUserInfoSuccess,
    getUserInfoFailure,

    loginUserRequest,
    loginUserSuccess,
    loginUserFailure,

    getObservable,

    signUpRequest,
    signUpSuccess,
    signUpFailure,
  };
};
