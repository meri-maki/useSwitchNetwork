import Button from "./Button"
import Apple from "@/UI/icons/apple.svg"
import Google from "@/UI/icons/google_play.svg"
import { Links } from "~/helpers/texts"
import React from "react"
import { ampli, track } from "../../../helpers/amplitude"

export default function AppButton(props) {
	const { app } = props
	if (app === "apple")
		return (
			<Button link app pink href={Links.apple} onClick={() => track(ampli.ecoClick, { button: "AppStore" })}>
				<div className="app-info">
					<img src={Apple} alt="apple store" width="24" height="24" />
					<div className="btn-text">
						<div className="download">Available on the</div>
						<div className="store">App Store</div>
					</div>
				</div>
			</Button>
		)
	else {
		return (
			<Button link app pink href={Links.google} onClick={() => track(ampli.ecoClick, { button: "GooglePlay" })}>
				<div className="app-info">
					<img src={Google} alt="apple store" width="24" height="24" />
					<div className="btn-text">
						<div className="download">Available on</div>
						<div className="store">Google Play</div>
					</div>
				</div>
			</Button>
		)
	}
}
