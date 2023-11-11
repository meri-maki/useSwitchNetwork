import Button from "../ui/Button/Button.jsx"
import Footer from "../ui/Footer/Footer.jsx"

import cls from "./Error.module.scss"
import ErrorImage from "@/error/error.webp"
import React from "react"


export default function Error() {
	function refreshPage() {
		window.location.reload(false)
	}
	return (
		<>
			<div id="content-wrap">
				<div className={cls.Error}>
					<img src={ErrorImage} className={cls.main} />
					<h2>Something went wrong...</h2>
					<Button onClick={refreshPage}>Reload</Button>
				</div>
			</div>
			<footer className="footer" id="footer">
				<Footer />
			</footer>
		</>
	)
}
