import { Form, Button } from "react-bootstrap"
import Link from 'next/link'

export interface ResetPasswordFormProps {
    style?: object
}

const ResetPasswordForm = (props: ResetPasswordFormProps) => {
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
            Reset Password
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

        <Button style={styles.btnStyle} type="submit">
          Reset Password
        </Button>
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
    }
}

export default ResetPasswordForm