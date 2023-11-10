import { classNames } from "~/tools/classNames.js"
import React from "react"

export default function Button(props) {
	const { link, href, size, app, headerBtn, primary, className, icon, blue, pink, connect, children, glass, onClick, mint, discord, modal, type, ...otherProps } = props
	const mods = {
		app: app,
		primary: primary,
		glass: glass,
		headerBtn: headerBtn,
		[size]: size,
		blue: blue,
		pink: pink,
		icon: icon,
		connect: connect,
		mint: mint,
		discord: discord,
		modal: modal,
	}
	return (
		<>
			{link ? (
				<div className={`flex ${className ? className : ""}`}>
					<a href={href} target="_blank" rel="noreferrer" className={classNames("button", mods, [className])} onClick={onClick} {...otherProps}>
						{children}
					</a>
				</div>
			) : (
				<button className={classNames("button", mods, [className])} onClick={onClick} {...otherProps} type={type ? type : "button"}>
					{children}
				</button>
			)}
		</>
	)
}
