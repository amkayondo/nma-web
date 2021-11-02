import { Form, Button } from "react-bootstrap"
import Link from 'next/link'

export interface LoginFormProps {
    style?: object
}

const LoginForm = (props: LoginFormProps) => {
    return (
      <Form {...props}>
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
        <Form.Group
          style={styles.inputStyle}
          className="mb-3"
          controlId="formBasicEmail"
        >
          <Form.Control
            style={styles.inputStyle}
            type="email"
            placeholder="Your Email Address"
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
          />
        </Form.Group>
        <Form.Group className="d-flex justify-content-end ">
          <Link href="/resetPassword">
            <a className="text-white" >Forgot Password</a>
          </Link>
        </Form.Group>

        <Button style={styles.btnStyle} type="submit">
          Log In
        </Button>
        <Form.Group className="d-flex justify-content-end">
          <a className="text-white" href="/resetPassword">
            <Button
              style={{
                marginTop: "16px",
                width: "384px",
                height: "48px",
                backgroundColor: "#fff",
                borderColor: "#fff",
                fontWeight: 700,
                color: "black"
              }}
            >
              Forgot Password
            </Button>
          </a>
        </Form.Group>
      </Form>
    );
}

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

export default LoginForm