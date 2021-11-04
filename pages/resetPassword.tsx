import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useUserRepository } from "../application/repostiories/useUserRepository";
import AuthNavBar from "../components/auth/AuthNavBar";
import ResetPasswordForm from "../components/auth/ResetPasswordForm";
import PageHead from "../components/PageHead";
import PageLayOut from "../components/PageLayOut";
import { useObservable } from "../infrastructure/hooks/useObservable";

const ResetPasswordPage = () => {
  const router = useRouter();
  const userRepository = useUserRepository();
  const userState = useObservable(userRepository.getUserObservable());

  if (userState.isLoggedIn === true) {
    router.replace("/");
  }

  useEffect(() => {
    userRepository.getUserProfileAction();
  }, []);

  return (
    <>
      <PageHead pageName="Reset Password" />
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
          <ResetPasswordForm
            style={{
              marginTop: "70px",
            }}
          />
        </div>
      </PageLayOut>
    </>
  );
};

export default ResetPasswordPage;
