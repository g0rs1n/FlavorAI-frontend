
import Recipes from "@/components/app/Recipes/Recipes"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Recipes"
}

export default function RecipesPage () {
    return <Recipes/>
}