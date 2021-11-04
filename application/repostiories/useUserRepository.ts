import { loginUserObject, signUpUserObject } from "../../infrastructure/types";
import { useUserAPI } from "../APIS/useUserAPI";
import { useUserObservable } from "../observables/useUserObservable";

export const useUserRepository = () => {
  const userAPI = useUserAPI();
  const userObservable = useUserObservable();
  return {
    loginUserAction: async (data: loginUserObject) => {
      userObservable.loginUserRequest();
      return await userAPI
        .login({
          email: data.email,
          password: data.password,
        })
        .then((res: any) => {
          if (res.authToken) {
            localStorage.setItem("token", res.authToken);
            return userObservable.loginUserSuccess();
          }
          return userObservable.loginUserFailure(res.message);
        });
    },
    signUpUserAction: async (data: signUpUserObject) => {
      userObservable.signUpRequest();
      return await userAPI
        .signup({
          email: data.email,
          password: data.password,
          fullName: data.fullName
        })
        .then((res: any) => {
          if (res.authToken) {
            localStorage.setItem("token", res.authToken);
            return userObservable.signUpSuccess();
          }
          return userObservable.signUpFailure(res.message);
        });
    },
    getUserProfileAction: async () => {
      userObservable.getUserInfoRequest();
      return await userAPI.getUser().then((res: any) => {
        if (res.id) {
          return userObservable.getUserInfoSuccess(res);
        }
        return userObservable.getUserInfoFailure(res.message)
      });
    },
    getUserObservable: () => userObservable.getObservable,
  };
};
