import React from "react";
import { Container, Table } from "react-bootstrap";
import { LedgerTableData } from "./data";

interface LedgerTableProps { }

const LedgerTable: (props: LedgerTableProps) => JSX.Element = ({ }) => {

	return (
		<Container>
			<Table striped bordered hover>
				<thead>
					<tr>
						<th>#</th>
						<th>Token Name</th>
						<th>Balance</th>
					</tr>
				</thead>
				<tbody>
					{LedgerTableData.map((item, index) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{item.name}</td>
							<td>{item.balance}</td>
						</tr>
					))}
				</tbody>
			</Table>
		</Container>
	);
};

export default LedgerTable;
