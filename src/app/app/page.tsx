
import { Metadata } from "next"
import { PAGE_ROUTES } from "@/lib/config/pages-url.config"
import { redirect } from "next/navigation"

export const metadata: Metadata = {
    title: "App"
}

export default function App () {
    redirect(PAGE_ROUTES.APP.ALL_RECIPES)
}