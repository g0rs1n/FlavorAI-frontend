import { 
    UseFormRegister, 
    RegisterOptions, 
    FieldErrorsImpl, 
    FieldValues,
    FieldError,
    Path
} from "react-hook-form";

export interface IUserData {
    id: string;
    email: string;
    username: string;
    firstName?: string;
    lastName?: string;
    avatarPath: string;
}

export interface IAuthForm {
    username?: string; 
    email: string;
    password: string;
}

export interface ILoginData {
    email: string;
    password: string;
}

export interface IRegisterData extends ILoginData {
    username: string;
}

// AuthForm Types
 
export type TRegisterAuthForm = UseFormRegister<IAuthForm>
export type TAuthFormErrors = FieldErrorsImpl<IRegisterData>
export type TNameAuthFieldProps = keyof IAuthForm
export type TValidationRules = RegisterOptions<IAuthForm, TNameAuthFieldProps>;

// Types React Hook Form

export type TRegisterOptions<T extends FieldValues> = RegisterOptions<T>
export type TUseFormRegister<T extends FieldValues> = UseFormRegister<T>
export type TFieldError = FieldError
export type TPath<T> = Path<T>

// Recipe Type

export interface IRecipe {
  id: string;
  authorId: string;
  title: string;
  description?: string | null;
  ingredients: string;
  instructions: string;
  avarageRating: number;
}

// Ratings Type 

export interface IRating {
  id: string;
  userId: string;
  recipeId: string;
  score: number;
}

// Add Recipe Form types

export interface IFormAddRecipeInput {
    title: string;
    description?: string;
    ingredients: string;
    instructions: string;
}