import React from 'react'
import AuthNavBar from '../../components/auth/AuthNavBar'
import LoginForm from '../../components/auth/LoginForm'
import PageHead from '../../components/PageHead'
import PageLayOut from '../../components/PageLayOut'


const LoginPage = () => {
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
            />
          </div>
        </PageLayOut>
      </>
    );
}

export default LoginPage