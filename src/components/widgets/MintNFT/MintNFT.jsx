/* eslint-disable react/no-unescaped-entities */
import React, { useCallback, useEffect, useState } from "react"

import "./toast.scss"

import "react-toastify/dist/ReactToastify.css"
import { useAccount, useBalance, useConnect, useNetwork } from "wagmi"
import cls from "./MintNFT.module.scss"

import { usePrepareContractWrite, useContractWrite, useWaitForTransaction } from "wagmi"
import ConnectButton from "./ConnectButton"
import MintSuccess from "./MintSuccess/MintSuccess"
import { PURCHASE_ERRORS } from "../../../helpers/texts"
import { ampli, track } from "~/helpers/amplitude"
import mainconfig, { supportedChains } from "../../../config"
import { InjectedConnector } from "wagmi/connectors/injected"
import { useToast } from "../../../helpers/hooks/useToast"
import MintButton from "./MintButton"

const NFTcontracts = {
	Sepolia: "0x42Fbf87Cd983c0F0BCdfF2d8A5904CD4968cD76F",
	Ethereum: "0x49cC7de889C1e4bDc1b4156B882cA5c76C668987",
	Polygon: "0xA42ccA468fd07491824Ab121CB559f1B3791e92C",
	"Arbitrum One": "0x6f2C97dB74D4d3E8A31e628325A39bbef928dd59",
	"BNB Smart Chain": "0xFA17c9e4f5Ec1A62d032731fE0a9529D7B851BE6",
}

const MintNFT = (props) => {
	const { className } = props
	const [initialChain, setInitialChain] = useState()
	const isMobile = mainconfig.isMobile
	const isMetaMask = mainconfig.isMetaMask
	const { dismissAll, mintError, chainSwitch, connectSuccess } = useToast()

	const { connect } = useConnect({
		connector: new InjectedConnector(),
		onError(error) {
			console.log("Error", error)
			track(ampli.walletError, { error: error.message })
		},
	})
	const { isConnected, address } = useAccount({
		onConnect({ address, connector, isReconnected }) {
			connectSuccess()
			track(ampli.walletSuccess, { account: address, connector: connector.name, isReconnected: isReconnected, chain: chain.name })
			setInitialChain(chain.name)
			refetch()
		},
		onDisconnect() {
			dismissAll()
		},
	})
	useEffect(() => {
		if (isConnected) {
			return
		} else if (isMobile && isMetaMask) {
			connect()
		}
		return
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	const [isSuccessModal, setIsSuccessModal] = useState(false)
	const { chain } = useNetwork()
	useEffect(() => {
		if (!isConnected) {
			dismissAll()
		}
		return
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isConnected])

	useBalance({
		address: address,
		onSuccess(data) {
			track(ampli.walletSuccessBalance, { balance: `${data.formatted} ${data.symbol}`, currency: data.symbol })
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
		isSuccess,
		error: transError,
		isError: isTransError,
	} = useWaitForTransaction({
		hash: data?.hash,
		onSuccess(data) {
			console.log("SuccessTrans", data)
			track(ampli.mintSuccess, { blockHash: data.blockHash, transHash: data.transactionHash, NFTcontract: data.to })
			onOpenModal()
		},
		onError(error) {
			track(ampli.mintError, { error: error.message })
		},
	})
	useEffect(() => {
		if (isConnected && chain) {
			if (supportedChains.includes(chain.id)) {
				track(ampli.chain, { chain: chain })
				chainSwitch(chain)
				refetch()
			} else {
				console.log(chain.name)
				console.log("unsupported")
			}
		}
		return
	}, [chain, chainSwitch, initialChain, isConnected, refetch])

	const onCloseModal = useCallback(() => {
		setIsSuccessModal(false)
	}, [])

	const onOpenModal = useCallback(() => {
		dismissAll()
		setIsSuccessModal(true)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])

	useEffect(() => {
		if (isError || isTransError) {
			if (
				(error || transError)?.message.includes("cancelled") ||
				(error || transError)?.message.includes("canceled") ||
				(error || transError)?.message.includes("rejected") ||
				error?.code === 4001
			) {
				mintError(PURCHASE_ERRORS[4001])
				track(ampli.mintError, { error: (error || transError)?.message, type: "cancelled" })
			} else if ((error || transError)?.message.includes("funds") || error?.code === -3200) {
				mintError(PURCHASE_ERRORS[3200])
				track(ampli.mintError, { error: (error || transError)?.message, type: "insufficient funds" })
			} else if ((error || transError)?.message) {
				mintError(PURCHASE_ERRORS.general)
				track(ampli.mintError, { error: (error || transError)?.message, type: "other" })
			}
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [error, isError, isTransError, transError])

	return (
		<div className={`${className ? className : ""} ${cls.MintNFT} `}>
			<div className={`${cls.buttonsBlock} ${isLoading ? "disabled" : ""}`}>
				<div className={isConnected ? cls.connected : cls.disconnected} id="mintID">
					<ConnectButton
						chain={chain}
						connect
						header={false}
						action={() => {
							track(ampli.walletMint)
						}}
					/>
				</div>
				{isConnected && <MintButton isLoading={isLoading} write={write} chain={chain} />}
			</div>

			{isConnected && <>{isSuccessModal && <MintSuccess isOpen={isSuccessModal} onClose={onCloseModal} />}</>}
		</div>
	)
}

export default MintNFT
