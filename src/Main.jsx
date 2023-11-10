import React, { lazy, Suspense } from "react"

import ConnectButton from "./ConnectButton.jsx"
import NFT from "./NFT/NFT.jsx"
const MintNFT = lazy(() => import("./MintNFT/MintNFT"))

const Main = () => {
	return (
		<>
			<div id="content-wrap">
				<main className="main-sections">
					{/* <ConnectButton /> */}
					<Suspense fallback={<p>Loading</p>}>
						<NFT />
					</Suspense>
				</main>
			</div>
		</>
	)
}

export default Main
