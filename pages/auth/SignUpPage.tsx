import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useUserRepository } from "../../application/repostiories/useUserRepository";
import AuthNavBar from "../../components/auth/AuthNavBar";
import SignUpForm from "../../components/auth/SignUpForm";
import PageHead from "../../components/PageHead";
import PageLayOut from "../../components/PageLayOut";
import { useObservable } from "../../infrastructure/hooks/useObservable";
import { signUpUserObject } from "../../infrastructure/types";

const SignUpPage = () => {
  const router = useRouter()
  const userRepository = useUserRepository();
  const userState = useObservable(userRepository.getUserObservable());
  const onSubmit = (e: signUpUserObject) => {
    return userRepository.signUpUserAction(e);
  };
  if (userState.isLoggedIn === true) {
     router.replace("/");
  }

  useEffect(() => {
    userRepository.getUserProfileAction();
  }, []);

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
          <SignUpForm
            onSubmit={onSubmit}
            style={{
              marginTop: "70px",
            }}
          />
        </div>
      </PageLayOut>
    </>
  );
};

export default SignUpPage;
