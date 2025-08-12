import MyRecipe from "@/components/app/MyRecipe/MyRecipe"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "My Recipe"
}

export default function MyRecipePage () {
    return <MyRecipe/>
}