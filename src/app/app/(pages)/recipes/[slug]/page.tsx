import ItemList from "@/components/app/Recipes/RecipeList.tsx/ItemList/ItemList"
import { Metadata } from "next"

export const metadata: Metadata = {
    title: "Recipe Page"
}

export default function RecipeItemPage () {
    return <ItemList/>
}