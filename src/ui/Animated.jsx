import React from "react"
import mainconfig from "../../config"

export default function Animated({ children, trigger, className }) {
	const mobile = mainconfig.isMobile

	return <div className={`animate ${trigger ? "trigger" : ""} ${className ?? ""} ${mobile ? "safariMbl" : ""}`}>{children}</div>
}
