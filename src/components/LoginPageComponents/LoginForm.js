import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const LoginForm = ({ handleSubmit, handleChange }) => {
  return (
    <Form onSubmit={handleSubmit}>
      <h2>Sign In</h2>
      <Form.Group className="mb-3">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          name="username"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <Form.Group className="mb-3">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          name="password"
          onChange={handleChange}
          required
        />
      </Form.Group>
      <center>
        <Button variant="primary" type="submit">
          Sign In
        </Button>
      </center>
    </Form>
  );
};

LoginForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
};

export default LoginForm;
