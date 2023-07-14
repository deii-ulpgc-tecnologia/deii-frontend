import React from "react"

interface props {
	children: React.ReactNode
}

export default function layout({ children }: props) {
	return (
		<div>
			<div>header</div>
			<div>{children}</div>
			<div>footer</div>
		</div>
	)
}
