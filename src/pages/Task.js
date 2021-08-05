import { useEffect, useState } from "react";
import NavbarComponent from "../components/Navbar";
import { Button, Container } from "react-bootstrap";
import axios from "axios";
import { v4 as uuidv4 } from "uuid";
import AddTaskFormModal from "../components/TaskPageComponents/Modal";
import Loader from "../components/Loader";
import DataTable from "../components/TaskPageComponents/Table";
import TaskForm from "../components/TaskPageComponents/TaskForm";
import { showToast } from "../components/Toast";

const Task = () => {
  // DATA STATE
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  // NEW TASK STATE
  const [title, setTitle] = useState();
  const [completed, setCompleted] = useState(false);

  //MODAL STATE
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    setLoading(true);
    // FETCHING DATA
    axios.get("https://jsonplaceholder.typicode.com/todos/").then((res) => {
      if (res.status === 200) {
        setData(res.data.slice(0, 5));
        setLoading(false);
      }
    });
  }, []);

  const resetState = () => {
    setTitle(null);
    setCompleted(false);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = { userId: 1, id: uuidv4(), title, completed };
    setData((prevState) => [newTodo, ...prevState]);
    setShow(false);
    resetState();
    showToast("success", "Task added successfully !");
  };

  const handleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleDelete = (record) => {
    let newData = data.filter((task) => task.id !== record.id);
    setData(newData);
    showToast("success", "Task deleted successfully !");
  };

  return (
    <>
      <NavbarComponent />
      <Container>
        <h1>Tasks</h1>
        <AddTaskFormModal
          show={show}
          handleShow={handleShow}
          handleClose={handleClose}
        >
          <TaskForm
            handleSubmit={handleSubmit}
            handleChange={handleChange}
            setCompleted={setCompleted}
          />
        </AddTaskFormModal>
        <Button onClick={handleShow} className="add-task-btn">
          Add Task
        </Button>
        {loading ? (
          <Loader />
        ) : (
          <DataTable data={data} handleDelete={handleDelete} />
        )}
      </Container>
    </>
  );
};

export default Task;
