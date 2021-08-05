import { Table, Button } from "react-bootstrap";
import PropTypes from "prop-types";

const DataTable = ({ data, handleDelete }) => {
  return (
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>Title</th>
          <th>Completed</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {data?.map((task, idx) => (
          <tr key={task.id}>
            <td>{idx + 1}</td>
            <td>{task.title}</td>
            <td>{task.completed.toString().toUpperCase()}</td>
            <td>
              <Button className="red-btn" onClick={() => handleDelete(task)}>
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
};

DataTable.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      completed: PropTypes.bool,
    })
  ),
  handleDelete: PropTypes.func,
};
export default DataTable;
