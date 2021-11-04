import React, { useEffect } from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import Image from "next/image";
import { useRouter } from "next/router";

const AppTopNav = (props: any) => {
  const router = useRouter();
  const logOutUser = () => {
    localStorage.removeItem("token");
    return router.push("/login");
  };
  useEffect(() => {
    if (props.userState.isLoading === false && props.userState.isError) {
      return router.push("/login");
    }
    
  });

  return (
    <Navbar
      bg="#F7911D"
      style={{
        background: "#F7911D",
      }}
    >
      <Container>
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <Image
            alt=""
            src="/nma_logo_2.png"
            width="50"
            height="50"
            className="d-inline-block align-top"
          />{" "}
          <div className="ms-3 fw-bold text-black">Dashboard</div>
        </Navbar.Brand>
        <Nav className="justify-content-end ">
          <Nav.Link onClick={logOutUser} className="fw-bold text-black">
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default AppTopNav;
