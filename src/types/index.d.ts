import { Dispatch, SetStateAction } from "react";

export interface IBalances {
	name: string;
	balance: string;
}

export interface IContextValues {
	addresses: string[];
	balances: IBalances[];
	selectedAddress: string | undefined;
	addAddress: (address: string) => any;
	setBalances: Dispatch<SetStateAction<IBalances[]>>;
	setSelectedAddress: (selectedAddress: string) => void;
	theme: "dark" | "light";
	setTheme: Dispatch<SetStateAction<string>>;
}

export interface ICoinAddress {
	name: string;
	address: string;
}
