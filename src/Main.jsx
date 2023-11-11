import React, { lazy, Suspense } from "react"
import { Slide } from "react-toastify"
import { ToastContainer } from "react-toastify"



const NFT = lazy(() => import("./NFT/NFT.jsx"))
import Cross from "@/UI/icons/cross.svg"

const CloseButton = ({ closeToast }) => <img className="closeBlack" onClick={closeToast} src={Cross} />

const Main = () => {
	return (
		<>
			<div id="content-wrap">
				<main className="main-sections">
					<Suspense fallback={<p>Loading</p>}>
						<NFT />
					</Suspense>
				</main>
			</div>
			<ToastContainer autoClose={6000} className="customToast" closeButton={CloseButton} position="bottom-right" hideProgressBar={true} transition={Slide} pauseOnFocusLoss={false} />
		</>
	)
}

export default Main
