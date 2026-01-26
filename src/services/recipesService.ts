import axios from "axios";
import { CategoriesResponseSchema, DrinkResponseSchema, RecipeResponseSchema } from "../schemas/recipies-schema";
import type { SearchFilter } from "../types";

export const getCategories = async () => {

  const url = "https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list"
  const { data } = await axios(url)
  const response = CategoriesResponseSchema.safeParse(data)
  if(response.success) {
    return response.data
  }  
}

export const getRecipes = async (searchFilters: SearchFilter) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=${searchFilters.category}&i=${searchFilters.ingredient}`
  const { data } = await axios(url)
  const response = DrinkResponseSchema.safeParse(data)
  if(response.success) {
    return response.data
  }  
}

export const getRecipeById = async (id: string) => {
  const url = `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
  const { data } = await axios(url)
  const response = RecipeResponseSchema.safeParse(data.drinks[0])
  if(response.success) {
    return response.data
  }  
}
