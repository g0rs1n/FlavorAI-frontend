import { axiosClient } from "@/lib/api/api";
import { API_ROUTES } from "@/lib/constants/apiRoute.constants";
import { catchError } from "@/lib/api/error";
import { IFormAddRecipeInput, IRecipe } from "@/lib/types/types";

class RecipeService {

    private readonly GET_ALL_RECIPES = API_ROUTES.RECIPE.GET_ALL
    private readonly POST_CREATE_RECIPE = API_ROUTES.RECIPE.POST_CREATE_RECIPE
    private readonly GET_MY_RECIPE = API_ROUTES.RECIPE.GET_MY_RECIPE

    async getAllRecipe (): Promise<IRecipe[]> {
        try {
            const response = await axiosClient.get(this.GET_ALL_RECIPES)
            return response.data
        } catch (error) {
            catchError(error, "Failed to fetch all_recipes_data")
        }
    }

    async createRecipe (data: IFormAddRecipeInput): Promise<IRecipe> {
        try {
            const response = await axiosClient.post(this.POST_CREATE_RECIPE, data)
            return response.data
        } catch (error) {
            catchError(error, "Failed to create new Recipe")
        }
    }

    async getMyRecipe (): Promise<IRecipe[]> {
        try {
            const response = await axiosClient.get(this.GET_MY_RECIPE)
            return response.data
        } catch (error) {
            catchError(error, "Failed to fetch my Recipe")
        }
    }

}

export const recipeService = new RecipeService()