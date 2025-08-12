
import { IRecipe } from "@/lib/types/types"
import Link from "next/link"
import Rating from "react-rating"

interface IRecipeListProps {
    data: IRecipe[]
}

export default function RecipeList (props: IRecipeListProps) {

    const {
        data
    } = props

    console.log(data)

    return (
        <>
            <div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
            >
                {
                    data.map((recipe) => {
                        return (
                            <RecipeItem
                                key={recipe.id}
                                recipe={recipe}
                            />
                        )
                    })
                }
            </div>
        </>
    )
}

interface IRecipeItemProps {
    recipe: IRecipe;
}

function RecipeItem (props: IRecipeItemProps) {

    const {
        recipe
    } = props

    return (
        <>
            <div
                className="border rounded-xl p-4 shadow hover:shadow-lg transition bg-white"
            >
                {recipe.description}
            </div>
        </>
    )
}