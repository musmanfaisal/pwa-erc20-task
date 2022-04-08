import React from 'react'
import { Button, Form, Modal, Row } from 'react-bootstrap'

interface AddAddressProps {
    onHide: any;
}

const AddAddress: (props: AddAddressProps) => JSX.Element = ({ onHide }) => {

    return (
        <Modal onHide={onHide} show animation={false}>
            <Modal.Header closeButton>
                Add a new address
            </Modal.Header>
            <Modal.Body>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Wallet Address</Form.Label>
                    <Form.Control placeholder="Enter wallet address" />
                </Form.Group>
            </Modal.Body>
            <Modal.Footer>
                <Row className='justify-content-end w-100'>
                    <Button className='w-auto me-2' variant='info'>
                        Save
                    </Button>
                    <Button className='w-auto' variant='danger'>
                        Cancel
                    </Button>
                </Row>
            </Modal.Footer>
        </Modal>
    )
}

export default AddAddress