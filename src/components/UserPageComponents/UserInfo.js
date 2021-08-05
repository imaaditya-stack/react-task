import { Row, Col, Form } from "react-bootstrap";
import PropTypes from "prop-types";

const UserInfo = ({ USER_SESSION, toggleInput, setNewPassword }) => {
  return (
    <>
      <Row className="mb-5">
        <Col lg={2}>
          <h5>Username</h5>
        </Col>
        <Col>
          <h5>{USER_SESSION?.username}</h5>
        </Col>
      </Row>
      <Row className="mb-5">
        <Col lg={2}>
          <h5>Password</h5>
        </Col>
        <Col>
          <Form.Control
            type="password"
            readOnly={!toggleInput}
            defaultValue={USER_SESSION?.password}
            onChange={(e) => setNewPassword(e.target.value)}
          />
        </Col>
      </Row>
    </>
  );
};

UserInfo.propTypes = {
  USER_SESSION: PropTypes.object,
  toggleInput: PropTypes.bool,
  setNewPassword: PropTypes.func,
};

export default UserInfo;
