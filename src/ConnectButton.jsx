import { useAccount, useSwitchNetwork, useNetwork, useContractReads } from "wagmi"
import { useWeb3Modal } from "@web3modal/wagmi/react"
import React, { useState } from "react"

function Account() {
	return <w3m-account-button balance={false} />
}

export default function ConnectButton(props) {
	const { open } = useWeb3Modal()
	const { isConnected, address } = useAccount({
		onConnect() {
			setEnableRead(true)
		},
		onDisconnect() {
			setEnableRead(false)
		},
	})
	const { chain } = useNetwork()
	const [enableRead, setEnableRead] = useState(false)

	const { chains, error: chainError, isLoading: chainLoading, pendingChainId, switchNetwork } = useSwitchNetwork({ throwForSwitchChainNotSupported: true })

	const [count, setSuccessCount] = useState(false)
	const abi = [
		{
			inputs: [{ internalType: "address", name: "owner", type: "address" }],
			name: "tokensOfOwner",
			outputs: [{ internalType: "uint256[]", name: "", type: "uint256[]" }],
			stateMutability: "view",
			type: "function",
		},
	]

	const read = useContractReads({
		suspense: true,
		enabled: enableRead,
		contracts: [
			{
				address: "0x49cC7de889C1e4bDc1b4156B882cA5c76C668987",
				abi: abi,
				functionName: "tokensOfOwner",
				args: [address],
			},
			{
				address: "0xA42ccA468fd07491824Ab121CB559f1B3791e92C",
				abi: abi,
				functionName: "tokensOfOwner",
				args: [address],
			},
			{
				address: "0x6f2C97dB74D4d3E8A31e628325A39bbef928dd59",
				abi: abi,
				functionName: "tokensOfOwner",
				args: [address],
			},
			{
				address: "0xFA17c9e4f5Ec1A62d032731fE0a9529D7B851BE6",
				abi: abi,
				functionName: "tokensOfOwner",
				args: [address],
			},
		],
		onSuccess(data) {
			console.log(data)
			const successArray = data.filter((item) => item.status === "success")
			setSuccessCount(successArray.length)
		},
	})
	return (
		<>
			{isConnected ? (
				<>
					<Account />
					<h3>Contract reads: {count} of 4</h3>
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
