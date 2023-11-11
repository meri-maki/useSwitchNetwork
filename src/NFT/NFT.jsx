import React, { forwardRef, lazy, Suspense } from "react"

import cls from "./NFT.module.scss"

import mainconfig from "../config"
//import MintNFT from "../../MintNFT/MintNFT"

const MintNFT = lazy(() => import("../MintNFT/MintNFT"))

const NFT = forwardRef(() => {
	return (
		<section className={`${cls.nft} ${mainconfig.isSafari ? cls.nftSafari : ""}`} data-scroll-place-id="mint nft">
			<div data-content>
				<div className={cls.mintBlock}>
					<Suspense fallback={<span className="loader"></span>}>
						<MintNFT />
					</Suspense>
				</div>
			</div>
		</section>
	)
})
export default NFT
