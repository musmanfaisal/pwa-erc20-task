import { useContext, useEffect, useState } from "react";
import { Alert, Container, Row, Table } from "react-bootstrap";
import { getWalletInformation } from "./methods";
import { AppContext } from "../../context";
import { IContextValues } from "../../types";

interface LedgerTableProps { }

const LedgerTable: (props: LedgerTableProps) => JSX.Element = ({ }) => {
	const { theme, selectedAddress } = useContext(AppContext) as IContextValues;
	const [data, setData] = useState<any>();

	useEffect(() => {
		if (selectedAddress) getWalletInformation({ address: selectedAddress, setData });
	}, [selectedAddress]);

	return (
		<Container>
			{data ? <Table striped bordered hover variant={theme}>
				<thead>
					<tr>
						<th>#</th>
						<th>Token Name</th>
						<th>Balance</th>
					</tr>
				</thead>
				<tbody>
					{data.map((item: any, index: number) => (
						<tr key={index}>
							<td>{index + 1}</td>
							<td>{item.name}</td>
							<td>{item.balance}</td>
						</tr>
					))}
				</tbody>
			</Table>
				:
				<Row className="justify-content-center">
					<Alert className="w-auto" variant={theme}>
						Please select some address to show its information
					</Alert>
				</Row>}
		</Container>
	);
};

export default LedgerTable;
