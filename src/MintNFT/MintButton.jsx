import React from "react"

import Button from "../ui/Button/Button"

const MintButton = (props) => {
	const { isLoading, write } = props
	return (
		<Button
			disabled={isLoading}
			onClick={() => {
				write?.()
			}}
			mint
		>
			<div className="sh"></div>
			{isLoading ? "Minting..." : "Mint ToON Pass"}
		</Button>
	)
}

export default React.memo(MintButton)
