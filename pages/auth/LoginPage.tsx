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
import SplashScreen from "../../components/SplashScreen";

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
     router.replace("/");
  }
  
  useEffect(() => {
    userRepository.getUserProfileAction();
  }, []);

  const [isLoading, setIsLoading] = useState(true)
    setTimeout(() => setIsLoading(false), 5000)
    if(isLoading === true) return <SplashScreen logo={"/nma_logo.png"}/>
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
