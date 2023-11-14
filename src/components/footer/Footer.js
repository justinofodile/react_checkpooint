import { Container } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';

function ImageAndTextExample() {
    return (

        <Card className='mt-5'>
            <Card.Body>
                <Card.Text className='text-center'>
                    @ 20xx Ofodile development. All rights reserved.
                </Card.Text>
            </Card.Body>
        </Card>

    );
}

export default ImageAndTextExample;