import { Modal } from "react-bootstrap";

const AddTaskFormModal = (props) => {
  return (
    <>
      <Modal show={props.show} onHide={props.handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Add Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>{props.children}</Modal.Body>
      </Modal>
    </>
  );
};

export default AddTaskFormModal;
