import { Form, Button, Alert } from "react-bootstrap";
import Link from "next/link";
import { useState } from "react";
// import { UserState } from "../../infrastructure/types";
import { useUserRepository } from "../../application/repostiories/useUserRepository";
import { useObservable } from "../../infrastructure/hooks/useObservable";

export interface LoginFormProps {
  style?: object;
  onSubmit: any;
}

const LoginForm = (props: LoginFormProps) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const userRepository = useUserRepository();
  const userState = useObservable(userRepository.getUserObservable());
  const { isSubmitting, isLoggedIn, error, message, isError } = userState;

  const onSubmitForm = (e: any) => {
    e.preventDefault();
    props.onSubmit({ email, password });
  };
  return (
    <Form {...props} onSubmit={onSubmitForm}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label
          className="text-white"
          style={{
            fontWeight: "bold",
            fontSize: "40px",
          }}
        >
          Login
        </Form.Label>
      </Form.Group>
      {isError === true ? (
        error.length === 0 || error === 'Unsupported input' ? (
          ""
        ) : (
          <Alert variant="danger">{error}</Alert>
        )
      ) :  message === undefined || message.length === 0 ? (
        ""
      ) : (
        <Alert variant="primary">{message}</Alert>
      )}
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
          type="password"
          placeholder="Password"
          onKeyUp={(e: any) => setPassword(e.target.value)}
          required
        />
      </Form.Group>
      <Form.Group className="d-flex justify-content-end ">
        <Link href="/resetPassword">
          <a className="text-white">Forgot Password</a>
        </Link>
      </Form.Group>

      <Button style={styles.btnStyle} type="submit" disabled={isSubmitting}>
        Log In
      </Button>
      <Form.Group className="d-flex justify-content-end">
        <a className="text-white" href="/signup">
          <Button
            style={{
              marginTop: "16px",
              width: "384px",
              height: "48px",
              backgroundColor: "#fff",
              borderColor: "#fff",
              fontWeight: 700,
              color: "black",
            }}
          >
            Create new account
          </Button>
        </a>
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

export default LoginForm;
