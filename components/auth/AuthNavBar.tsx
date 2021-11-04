import React from 'react'
import { Container, Nav, Navbar } from 'react-bootstrap'
import Image from "next/image";
import Link from 'next/link'

const AuthNavBar = () => {
    
    return (
      <Navbar bg="transparent" variant="dark">
        <Container className="d-flex align-items-center">
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <Image
              alt=""
              src="/nma_logo_2.png"
              width="50"
              height="50"
              className="d-inline-block align-top"
            />
            <div className="ms-3">National Merchants Association</div>
          </Navbar.Brand>
          <Nav className="justify-content-end ">
            <Nav.Link href="/login" className="text-white">
              Login
            </Nav.Link>

            <Nav.Link className="text-white" href="/signup">
              Signup
            </Nav.Link>
            <Nav.Link className="text-white" href="/resetPassword">
              Reset Password
            </Nav.Link>
            
          </Nav>
        </Container>
      </Navbar>
    );
}

export default AuthNavBar