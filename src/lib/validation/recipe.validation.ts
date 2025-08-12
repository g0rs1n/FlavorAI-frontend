import { RegisterOptions } from "react-hook-form";
import { IFormAddRecipeInput } from "../types/types";

export const recipeValidationRules: Record<keyof IFormAddRecipeInput, RegisterOptions<IFormAddRecipeInput>> = {
  title: {
    required: "Recipe title is required",
    minLength: { value: 3, message: "Recipe title must be at least 3 characters long" },
  },
  description: {
    minLength: { value: 10, message: "Description must be at least 10 characters long" },
  },
  ingredients: {
    required: "Ingredients are required",
    minLength: { value: 3, message: "Ingredients must be at least 3 characters long" },
  },
  instructions: {
    required: "Instructions are required",
    minLength: { value: 5, message: "Instructions must be at least 5 characters long" },
  },
};