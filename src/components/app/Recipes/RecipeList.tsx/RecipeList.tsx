
import { IRecipe } from "@/lib/types/types"
import { useQueryClient } from "@tanstack/react-query"
import Heading from "@/components/ui/Heading/Heading"
import Link from "next/link"
import Rating from '@mui/material/Rating'
import { IUserData } from "@/lib/types/types"
import GlobalError from "@/app/error"

interface IRecipeListProps {
    dataR: IRecipe[]
}

export default function RecipeList (props: IRecipeListProps) {

    const {
        dataR
    } = props

    const queryClient = useQueryClient()
    const userData = queryClient.getQueryData<IUserData>(["userData"])

    if (!userData) return <GlobalError error={"No user data"}/>

    return (
        <>
            <div
                className="flex flex-col gap-y-2 items-center px-2 py-2"
            >
                {
                    dataR.map((recipe) => {
                        return (
                            <RecipeItem
                                key={recipe.id}
                                recipe={recipe}
                                userId={userData.id}
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
    userId: string;
}

function RecipeItem (props: IRecipeItemProps) {

    const {
        recipe,
        userId
    } = props

    return (
        <>
            <Link href={`/app/recipes/${recipe.title}`}>
                <div
                    className={`
                        flex items-center justify-between gap-x-2 
                        border ${userId === recipe.authorId ? "border-background-secondary-2" : ""} 
                        rounded-xl p-4 shadow hover:shadow-lg hover:cursor-pointer 
                        transition bg-white w-[700px]`}
                >
                    <div
                        className={`flex ${recipe.description ? "flex-col gap-y-1" : ""}`}
                    >
                        <Heading title={recipe.title}/>
                        {
                            recipe.description ? 
                            <p className="truncate text-[18px] text-background-secondary font-semibold max-w-[500px]">
                                {recipe.description}
                            </p>
                            :
                            null
                        }
                        
                    </div>
                    <div
                        className="flex items-center justify-center"
                    >
                        <Rating
                            defaultValue={recipe.avarageRating ?? 0}
                            readOnly
                        />
                    </div>
                </div>
            </Link>
        </>
    )
}