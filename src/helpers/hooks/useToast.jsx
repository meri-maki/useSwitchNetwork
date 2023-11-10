import React, { useCallback } from "react"
import { toast } from "react-toastify"
import Success from "@/VALUES/vote.webp"
import Error from "@/UI/icons/error.svg"

import { WALLET_SUCCESS } from "../texts"

function getImage(chain) {
	switch (chain.id) {
		case 1:
			return "./assets/UI/icons/1.webp"
		case 56:
			return "./assets/UI/icons/56.webp"
		case 137:
			return "./assets/UI/icons/137.webp"
		case 42161:
			return "./assets/UI/icons/42161.webp"
		default:
			return "./assets/UI/icons/default.webp"
	}
}

export function useToast() {
	const connectSuccess = useCallback(() => {
		toast.success(WALLET_SUCCESS, {
			icon: () => <img src={Success} className="toastIcon" />,
		})
	}, [])

	const mintError = useCallback((error) => {
		toast.error(error, {
			icon: () => <img src={Error} className="toastIcon" />,
			toastId: "error",
		})
	}, [])

	const chainSwitch = useCallback((chain) => {
		const imageSrc = getImage(chain)
		toast.success(
			() => (
				<>
					You are successfully connected to <b>{chain.name}</b>
				</>
			),
			{
				icon: () => <img src={imageSrc} className="toastIcon" />,
				toastId: chain.name,
			}
		)
	}, [])

	const dismissAll = () => toast.dismiss()

	return {
		connectSuccess,
		mintError,
		chainSwitch,
		dismissAll,
	}
}
