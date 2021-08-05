import { useState } from "react";
import { Container } from "react-bootstrap";
import { useHistory } from "react-router-dom";
import LoginForm from "../components/LoginPageComponents/LoginForm";
import { storeUserSession } from "../utils";
import { showToast } from "../components/Toast";

const Login = () => {
  const [loginCredentials, setLoginCredentials] = useState({});

  const history = useHistory();

  const handleChange = (event) => {
    setLoginCredentials((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (loginCredentials.username.length < 5) {
      showToast("error", "Username is very short !");
    } else if (loginCredentials.password.length < 5) {
      showToast("error", "Password length is very short !");
    } else {
      storeUserSession(loginCredentials);
      history.push("/home");
      showToast("success", "Logged In Successfully");
    }
  };

  return (
    <Container fluid className="login-page-wrapper">
      <LoginForm handleChange={handleChange} handleSubmit={handleSubmit} />
    </Container>
  );
};

export default Login;
