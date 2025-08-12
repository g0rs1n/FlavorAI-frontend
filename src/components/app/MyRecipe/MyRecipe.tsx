"use client"

import { useQuery } from "@tanstack/react-query"
import { recipeService } from "@/lib/services/recipe/recipe.service"
import RecipeList from "../Recipes/RecipeList.tsx/RecipeList"
import GlobalError from "@/app/error"
import Loader from "@/components/ui/Loader/Loader"

export default function MyRecipe () {

    
    const {
        data,
        isLoading,
        isError,
        error,
    } = useQuery({
        queryKey: ["myRecipe"],
        queryFn: () => recipeService.getMyRecipe()
    })

    if (isLoading) {
        return (
            <div className="flex justify-center items-center h-full">
                <Loader />
            </div>
        )
    }

    if (isError) {
        return <GlobalError error={error} />
    }

    return (
        <>
            {
                data && data.length > 0 ? (
                    <RecipeList dataR={data} />
                ) : (
                    <div className="flex justify-center items-center h-full text-gray-500">
                        No recipes found
                    </div>
                )
            }
        </>
    )
}