"use client"

import { useQuery } from "@tanstack/react-query"
import { recipeService } from "@/lib/services/recipe/recipe.service"

import RecipeList from "./RecipeList.tsx/RecipeList"
import Loader from "@/components/ui/Loader/Loader"
import GlobalError from "@/app/error"


export default function Recipes () {

    const {
        data,
        isLoading,
        isError,
        error
    } = useQuery({
        queryKey: ["AllRecipes"],
        queryFn: () => recipeService.getAllRecipe()
    })

    if (isLoading) {
        return (
            <div className="flex h-full items-center justify-center">
                <Loader/>
            </div>
        )
    }

    if (isError) {
        return <GlobalError error={error}/>
    }

    return (
        <>
            <div
                className="flex flex-col h-full"
            >
                {
                    data ?
                    <RecipeList
                        data={data}
                    />
                    :
                    <NoDataItem/>
                }
            </div>
        </>
    )
}

function NoDataItem () {
    return (
        <>
            <div className="flex h-full items-center justify-center">
                <h2 className="">
                    No data available 
                </h2>
            </div>
        </>
    )
}