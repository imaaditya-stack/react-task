import { useState } from "react";
import NavbarComponent from "../components/Navbar";
import { Container } from "react-bootstrap";
import { retrieveUserSession, updatePassword } from "../utils";
import { useHistory } from "react-router-dom";
import UserInfo from "../components/UserPageComponents/UserInfo";
import UserPageFooter from "../components/UserPageComponents/UserPageFooter";
import { showToast } from "../components/Toast";

const User = () => {
  const [newPassword, setNewPassword] = useState();

  const [toggleInput, setToggleInput] = useState(false);

  const USER_SESSION = retrieveUserSession();

  const history = useHistory();

  const saveNewPassword = () => {
    if (newPassword.length < 5) {
      showToast("error", "Password length is very short !");
    } else {
      updatePassword(USER_SESSION, newPassword);
      setToggleInput((prevState) => !prevState);
      showToast("success", "Password Changed !");
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    history.push("/");
  };

  const handleToggle = () => setToggleInput((prevState) => !prevState);

  return (
    <>
      <NavbarComponent />
      <Container className="user-page-wrapper">
        <h1>Edit your profile !</h1>
        <UserInfo
          USER_SESSION={USER_SESSION}
          toggleInput={toggleInput}
          setNewPassword={setNewPassword}
        />
        <UserPageFooter
          toggleInput={toggleInput}
          handleLogout={handleLogout}
          handleToggle={handleToggle}
          saveNewPassword={saveNewPassword}
        />
      </Container>
    </>
  );
};

export default User;
