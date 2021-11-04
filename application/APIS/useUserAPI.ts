import apiFetchService from "../../infrastructure/helpers/apiFetchService";

export const useUserAPI = () => {
    return {
      login: (payload: object) => {
        return apiFetchService(`/auth/login`, {
            body: payload,
            method: "POST"
        }).then(res => res)
        .catch(error => error)
      },
      signup: (payload:object) => {
        return apiFetchService(`/auth/signup`, {
          body: payload,
          method: "POST",
        })
          .then((res) => res)
          .catch((error) => error);
      },
      getUser: () => {
        return apiFetchService(`/auth/me`, {
          method: "GET",
        })
          .then((res) => res)
          .catch((error) => error);
      }
    };
}
