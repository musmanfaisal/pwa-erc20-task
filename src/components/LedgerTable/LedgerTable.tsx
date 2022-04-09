import React, { useContext } from "react";
import { Container, Table } from "react-bootstrap";
import { LedgerTableData } from "./data";
import { AppContext } from "../../context";
import { IContextValues } from "../../types";

interface LedgerTableProps {}

const LedgerTable: (props: LedgerTableProps) => JSX.Element = ({}) => {
	const { theme } = useContext(AppContext) as IContextValues;

	return (
		<Container>
			<Table striped bordered hover variant={theme}>
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
