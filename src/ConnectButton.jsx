import { useAccount, useSwitchNetwork, useNetwork, useContractReads, usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi"
import { useWeb3Modal } from "@web3modal/wagmi/react"
import React, { useState } from "react"
import { arbitrum, bsc, mainnet, polygon } from "viem/chains"

function Account() {
	return <w3m-account-button balance={false} />
}

export default function ConnectButton(props) {
	const NFTcontracts = {
		Sepolia: "0x42Fbf87Cd983c0F0BCdfF2d8A5904CD4968cD76F",
		Ethereum: "0x49cC7de889C1e4bDc1b4156B882cA5c76C668987",
		"Arbitrum One": "0x6f2C97dB74D4d3E8A31e628325A39bbef928dd59",
		Polygon: "0xA42ccA468fd07491824Ab121CB559f1B3791e92C",
		"BNB Smart Chain": "0xFA17c9e4f5Ec1A62d032731fE0a9529D7B851BE6",
	}
	const { open } = useWeb3Modal()
	const { isConnected, address } = useAccount({
		onConnect() {
			refetch()
		},
	})
	const { chain } = useNetwork()

	const { chains, error: chainError, isLoading: chainLoading, pendingChainId, switchNetwork } = useSwitchNetwork({ throwForSwitchChainNotSupported: true })

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

	const { error, isError, write, data } = useContractWrite(config)

	const {
		isLoading,
		isSuccess,
		error: transError,
		isError: isTransError,
	} = useWaitForTransaction({
		hash: data?.hash,
		onSuccess(data) {
			console.log("SuccessTrans", data)
		},
		onError(error) {
			console.log(error)
		},
	})
	return (
		<>
			{isConnected ? (
				<>
					<Account />
					<button
						onClick={() => {
							write?.()
						}}
					>
						MINT
					</button>
					<p>{isError || isTransError ? (error || transError)?.message : "no mint error"}</p>
					<h2>Currently connected to {chain.name}</h2>
					<div style={{ display: "flex", gap: "8px", marginBottom: "36px", flexWrap: "wrap" }}>
						{chains.map((x) => (
							<button disabled={!switchNetwork || x.id === chain?.id} key={x.id} onClick={() => switchNetwork?.(x.id)}>
								{x.name}
								{chainLoading && pendingChainId === x.id && " (switching)"}
							</button>
						))}
					</div>
					{chainError && <p>{chainError && chainError.message}</p>}
				</>
			) : (
				<button
					onClick={() => {
						open()
					}}
				>
					Connect Wallet
				</button>
			)}
		</>
	)
}
