import React, { useState } from "react";
import {
	Alert,
	Button,
	Container,
	Offcanvas,
	Row,
	Table,
} from "react-bootstrap";
import AddAddress from "./AddAddress";

interface AddressesProps {
	addresses: string[];
	onSelect: (address: string) => any;
}

const Addresses: (props: AddressesProps) => JSX.Element = ({
	addresses,
	onSelect,
}) => {
	const [show, setShow] = useState<boolean>(false);
	const [showAddModal, setShowAddModal] = useState<boolean>(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const selectAddress = (address: string) => {
		onSelect(address);
		handleClose();
	};

	return (
		<>
			<Row className="justify-content-end p-0 m-0 py-4">
				<Button className="w-auto" variant="primary" onClick={handleShow}>
					Select address
				</Button>
			</Row>

			<Offcanvas
				placement="end"
				show={show}
				style={{ minWidth: 600 }}
				onHide={handleClose}
				backdropClassName="bg-light"
			>
				<Offcanvas.Header closeButton className="bg-light">
					<Offcanvas.Title>Addresses</Offcanvas.Title>
				</Offcanvas.Header>
				<Offcanvas.Body className="p-4 m-0">
					<Row className="justify-content-end p-0 m-0 py-4">
						<Button onClick={() => setShowAddModal(true)} className="w-auto">
							Add address
						</Button>
					</Row>
					<Container fluid>
						{addresses?.length !== 0 ? (
							<Table striped bordered hover>
								<thead>
									<tr>
										<th>#</th>
										<th>Address</th>
									</tr>
								</thead>
								<tbody>
									{addresses?.map((address, i) => (
										<tr
											className="cursor-pointer"
											onClick={() => selectAddress(address)}
										>
											<td>{i + 1}</td>
											<td>{address}</td>
										</tr>
									))}
								</tbody>
							</Table>
						) : (
							<Row className="justify-content-center p-5">
								<Alert variant="warning" className="w-auto">
									Please add some addresses
								</Alert>
							</Row>
						)}
					</Container>
				</Offcanvas.Body>
			</Offcanvas>
			{showAddModal && <AddAddress onHide={() => setShowAddModal(false)} />}
		</>
	);
};

export default Addresses;
