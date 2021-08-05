import { useState } from "react";
import NavbarComponent from "../components/Navbar";
import { Container } from "react-bootstrap";
import { retrieveUserSession, updatePassword } from "../utils";
import { useHistory } from "react-router-dom";
import UserInfo from "../components/UserPageComponents/UserInfo";
import UserPageFooter from "../components/UserPageComponents/UserPageFooter";

const User = () => {
  const [newPassword, setNewPassword] = useState();

  const [toggleInput, setToggleInput] = useState(false);

  const USER_SESSION = retrieveUserSession();

  const history = useHistory();

  const saveNewPassword = () => {
    if (newPassword.length < 5) {
      alert("Password length is very short !");
    } else {
      updatePassword(USER_SESSION, newPassword);
      setToggleInput((prevState) => !prevState);
      alert("Password Changed !");
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
      <Container>
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
