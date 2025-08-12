import AddRecipe from "@/components/app/AddRecipe/AddRecipe"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Add Recipe"
}

export default function AddRecipePage () {
    return <AddRecipe/>
}