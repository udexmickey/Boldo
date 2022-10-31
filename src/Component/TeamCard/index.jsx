import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import scott from '../../assets/images/scott-card.png'
import dwight from '../../assets/images/pam.png'

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

function TeamCard2({className}) {
  return (
    <Row md={2} className={`g-4 ${className}`}>
      {Array.from({ length: 4 }).map((_, idx) => (
        <Col>
          <Card >
            <div className="" style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
              <Card.Img variant="top" src={dwight} className={'card-img-top2'}/>
              <Card.Body >
                <Card.Title>Dwight Schrute</Card.Title>
                <Card.Text>General Manager</Card.Text>
              </Card.Body>
            </div>
          </Card>
        </Col>
      ))}
    </Row>
  );
}

export { TeamCard2 }
export default TeamCard;