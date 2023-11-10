import { useWeb3Modal } from "@web3modal/wagmi/react"
import Button from "../ui/Button/Button"
import React from "react"

const UnsupportedBlock = () => {
	const { open } = useWeb3Modal()

	return (
		<>
			<h6>
				Our NFTs are <b>not yet available on this blockchain</b>. Please switch your wallet to one of the <b>supported chains</b>.
			</h6>
			<Button
				onClick={() => {
					dismissAll()
					open({ view: "Networks" })
				}}
				mint
			>
				<div className="sh"></div>
				Switch Chain
			</Button>
		</>
	)
}

export default React.memo(UnsupportedBlock)
