import React  from "react"
import { Button } from "./Button"


export default function Header () {


	return (
		<div className="header">
			<div className="header__logo">

			</div>
			<div className="header__nav">
				<h5>About</h5>
				<h5>Services</h5>
				<h5>Technologies</h5>
				<h5>Informations</h5>
			</div>
			<div className="header__button">
				<button className="header__button__contact">
					Contact
				</button>
				<button className="header__button__try">
					Essayer
				</button>
			</div>
		</div>
	)
}