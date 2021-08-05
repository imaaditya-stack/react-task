import { useState } from "react";
import NavbarComponent from "../components/Navbar";
import { Container } from "react-bootstrap";
import data from "../data.json";
import Information from "../components/HomePageComponents/Information";
import Dropdown from "../components/HomePageComponents/DropDown";

const Home = () => {
  const [option, setOption] = useState();

  return (
    <>
      <NavbarComponent />
      <Container>
        <h1>Gather Information !</h1>
        <Dropdown data={data} setOption={setOption} />
        {option && <Information id={option} data={data} />}
      </Container>
    </>
  );
};

export default Home;
