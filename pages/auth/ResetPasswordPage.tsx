import React from 'react'
import AuthNavBar from '../../components/auth/AuthNavBar'
import ResetPasswordForm from '../../components/auth/ResetPasswordForm'
import PageHead from '../../components/PageHead'
import PageLayOut from '../../components/PageLayOut'


const ResetPasswordPage = () => {
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
}

export default ResetPasswordPage