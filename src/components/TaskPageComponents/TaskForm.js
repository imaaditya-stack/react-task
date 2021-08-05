import { Form, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const TaskForm = ({ handleSubmit, handleChange, setCompleted }) => {
  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3">
          <Form.Label>Title</Form.Label>
          <Form.Control
            type="text"
            name="title"
            onChange={handleChange}
            required
          />
        </Form.Group>
        <Form.Check
          type="checkbox"
          label="Completed"
          name="completed"
          onChange={(e) => setCompleted(e.target.checked)}
          className="mb-2"
        />
        <br />
        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </div>
  );
};

TaskForm.propTypes = {
  handleSubmit: PropTypes.func,
  handleChange: PropTypes.func,
  setCompleted: PropTypes.func,
};

export default TaskForm;
