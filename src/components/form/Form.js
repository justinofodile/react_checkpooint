import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';

function TextControlsExample() {
    return (
        <Container className='mt-5'>
            <Row>
                <Col className='text-center'><h1>Contact Us</h1>
                    <p>Headquarters Nigerian Air Force</p>
                    <p>Area 7 carki Abuja</p>
                </Col>
                <Col>
                    <Form>
                        <Form.Group className="mb-3" controlId="formGroupEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="Enter email" />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formGroupPassword">
                            <Form.Label>Phone</Form.Label>
                            <Form.Control type="text" placeholder="Phone" />
                        </Form.Group>
                        <FloatingLabel controlId="floatingTextarea2" label="Comments">
                            <Form.Control
                                as="textarea"
                                placeholder="Leave a comment here"
                                style={{ height: '200px' }}
                            />
                        </FloatingLabel>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}

export default TextControlsExample;