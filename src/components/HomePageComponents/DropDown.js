import { Form } from "react-bootstrap";
import PropTypes from "prop-types";

const DropDown = ({ data, setOption }) => {
  return (
    <Form.Select
      aria-label="Default select example"
      onChange={(e) => setOption(e.target.value)}
      size="lg"
    >
      <option value="">Select Domain</option>
      {data?.map((item) => (
        <option key={item.id} value={item.id}>
          {item.label}
        </option>
      ))}
    </Form.Select>
  );
};

DropDown.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  setOption: PropTypes.func,
};

export default DropDown;
