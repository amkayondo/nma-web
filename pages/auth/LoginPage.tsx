import React, { useEffect, useState } from "react";
import { useUserObservable } from "../../application/observables/useUserObservable";
import { useUserRepository } from "../../application/repostiories/useUserRepository";
import AuthNavBar from "../../components/auth/AuthNavBar";
import LoginForm from "../../components/auth/LoginForm";
import PageHead from "../../components/PageHead";
import PageLayOut from "../../components/PageLayOut";
import { useObservable } from "../../infrastructure/hooks/useObservable";
import { loginUserObject } from "../../infrastructure/types";
import { useRouter } from "next/router";

export interface loginPageProps {
  event: {
    preventDefault?: any;
    onSubmit: any;
  };
}

const LoginPage = () => {
  const router = useRouter();
  const userRepository = useUserRepository();
  const userState = useObservable(userRepository.getUserObservable());
  const onLoginSubmit = (data: loginUserObject) => {
    return userRepository.loginUserAction({
      email: data.email,
      password: data.password,
    });
  };
  if (userState.isLoggedIn === true) {
     window.location.replace("/");
  }
  
  useEffect(() => {
    userRepository.getUserProfileAction();
  }, []);

  console.log(userState);

  return (
    <>
      <PageHead pageName="Login" />
      <PageLayOut
        fluid
        style={{
          backgroundColor: "#F7911D",
          minHeight: "100%",
          width: "100vw",
          height: "100vh",
        }}
      >
        <AuthNavBar />
        <div className="d-flex justify-content-center">
          <LoginForm
            style={{
              marginTop: "70px",
            }}
            onSubmit={onLoginSubmit}
          />
        </div>
      </PageLayOut>
    </>
  );
};

export default LoginPage;
