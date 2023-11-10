import React, { useEffect, useRef, lazy, Suspense } from "react"
import { Slide } from "react-toastify"


import Loader from "~/components/ui/Loader/Loader.jsx"

const NFT = lazy(() => import("~/components/widgets/Main Sections/NFT/NFT"))
import { ToastContainer } from "react-toastify"
import Cross from "@/UI/icons/cross.svg"

import mainconfig from "../../../config"

const CloseButton = ({ closeToast }) => <img className="closeBlack" onClick={closeToast} src={Cross} />

import { ampli, track } from "../../../helpers/amplitude"

function onPageLoad() {
	const eventParams = {
		full: window.location.href,
		host: window.location.host,
		path: window.location.path,
		queryString: window.location.search,
	}

	track(ampli.pageLoad, eventParams)
}

if (document.readyState === "complete") {
	onPageLoad()
} else {
	document.addEventListener("readystatechange", () => {
		if (document.readyState === "complete") {
			onPageLoad()
		}
	})
}

document.addEventListener("DOMContentLoaded", function () {
	const reachedPlaces = []
	setInterval(() => {
		const scrollTop = window.pageYOffset
		const windowHeight = window.innerHeight
		const scrollPlaceElements = document.querySelectorAll("[data-scroll-place-id]")
		scrollPlaceElements.forEach((item) => {
			const placeId = item.dataset.scrollPlaceId
			const placeTop = item.offsetTop

			if (placeTop < scrollTop + windowHeight / 2) {
				if (reachedPlaces.indexOf(placeId) === -1) {
					reachedPlaces.push(placeId)

					/* track(ampli.pageScroll, { reachedPlaces: JSON.stringify(reachedPlaces) }) */
					track(ampli.pageScroll, { reachedPlaces: placeId })
				}
			}
		})
	}, 500)
})

const Main = () => {
	/* ---------------------------- REVEAL ANIMATION ---------------------------- */
	const revealElements = useRef(null)
	const refs = {
		HeroRef: useRef(null),
		RoadRef: useRef(null),
		EcoRef: useRef(null),
		NFTRef: useRef(null),
		TokenRef: useRef(null),
		LinkRef: useRef(null),
		MintRef: useRef(null),
	}

	useEffect(() => {
		if (mainconfig.isSafari) {
			return
		} else {
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
		}
	}, [])

	return (
		<>
			<div id="content-wrap" className={mainconfig.isMobile ? "safari" : ""} ref={revealElements}>
				<main className="main-sections">
					<Suspense fallback={<Loader />}>
						<NFT ref={refs.NFTRef} MintRef={refs.MintRef} />
					</Suspense>
				</main>
				<ToastContainer autoClose={6000} className="customToast" closeButton={CloseButton} position="bottom-right" hideProgressBar={true} transition={Slide} pauseOnFocusLoss={false} />
			</div>
		</>
	)
}

export default Main
