"use client"

import { SubmitHandler, useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import { recipeService } from "@/lib/services/recipe/recipe.service"
import { toast } from "sonner"
import { catchError } from "@/lib/api/error"

import Heading from "@/components/ui/Heading/Heading"
import Line from "@/components/ui/Line/Line"
import Fields from "@/components/ui/Fields/Fields"
import Button from "@/components/ui/Button/Button"

import { IFormAddRecipeInput, IRecipe } from "@/lib/types/types"
import { recipeValidationRules } from "@/lib/validation/recipe.validation"

export default function AddRecipe () {

    const {
        register,
        handleSubmit,
        formState: {
            errors
        },
        reset
    } = useForm<IFormAddRecipeInput>(

    )

    const {
        mutateAsync
    } = useMutation({
        mutationFn: (data: IFormAddRecipeInput) => recipeService.createRecipe(data),
        onSuccess: () => {
            reset()
        },
        onError: (error) => {
            catchError(error, "Error: api auth form mutation")
        }
    })

    const onSubmit: SubmitHandler<IFormAddRecipeInput> = async (data) => {
        toast.promise(mutateAsync(data), {
            loading: "Saving recipe...",
            success: "Recipe saved",
            error: (error) => error.message
        })
    }

    return (
        <>
            <div
                className="flex h-full items-center justify-center"
            >
                <form
                    className="w-sm m-auto p-5 rounded-xl border-2 border-background-secondary shadow-xl 
                    opacity-0 animate-[fadeIn_0.5s_ease-in-out_forwards]"
                    onSubmit={handleSubmit(onSubmit)}
                >
                    <div className='flex flex-col items-center w-full'>
                        <Heading title={"Create your new Recipe"}/>
                        <Line/>
                    </div>
                    <div
                        className='flex flex-col gap-[5px] mb-1'
                    >
                        <label
                            htmlFor="title"
                            className='font-bold text-lg'
                        >
                            Recipe Name
                        </label>
                        <Fields<IFormAddRecipeInput>
                            id="title"
                            placeholder='Enter recipe name'
                            type="text"
                            name="title"
                            register={register}
                            validationRules={recipeValidationRules.title}
                            styles='border-1 border-background-secondary rounded-sm px-[3px] py-[1px] focus:border-text'
                        />
                        {errors.title && <p className="text-red-600">{errors.title.message}</p>}
                    </div>
                    <div
                        className='flex flex-col gap-1 mb-1'
                    >
                        <label
                            htmlFor="description"
                            className='font-bold text-lg'
                        >
                            Description
                        </label>
                        <Fields<IFormAddRecipeInput>
                            id="description"
                            placeholder='Enter recipe description (optional)'
                            type="text"
                            name="description"
                            register={register}
                            validationRules={recipeValidationRules.description}
                            styles='border-1 border-background-secondary rounded-sm px-[3px] py-[1px] focus:border-text'
                        />
                        {errors.description && <p className="text-red-600 mt-1">{errors.description.message}</p>}
                    </div>
                    <div
                        className='flex flex-col gap-1 mb-1'
                    >
                        <label
                            htmlFor="ingredients"
                            className='font-bold text-lg'
                        >
                            Ingredients
                        </label>
                        <Fields<IFormAddRecipeInput>
                            id="ingredients"
                            placeholder='Enter recipe ingredients'
                            type="text"
                            name="ingredients"
                            register={register}
                            validationRules={recipeValidationRules.ingredients}
                            styles='border-1 border-background-secondary rounded-sm px-[3px] py-[1px] focus:border-text'
                        />
                        {errors.ingredients && <p className="text-red-600 mt-1">{errors.ingredients.message}</p>}
                    </div>
                    <div
                        className='flex flex-col gap-1 mb-1'
                    >
                        <label
                            htmlFor="instructions"
                            className='font-bold text-lg'
                        >
                            Instructions
                        </label>
                        <Fields<IFormAddRecipeInput>
                            id="instructions"
                            placeholder='Write step-by-step cooking instructions'
                            type="text"
                            name="instructions"
                            register={register}
                            validationRules={recipeValidationRules.instructions}
                            styles='border-1 border-background-secondary rounded-sm px-[3px] py-[1px] focus:border-text'
                        />
                        {errors.instructions && <p className="text-red-600 mt-1">{errors.instructions.message}</p>}
                    </div>
                    <div
                        className='flex mt-[15px] flex-col items-center gap-1'
                    >
                        <Button
                            title={"Create Recipe"}
                        /> 
                    </div>
                </form>
            </div>
        </>
    )
}