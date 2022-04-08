import { Dispatch, SetStateAction } from "react";

export interface IBalances {
	name: string;
	balance: string;
}

export interface IContextValues {
	addresses: string[];
	balances: IBalances[];
	selectedAddress: string | undefined;
	setAddresses: Dispatch<SetStateAction<string[]>>;
	setBalances: Dispatch<SetStateAction<IBalances[]>>;
	setSelectedAddress: (selectedAddress: string) => void;
}
