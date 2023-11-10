//import AnimateHeight from "react-animate-height"
import React from "react"
import mainconfig from "../../config"

export default function Animated({ children, trigger, className }) {
	const safari = mainconfig.isSafari
	const mobile = mainconfig.isMobile

	return <div className={`animate ${trigger ? "trigger" : ""} ${className ?? ""} ${safari && mobile ? "safariMbl" : ""}`}>{children}</div>
}
/* <AnimateHeight style={{ flexShrink: 0, width: "100%" }} duration={500} height={trigger ? "auto" : 0} easing="ease" className={`${className} animateHeight`}>
	{children}
	</AnimateHeight> */
