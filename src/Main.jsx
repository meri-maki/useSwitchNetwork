import React, { lazy, Suspense } from "react"

import ConnectButton from "./ConnectButton.jsx"
const MintNFT = lazy(() => import("./MintNFT/MintNFT"))


const Main = () => {
	return (
		<>
			<div id="content-wrap">
				<main className="main-sections">
					{/* <ConnectButton /> */}
					<Suspense fallback={<p>Loading</p>}>
						<MintNFT/>
					</Suspense>
				</main>
			</div>
		</>
	)
}

export default Main
