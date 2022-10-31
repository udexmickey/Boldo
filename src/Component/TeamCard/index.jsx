import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import scott from '../../assets/images/scott-card.png'

function TeamCard({className}) {
  return (
    <Row md={3} className={`g-4 ${className}`}>
      {Array.from({ length: 3 }).map((_, idx) => (
        <Col>
          <Card>
            <Card.Img variant="top" src={scott} />
            <Card.Body>
              <Card.Title>Michael Scott</Card.Title>
              <Card.Text>General Manager</Card.Text>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export default TeamCard;