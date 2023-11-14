import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function ImageAndTextExample() {
    return (

        <Container>
            <Card className='mt-5' bg='primary'>
                <Card.Body>
                    <Card.Text className='text-center'>
                        @ 20xx Ofodile development. All rights reserved.
                    </Card.Text>
                </Card.Body>
            </Card>
        </Container>

    );
}

export default ImageAndTextExample;