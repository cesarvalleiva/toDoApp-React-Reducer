import { Row, Col, Form } from 'react-bootstrap';
import './Form.css'

const inputForm = () => {
    return ( 
        <Row className="justify-content-md-center">
            <Col md={10}>
                <Form>
                    <Form.Group>
                        <Form.Control name="task" placeholder="Agregar tarea" />
                    </Form.Group>
                </Form>
            </Col>
        </Row>
     );
}
 
export default inputForm;