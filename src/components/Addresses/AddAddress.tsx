import { Formik } from 'formik';
import React, { useContext } from 'react'
import { Button, Form, Modal, Row } from 'react-bootstrap'
import { AppContext } from '../../context';
import { IContextValues } from '../../types';
import * as Yup from "yup";

interface AddAddressProps {
    onHide: any;
}

const AddAddress: (props: AddAddressProps) => JSX.Element = ({ onHide }) => {

    const { addAddress } = useContext(AppContext) as IContextValues;

    return (
        <Modal onHide={onHide} show animation={false}>
            <Formik
                onSubmit={({ address }) => {
                    addAddress(address);
                    onHide();
                }}
                validationSchema={Yup.object().shape({
                    address: Yup.string().required("Please enter a valid address")
                })}
                initialValues={{
                    address: ""
                }}>
                {({
                    values,
                    errors,
                    touched,
                    handleChange,
                    handleBlur,
                    handleSubmit
                }) => (
                    <>
                        <Modal.Header closeButton>
                            Add a new address
                        </Modal.Header>
                        <Modal.Body>
                            <Form.Group className="mb-3">
                                <Form.Label>Wallet Address</Form.Label>
                                <Form.Control
                                    value={values.address}
                                    name="address"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    placeholder="Enter wallet address" />
                                {touched.address && errors.address && <p className='text-danger '>{errors.address}</p>}
                            </Form.Group>
                        </Modal.Body>
                        <Modal.Footer>
                            <Row className='justify-content-end w-100'>
                                <Button onClick={handleSubmit as any} className='w-auto me-2' variant='info'>
                                    Save
                                </Button>
                                <Button onClick={onHide} className='w-auto' variant='danger'>
                                    Cancel
                                </Button>
                            </Row>
                        </Modal.Footer>
                    </>
                )}
            </Formik>
        </Modal>
    )
}

export default AddAddress