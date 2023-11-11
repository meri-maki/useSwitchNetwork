import React, { forwardRef, lazy, Suspense, useEffect, useRef } from "react"

import cls from "./NFT.module.scss"
import Card from "@/NFT/card1.webp"
import CardCat from "@/NFT/cardcat.webp"
import DiamondPink from "@/NFT/diamond.webp"
import DiamondPinkSmall from "@/NFT/diamond2.webp"

import DiamondBlue from "@/NFT/diamondblue.webp"
import DiamondCian from "@/NFT/diamondcian.webp"
import DiamondCianSmall from "@/NFT/diamondcian2.webp"

import DiamondPurple from "@/UTIL/diamond.webp"

import mainconfig from "../config"
//import MintNFT from "../../MintNFT/MintNFT"

const MintNFT = lazy(() => import("../MintNFT/MintNFT"))

const NFT = forwardRef((props, ref) => {
	const isMobile = mainconfig.isMobile
	const revealElements = useRef(null)
	useEffect(() => {
		const elements = revealElements.current.querySelectorAll("[data-reveal]")
		const options = {
			threshold: 0.1,
		}
		const observer = new IntersectionObserver((entries) => {
			entries.forEach((entry) => {
				if (entry.isIntersecting) {
					entry.target.classList.add("animated")
					observer.unobserve(entry.target)
				}
			})
		}, options)
		elements.forEach((el) => observer.observe(el))

		return () => observer.disconnect()
	}, [])

	return (
		<section className={`${cls.nft} ${mainconfig.isSafari ? cls.nftSafari : ""}`} ref={ref} data-scroll-place-id="mint nft">
			<div data-content ref={revealElements}>
				{!isMobile && (
					<div className={cls.mintBlock}>
						<Suspense fallback={<span className="loader"></span>}>
							<MintNFT data-reveal />
						</Suspense>
					</div>
				)}
			</div>
		</section>
	)
})
export default NFT
