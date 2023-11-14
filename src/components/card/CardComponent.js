import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { productDetails } from "../../data";
import { Container, Row } from 'react-bootstrap';

function CardComponent() {
  return (
    <Container>
      <Row className='mt-5 gap-4'>
        {productDetails.map(item => (
          <Card style={{ width: '18rem' }} className='container'>
            <Card.Img variant="top" src={item.image} width={50} />
            <Card.Body>
              <Card.Title>{item.title}</Card.Title>
              <Card.Text>
                {
                  item.desc
                }
              </Card.Text>
              <Button variant="danger">{item.price}</Button>
            </Card.Body>
          </Card>
        ))}
      </Row>
    </Container>
  );
}

export default CardComponent;