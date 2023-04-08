import React  from "react"

import { IButton } from "@/types"

export const Button: React.FC<IButton> = (props) => {
	const { title } = props

	return (
		<div className="button">
			<h5>{title}</h5>
		</div>
	)
}