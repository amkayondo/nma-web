import { Form, Button, Alert } from "react-bootstrap";
import Link from "next/link";
import { AnyCatcher } from "rxjs/internal/AnyCatcher";
import { useState } from "react";
import { useUserRepository } from "../../application/repostiories/useUserRepository";
import { useObservable } from "../../infrastructure/hooks/useObservable";

export interface SignUpFormProps {
  style?: object;
  onSubmit: any;
}

const SignUpForm = (props: SignUpFormProps) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userRepository = useUserRepository();
  const userState = useObservable(userRepository.getUserObservable());
  const { isSubmitting, isLoggedIn, error, message, isError } = userState;
  const onFormSubmit = (e: any) => {
    e.preventDefault();
    return props.onSubmit({
      fullName,
      email,
      password,
    });
  };
  return (
    <Form {...props} onSubmit={onFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label
          className="text-white"
          style={{
            fontWeight: "bold",
            fontSize: "40px",
          }}
        >
          Sigup
        </Form.Label>
      </Form.Group>
      {isError === true ? (
        error.length === 0 || error === "Unsupported input" ? (
          ""
        ) : (
          <Alert variant="danger">{error}</Alert>
        )
      ) : message.length === 0 ? (
        ""
      ) : (
        <Alert variant="primary">{message}</Alert>
      )}
      <Form.Group
        style={styles.inputStyle}
        className="mb-3"
        controlId="formBasicFullName"
      >
        <Form.Control
          style={styles.inputStyle}
          type="text"
          onKeyUp={(e: any) => setFullName(e.target.value)}
          placeholder="Full Name"
          required
        />
      </Form.Group>
      <Form.Group
        style={styles.inputStyle}
        className="mb-3"
        controlId="formBasicEmail"
      >
        <Form.Control
          style={styles.inputStyle}
          type="email"
          onKeyUp={(e: any) => setEmail(e.target.value)}
          placeholder="Your Email Address"
          required
        />
      </Form.Group>
      <Form.Group
        style={styles.inputStyle}
        className="mb-3"
        controlId="formBasicPassword"
      >
        <Form.Control
          style={styles.inputStyle}
          onKeyUp={(e: any) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          required
        />
      </Form.Group>

      <Button style={styles.btnStyle} type="submit">
        Create new account
      </Button>

      <Form.Group className="d-flex justify-content-start mt-3">
        <p>
          Already have an account?{" "}
          <a
            href="/login"
            style={{
              color: "black",
              textDecoration: "none",
              fontWeight: 900,
            }}
            className="link-dark"
          >
            Login
          </a>
        </p>
      </Form.Group>
    </Form>
  );
};

const styles = {
  inputStyle: {
    width: "384px",
    height: "48px",
  },
  btnStyle: {
    marginTop: "16px",
    width: "384px",
    height: "48px",
    // backgroundColor: "#00ADEF80",
    borderColor: "#00ADEF80",
    fontWeight: 700,
  },
};

export default SignUpForm;
