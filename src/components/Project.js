import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";

function Project({ id, title, description, repo, url }) {
  return (
    <Col key={id}>
      <Card>
        <Card.Img variant="top" src="holder.js/100px160" />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>{description}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <ul>
            <li>
              <a href={repo} target="_blank" rel="noreferrer">
                GitHub Repo
              </a>
            </li>
            <li>
              <a href={url} target="_blank" rel="noreferrer">
                Live site
              </a>
            </li>
          </ul>
        </Card.Footer>
      </Card>
    </Col>
  );
}

export default Project;
