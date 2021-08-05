import { Button } from "react-bootstrap";
import PropTypes from "prop-types";

const UserPageFooter = ({
  toggleInput,
  handleToggle,
  saveNewPassword,
  handleLogout,
}) => {
  return (
    <div>
      {toggleInput ? (
        <>
          <Button onClick={saveNewPassword}>Save Password</Button>
          <Button onClick={handleToggle}>Cancel</Button>
        </>
      ) : (
        <>
          <Button onClick={handleToggle}>Change Password</Button>
          <Button onClick={handleLogout}>Logout</Button>
        </>
      )}
    </div>
  );
};

UserPageFooter.propTypes = {
  toggleInput: PropTypes.bool,
  handleToggle: PropTypes.func,
  saveNewPassword: PropTypes.func,
  handleLogout: PropTypes.func,
};

export default UserPageFooter;
