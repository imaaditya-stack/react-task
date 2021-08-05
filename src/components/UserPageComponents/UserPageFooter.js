import { Container, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const UserPageFooter = ({
  toggleInput,
  handleToggle,
  saveNewPassword,
  handleLogout,
}) => {
  return (
    <>
      {toggleInput ? (
        <Container className="user-page-footer">
          <Button className="mr-5" onClick={saveNewPassword}>
            Save Password
          </Button>
          <Button onClick={handleToggle}>Cancel</Button>
        </Container>
      ) : (
        <Container className="user-page-footer">
          <Button onClick={handleToggle}>Change Password</Button>
          <Button onClick={handleLogout}>Logout</Button>
        </Container>
      )}
    </>
  );
};

UserPageFooter.propTypes = {
  toggleInput: PropTypes.bool,
  handleToggle: PropTypes.func,
  saveNewPassword: PropTypes.func,
  handleLogout: PropTypes.func,
};

export default UserPageFooter;
