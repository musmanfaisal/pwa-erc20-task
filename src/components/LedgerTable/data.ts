import { ICoinAddress } from "../../types";

export const coins: ICoinAddress[] = [
    {
        name: "ETHER",
        address: "0x76F94412eA028E2bF458243431a2C003483924a1"
    },
    {
        name: "LINK",
        address: "0x514910771AF9Ca656af840dff83E8264EcF986CA"
    },
    {
        name: "USDT",
        address: "0xdac17f958d2ee523a2206206994597c13d831ec7"
    },
    {
        name: "DAI",
        address: "0x6b175474e89094c44da98b954eedeac495271d0f"
    }
]

export const minABI = [
    {
        constant: true,
        inputs: [],
        name: "name",
        outputs: [
            {
                name: "",
                type: "string"
            }
        ],
        payable: false,
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "symbol",
        outputs: [
            {
                name: "",
                type: "string"
            }
        ],
        payable: false,
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "decimals",
        outputs: [
            {
                name: "",
                type: "uint8"
            }
        ],
        payable: false,
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "totalSupply",
        outputs: [
            {
                name: "",
                type: "uint256"
            }
        ],
        payable: false,
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "_owner",
                type: "address"
            }
        ],
        name: "balanceOf",
        outputs: [
            {
                name: "balance",
                type: "uint256"
            }
        ],
        payable: false,
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_to",
                type: "address"
            },
            {
                name: "_value",
                type: "uint256"
            }
        ],
        name: "transfer",
        outputs: [
            {
                name: "success",
                type: "bool"
            }
        ],
        payable: false,
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_from",
                type: "address"
            },
            {
                name: "_to",
                type: "address"
            },
            {
                name: "_value",
                type: "uint256"
            }
        ],
        name: "transferFrom",
        outputs: [
            {
                name: "success",
                type: "bool"
            }
        ],
        payable: false,
        type: "function"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_spender",
                type: "address"
            },
            {
                name: "_value",
                type: "uint256"
            }
        ],
        name: "approve",
        outputs: [
            {
                name: "success",
                type: "bool"
            }
        ],
        payable: false,
        type: "function"
    },
    {
        constant: true,
        inputs: [
            {
                name: "_owner",
                type: "address"
            },
            {
                name: "_spender",
                type: "address"
            }
        ],
        name: "allowance",
        outputs: [
            {
                name: "remaining",
                type: "uint256"
            }
        ],
        payable: false,
        type: "function"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "_from",
                type: "address"
            },
            {
                indexed: true,
                name: "_to",
                type: "address"
            },
            {
                indexed: false,
                name: "_value",
                type: "uint256"
            }
        ],
        name: "Transfer",
        type: "event"
    },
    {
        anonymous: false,
        inputs: [
            {
                indexed: true,
                name: "_owner",
                type: "address"
            },
            {
                indexed: true,
                name: "_spender",
                type: "address"
            },
            {
                indexed: false,
                name: "_value",
                type: "uint256"
            }
        ],
        name: "Approval",
        type: "event"
    },
    {
        inputs: [
            {
                name: "_initialAmount",
                type: "uint256"
            },
            {
                name: "_tokenName",
                type: "string"
            },
            {
                name: "_decimalUnits",
                type: "uint8"
            },
            {
                name: "_tokenSymbol",
                type: "string"
            }
        ],
        payable: false,
        type: "constructor"
    },
    {
        constant: false,
        inputs: [
            {
                name: "_spender",
                type: "address"
            },
            {
                name: "_value",
                type: "uint256"
            },
            {
                name: "_extraData",
                type: "bytes"
            }
        ],
        name: "approveAndCall",
        outputs: [
            {
                name: "success",
                type: "bool"
            }
        ],
        payable: false,
        type: "function"
    },
    {
        constant: true,
        inputs: [],
        name: "version",
        outputs: [
            {
                name: "",
                type: "string"
            }
        ],
        payable: false,
        type: "function"
    }
];