import { ampli, track } from "~/helpers/amplitude"
import React from "react"

import { supportedChains } from "../../../config"
import Button from "../../ui/Button/Button"
import UnsupportedBlock from "./UnsupportedBlock"

const MintButton = (props) => {
	const { isLoading, write, chain } = props

	return (
		<>
			{!supportedChains.includes(chain.id) /* && !isMetaMask  */ ? (
				<UnsupportedBlock chain={chain} />
			) : (
				<Button
					disabled={isLoading}
					onClick={() => {
						track(ampli.mintNFT)
						write()
						console.log("write")
					}}
					mint
				>
					<div className="sh"></div>
					{isLoading ? "Minting..." : "Mint ToON Pass"}
				</Button>
			)}
		</>
	)
}

export default MintButton
