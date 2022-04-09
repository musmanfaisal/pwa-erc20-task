import Web3 from "web3";

declare type getWalletInformationType = (args: { address: string; setData: any }) => Promise<void>;

declare global {
    interface Window {
        ethereum?: any;
    }
}

export const getWalletInformation: getWalletInformationType = async ({ address, setData }) => {
    // const provider = "https://mainnet.infura.io/v3/6246707008c04969805a13694dff7951"
    const Web3Client = new Web3(window.ethereum);
    const balance = await Web3Client.eth.getBalance(address);
    const format = Web3Client.utils.fromWei(balance); // 29803630.997051883414242659\
    console.log(format);
}
