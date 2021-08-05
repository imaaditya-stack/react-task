import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

const Information = ({ data, id }) => {
  const value = data.find((item) => item.id === parseInt(id));
  return (
    <Card>
      <Card.Body>{value?.description}</Card.Body>
    </Card>
  );
};

Information.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      description: PropTypes.string,
    })
  ),
  id: PropTypes.number,
};

export default Information;
