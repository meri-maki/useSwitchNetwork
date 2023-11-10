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

import mainconfig from "../../../../config"
//import MintNFT from "../../MintNFT/MintNFT"

const MintNFT = lazy(() => import("../../MintNFT/MintNFT"))

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
				<h2 data-reveal>
					Mint Your
					<br />
					<span className={`brush ${cls.brush}`}>Early Access NFT</span>
				</h2>
				<div className={cls.back} data-reveal />
				<div className={cls.content}>
					<img alt="icon" src={DiamondPink} className={cls.diamondPink} data-reveal="2" data-absolute width="64" height="64" data-object />
					<img alt="icon" src={DiamondBlue} className={cls.diamondBlue} data-reveal="2" data-absolute width="80" height="80" data-object />
					<h5>
						Secure your place in the ToON ecosystem with our exclusive <b>ToON Pass NFTs</b> — your portal to privileged insights and community perks.
					</h5>
					<div className={cls.imagesBlock}>
						<div className={cls.wrapper}>
							<div className={cls.blurPink} data-absolute />
							<div className={cls.blurBlue} data-absolute />
							<img alt="icon" src={DiamondPurple} className={cls.diamondPurple} data-reveal="2" data-absolute width="72" height="72" data-object />
							<img alt="icon" src={DiamondCian} className={cls.diamondCian} data-reveal="3" data-absolute width="56" height="56" data-object />
							<img alt="icon" src={DiamondPinkSmall} className={cls.diamondPinkSmall} data-reveal="1" data-absolute width="32" height="32" data-object />
							<div className={cls.perspectiveCat}>
								<img alt="card" src={CardCat} className={cls.cardcat} data-reveal />
							</div>
							<div className={cls.perspectiveRac}>
								<img alt="card" src={Card} className={cls.cardraccoon} data-reveal />
							</div>
							<img alt="icon" src={DiamondCianSmall} className={cls.diamondCianSmall} data-reveal="1" data-absolute width="32" height="32" data-object />
						</div>
					</div>
					{isMobile && (
						<div className={cls.mintBlockMbl}>
							<Suspense fallback={<span className="loader"></span>}>
								<MintNFT data-reveal />
							</Suspense>
						</div>
					)}
					<div className={cls.cardsBlock}>
						<div className={cls.card}>
							<div className={cls.blur} />
							<div className={cls.border} />

							<span>
								<b>First&nbsp;</b>in line for $TOON Official Public Release
							</span>
						</div>
						<div className={cls.card}>
							<div className={cls.blur} />
							<div className={cls.border} />
							<span>
								<b>Early Access&nbsp;</b>to New Products
							</span>
						</div>
						<div className={cls.card}>
							<div className={cls.blur} />
							<div className={cls.border} />
							<span className="bold">Get Premium&nbsp;</span>Community Access
						</div>

						<div className={cls.card}>
							<div className={cls.blur} />
							<div className={cls.border} />
							<span>
								<b>Engage&nbsp;</b>in Special Contests & Events
							</span>
						</div>
					</div>
					{!isMobile && (
						<div className={cls.mintBlock}>
							<Suspense fallback={<span className="loader"></span>}>
								<MintNFT data-reveal />
							</Suspense>
						</div>
					)}
				</div>
			</div>
		</section>
	)
})
export default NFT
