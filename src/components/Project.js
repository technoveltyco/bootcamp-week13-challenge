import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Project(props) {
  return (
    <Col>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{props.title}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
}

export default Project;
