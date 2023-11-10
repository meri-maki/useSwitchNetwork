/* eslint-disable react/no-unescaped-entities */
import React, { useEffect, useRef } from "react"
import mainconfig from "../../../config"
import Footer from "../../ui/Footer/Footer"
import HeaderSimple from "../../widgets/Header/HeaderSimple.jsx"

export default function Privacy() {
	const revealElements = useRef(null)

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
			<HeaderSimple link="/" />
			<div id="content-wrap" className={mainconfig.isSafari ? "safari" : ""} ref={revealElements}>
				<div className="info-sections">
					<section data-reveal>
						<h3 className="subtitle text-uppercase">PRIVACY POLICY</h3>
						<p>
							This Privacy Policy describes how ToonCoin.com ("ToonCoin",”ToonToken” "We", "Us", or "Our") protects your privacy when you use ToonCoin.com services ("Services") which
							includes the Web site located at ToonCoin.com (the "Site") and all ToonCoin.com mobile phone applications ("Mobile").
						</p>
						<p className="text-uppercase">
							PLEASE READ THIS PRIVACY POLICY CAREFULLY. BY ACCESSING OR USING THE SERVICE, YOU AGREE TO BE BOUND BY THE TERMS AND CONDITIONS DESCRIBED HEREIN AND ALL TERMS AND
							CONDITIONS INCORPORATED BY REFERENCE. IF YOU DO NOT AGREE TO ALL OF THE TERMS AND CONDITIONS SET FORTH BELOW, YOU MAY NOT USE THE TOONCOIN.COM SERVICES.
						</p>
						<p>
							This Privacy Policy together with our Terms of Service applies to information (including personal information) collected during your use of ToonCoin.com services. For the
							purpose of this Privacy Policy, "personal information" means information that identifies you personally, either alone or in combination with other information available to
							us. Personal information does not include technical, device, or usage information that cannot be used to identify you personally, nor does it include "aggregate"
							information, which is data we collect about the use of the Services or about a group or category of Services or users, from which individual identities or other personal
							information have been removed. This Privacy Policy in no way restricts or limits our collection and use of aggregate and non-personal information, and we may share such
							data about our users with third parties for various purposes.
						</p>
					</section>

					<section data-reveal>
						<h3 className="title text-uppercase">WHAT INFORMATION WE COLLECT</h3>
						<h3 className="title text-uppercase">TECHNICAL INFORMATION</h3>
						<p>
							When you use a website or mobile application like ours, certain internet and network activity information gets generated and logged automatically. These are the types of
							technical information we collect:
						</p>
						<p>
							Log data. Our servers passively keep an electronic record of your interactions with our apps, which we call "log data". For example, when you visit our website, sign into
							our services, or browse content, we collect data about these interactions that includes where you navigate within our website and apps, your IP address, browser type and
							settings, the date and time of your visit, search terms, which elements of our site and services you use the most, device data, and cookie data. We use log data to operate
							our services, maintain security, ensure reliable performance, and improve your experience.
						</p>
						<p>
							When you visit the Site, we automatically collect some information. Such information includes the type of browser you use, your browser’s language, access time or the
							website from which you linked to us. We also collect information about your computer's operating system and information about your usage and activity on the Site.
						</p>
						<p>Cookie data. We use "cookies" and similar technologies to collect log data and operate our services. You can learn more about how we use cookies in "COOKIES" below.</p>
						<p>Device data. We collect and combine data about the devices you use to access our apps and services, and data about your device usage and activity.</p>
						<p>
							Metadata of visual information. We collect the metadata linked to your content. For example, your images may be accompanied by additional content like a hashtag (e.g., to
							mark keywords), comments. This makes your content more searchable by others and more interactive.
						</p>
						<p>
							All this information is only used to assist us in providing an effective service. We may, from time to time, supply the owners and operators of third party websites and
							mobile applications which have a link to our site or application with information about the number of users of our Site or Mobile. You cannot be identified from any of this
							information.
						</p>
					</section>

					<section data-reveal>
						<h3 className="title text-uppercase">SERVICE DATA</h3>
						<p>
							To use our Services, you should provide a photo prior to the event of photo editing. Since the processing requires Internet connection and is performed on our servers the
							photos are sent there through the encrypted connection. We use Secure Socket Layer technology to protect the privacy and integrity of the transmission process.
						</p>
						<p>The original photos and results are automatically removed from our servers by two weeks after the last interaction.</p>
						<p>Whenever you choose an effect that involves face manipulations we use special face recognition technologies to:</p>
						<ul>
							<li>detect a face in a photo;</li>
							<li>find required facial key points (the set of points varies with the effect);</li>
							<li>and apply the effect to your photo.</li>
						</ul>
						<p>
							The detected key points may be kept along with the photo on the servers of our providers for up to two weeks from the last interaction with the photo. The only purpose of
							this is to speed up any further processings of the same photos.
						</p>
					</section>

					<section data-reveal>
						<h3 className="title text-uppercase">COOKIES</h3>
						<p>
							We automatically collect certain information through the use of "cookies". Cookies are small data files that are stored locally. We use cookies to collect information about
							your device, including where available your IP address, operating system and browser type, for system administration and to report information to our branded partners.
						</p>
						<p>
							We may store some information locally when you visit the Site or use Services. This information facilitates your use of the site or Services, personalizes your experience,
							and helps us to remember your preferences. The information stored in a cookie provides features that recognize your account as logged on and other Site or Services
							features. We do not have any control over cookies which our advertisers or branded partners may use.
						</p>
					</section>

					<section data-reveal>
						<h3 className="title text-uppercase">SECURITY</h3>
						<p>
							The technology that we use and the policies that we have implemented are intended to safeguard your privacy from unauthorized access and improper use. We will continue to
							update these measures as new technology becomes available. However, we cannot guarantee that unauthorized third parties will not be able to defeat our security measures. If
							you use a password on our Services, you are responsible for keeping it confidential. Do not share it with any other person. If you believe your password has been misused or
							your account compromised, please advise us immediately.
						</p>
					</section>

					<section data-reveal>
						<h3 className="title text-uppercase">HOW WE USE YOUR PERSONAL INFORMATION</h3>
						<p>We use personal information and service data collected through the Services:</p>
						<ul>
							<li>to communicate with you or third parties;</li>
							<li>to process your requests and transactions;</li>
							<li>to improve the Services;</li>
							<li>to assist with our product and service development;</li>
							<li>and for other purposes related to our business.</li>
						</ul>
					</section>

					<section data-reveal>
						<h3 className="title text-uppercase">WITH WHOM WE SHARE YOUR PERSONAL INFORMATION</h3>
						<p>
							Personal information (and non-personal information) collected through the Services may be shared with companies and organizations that perform services on our behalf (for
							example, companies that provide data management or other support services to us such as data storage and Web hosting services).
						</p>
						<p>Also, we may disclose the personal information we collect through the Services when we, in good faith, believe disclosure is appropriate to:</p>
						<ul>
							<li>comply with applicable law (e.g., in response to a valid court order or subpoena);</li>
							<li>prevent or investigate a possible crime, such as fraud or identity theft;</li>
							<li>enforce or to apply our Terms of Service and other agreements;</li>
							<li>to protect the rights, property or safety of us, our users or others;</li>
							<li>to protect the rights, property or safety of us, our users or others;</li>
						</ul>
						<p>
							We do not disclose your images, which you have uploaded for editing and manipulation to any of the Services unless you provide explicit consent to show your images at our
							Site, Mobile and other Services, or at third party services.
						</p>
						<p>
							Your personal information and other data collected by us may be transferred to another company that has acquired our stock or assets, for example, as a result of a sale,
							merger, reorganization, dissolution or liquidation. If such a transfer occurs, the acquiring company's use of your personal information will still be subject to this
							Privacy Policy.
						</p>
					</section>

					<section data-reveal>
						<h3 className="title text-uppercase">MODIFYING YOUR INFORMATION — OPT-OUT/OPT-IN</h3>
						<p>
							We respect your right to make choices about the ways we collect, use and disclose your personal information. You may update or modify your information or change your
							privacy preferences at any time via our Services. Should you have any questions please address them at contact@tooncoin.com.
						</p>
					</section>

					<section data-reveal>
						<h3 className="title text-uppercase">LINKS, HOSTED SITES & ADVERTISERS</h3>
						<p>
							We do not have any control over the privacy practices of any external websites linked from the Site or Mobile (or any of the websites that are hosted on our server and
							aren't affiliated with us). Therefore you should review their privacy policies separately from ours and know that we in no way have any control over their practices.
						</p>
						<p>
							Third party advertisers may collect certain information that is available to them through your interaction with their advertisements. ToonCoin.com has no control or
							knowledge as to their practices and it is suggested that you read their privacy policy separately before clicking on any advertisements.
						</p>
					</section>

					<section data-reveal>
						<h3 className="title text-uppercase">CHANGES TO THIS PRIVACY POLICY</h3>
						<p>
							We may change this Privacy Policy from time to time. If we make any changes to this Privacy Policy that we think materially alter your rights, then we will post the latest
							policy to this site. We encourage you to review this Privacy Policy whenever you visit the Services to understand how your personal information is used.
						</p>
					</section>

					<section data-reveal>
						<h3 className="title text-uppercase">QUESTIONS</h3>
						<p>
							If you have any questions about this Privacy Policy, please contact us via{" "}
							<a href="mailto:contact@tooncoin.com" className="bold">
								contact@tooncoin.com
							</a>
						</p>
					</section>
				</div>
				<Footer />
			</div>
		</>
	)
}
