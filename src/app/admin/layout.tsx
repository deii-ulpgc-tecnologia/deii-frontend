import { redirect } from "next/navigation"
import React from "react"

export default function layout({ auth, dashboard }: { auth: React.ReactNode; dashboard: React.ReactNode }) {
	return auth
}
