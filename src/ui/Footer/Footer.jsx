import React from "react"
import Button from "../Button/Button.jsx"
import Link from "../Link/Link.jsx"
import cls from "./Footer.module.scss"
import X from "@/UI/icons/twitter-x.svg"
import Discord from "@/UI/icons/discord.svg"

import { Links } from "~/helpers/texts"
import { ampli, track } from "../../../helpers/amplitude.js"

const Footer = (_props) => {
	return (
		<footer className={cls.footer} id="footer">
			<div className={cls.content}>
				<div className={cls.blur}></div>
				<div className={cls.explore}>
					<p>Explore</p>
					<div className={cls.linkBlock}>
						<Link href={Links.gitbook.main} onClick={() => track(ampli.footerClick, { link: "Gitbook" })}>
							Gitbook
						</Link>
						<Link target="_parent" href={Links.privacy} onClick={() => track(ampli.footerClick, { link: "Privacy Policy" })}>
							Privacy Policy
						</Link>
					</div>
				</div>
				<div className={cls.participate}>
					<div>
						<p>Participate</p>
						<div className={cls.buttonBlock}>
							<Button link icon href={Links.twitter} blue onClick={() => track(ampli.footerClick, { link: "Twitter" })}>
								<img src={X} alt="x" width="16" height="16" />
								<span>ToON.ORG</span>
							</Button>
							<Button link icon href={Links.discord} blue onClick={() => track(ampli.footerClick, { link: "Discord" })}>
								<img src={Discord} alt="x" width="16" height="16" />
								<span>ToON.ORG</span>
							</Button>
						</div>
					</div>
				</div>
			</div>
		</footer>
	)
}

export default Footer
