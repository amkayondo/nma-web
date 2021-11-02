import { Form, Button } from "react-bootstrap"
import Link from 'next/link'

export interface SignUpFormProps {
    style?: object
}

const SignUpForm = (props: SignUpFormProps) => {
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
            Sigup
          </Form.Label>
        </Form.Group>
        <Form.Group
          style={styles.inputStyle}
          className="mb-3"
          controlId="formBasicFullName"
        >
          <Form.Control
            style={styles.inputStyle}
            type="text"
            placeholder="Full Name"
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
              class="link-dark"
            >
              Login
            </a>
          </p>
        </Form.Group>
      </Form>
    );
}

const styles = {
    inputStyle: {
        width: "384px",
        height: "48px"
    },
    btnStyle: {
        marginTop: "16px",
        width: "384px",
        height: "48px",
        // backgroundColor: "#00ADEF80",
        borderColor: "#00ADEF80",
        fontWeight: 700
    },
   
}

export default SignUpForm