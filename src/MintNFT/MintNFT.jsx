/* eslint-disable react/no-unescaped-entities */
import React from "react"

import { useAccount, useNetwork, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi"

import ConnectButton from "./ConnectButton"

import MintButton from "./MintButton"

const NFTcontracts = {
	Sepolia: "0x42Fbf87Cd983c0F0BCdfF2d8A5904CD4968cD76F",
	Ethereum: "0x49cC7de889C1e4bDc1b4156B882cA5c76C668987",
	"Arbitrum One": "0x6f2C97dB74D4d3E8A31e628325A39bbef928dd59",
	Polygon: "0xA42ccA468fd07491824Ab121CB559f1B3791e92C",
	"BNB Smart Chain": "0xFA17c9e4f5Ec1A62d032731fE0a9529D7B851BE6",
}

const MintNFT = () => {
	const { chain } = useNetwork()
	const { isConnected } = useAccount({
		onConnect() {
			refetch()
		},
	})

	const { refetch, config } = usePrepareContractWrite({
		address: isConnected ? NFTcontracts[chain.name] : "0x0",
		abi: [
			{
				name: "mint",
				type: "function",
				stateMutability: "payable",
				inputs: [{ internalType: "uint256", name: "_mintAmount", type: "uint256" }],
				outputs: [],
			},
		],
		args: ["1"],
		functionName: "mint",
	})

	const { write, data } = useContractWrite(config)

	const { isLoading } = useWaitForTransaction({
		hash: data?.hash,
		onSuccess(data) {
			console.log(data)
		},
		onError(error) {
			console.log(error)
		},
	})

	return <div>{isConnected ? <MintButton isLoading={isLoading} write={write} /> : <ConnectButton connect />}</div>
}

export default React.memo(MintNFT)
