/* eslint-disable react/no-unescaped-entities */
import React, { Suspense, useCallback, useEffect, useState } from "react"

import { useAccount, useNetwork } from "wagmi"
import cls from "./MintNFT.module.scss"
import "./toast.scss"

import "react-toastify/dist/ReactToastify.css"
import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi"
import ConnectButton from "./ConnectButton"
import MintSuccess from "./MintSuccess/MintSuccess"
import { useToast } from "../helpers/hooks/useToast"

import { supportedChains } from "../config"

import MintButton from "./MintButton"

const NFTcontracts = {
	Sepolia: "0x42Fbf87Cd983c0F0BCdfF2d8A5904CD4968cD76F",
	Ethereum: "0x49cC7de889C1e4bDc1b4156B882cA5c76C668987",
	"Arbitrum One": "0x6f2C97dB74D4d3E8A31e628325A39bbef928dd59",
	Polygon: "0xA42ccA468fd07491824Ab121CB559f1B3791e92C",
	"BNB Smart Chain": "0xFA17c9e4f5Ec1A62d032731fE0a9529D7B851BE6",
}

const MintNFT = () => {
	const [isSuccessModal, setIsSuccessModal] = useState(false)
	const { dismissAll, mintError, chainSwitch, connectSuccess } = useToast()

	const { chain } = useNetwork()
	const { isConnected } = useAccount({
		onConnect({ address, connector, isReconnected }) {
			refetch()
			connectSuccess()
		},

		onDisconnect() {
			dismissAll()
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

	const { error, isError, write, data } = useContractWrite(config)

	const {
		isLoading,
		error: transError,
		isError: isTransError,
	} = useWaitForTransaction({
		hash: data?.hash,
		onSuccess(data) {
			onOpenModal()
		},
	})
	useEffect(() => {
		if (isConnected && chain) {
			if (supportedChains.includes(chain.id)) {
				refetch()
			} else {
				console.log("unsupported chain")
			}
		}
		return
	}, [chain, isConnected, refetch])

	useEffect(() => {
		if (isError || isTransError) {
			if (
				(error || transError)?.message.includes("cancelled") ||
				(error || transError)?.message.includes("canceled") ||
				(error || transError)?.message.includes("rejected") ||
				error?.code === 4001
			) {
				console.log("1")
			} else if ((error || transError)?.message.includes("funds") || error?.code === -3200) {
				console.log("1")
			} else if ((error || transError)?.message) {
				console.log("1")
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [error, isError, isTransError, transError])

	const onCloseModal = useCallback(() => {
		setIsSuccessModal(false)
	}, [])

	const onOpenModal = useCallback(() => {
		setIsSuccessModal(true)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	return (
		<div className={cls.MintNFT}>
			<div className={`${cls.buttonsBlock} ${isLoading ? "disabled" : ""}`}>
				<div className={isConnected ? cls.connected : cls.disconnected} id="mintID">
					<ConnectButton chain={chain} connect header={false} />
				</div>
				{isConnected && (
					<Suspense fallback={<span className="loader"></span>}>
						<MintButton isLoading={isLoading} onCloseModal={onCloseModal} write={write} chain={chain} />
					</Suspense>
				)}
			</div>

			{isConnected && <>{isSuccessModal && <MintSuccess isOpen={isSuccessModal} onClose={onCloseModal} />}</>}
		</div>
	)
}

export default React.memo(MintNFT)
