import type { StateCreator } from "zustand"
import { getCategories, getRecipeById, getRecipes } from "../services/recipesService"
import type { Categories, Drink, DrinkResponse, Recipe, SearchFilter } from "../types"


export type RecipesSlideType = {
  categories: Categories
  drinks: DrinkResponse
  recipe: Recipe
  modal: boolean
  fetchCategories: () => Promise<void>
  searchRecipes: (searchFilter: SearchFilter) => Promise<void>
  viewRecipe: (id: Drink['idDrink']) => Promise<void>
  closeModal: () => void
}

export const createRecipesSlide: StateCreator<RecipesSlideType> = ((set) => ({
  categories: {
    drinks: [],
  },
  drinks: {
    drinks: []
  },
  recipe: {} as Recipe,
  modal: false,
  fetchCategories: async () => {
    const categories = await getCategories()
    set({ 
      categories 
    })    
  },
  searchRecipes: async (searchFilter) => {
    const drinks = await getRecipes(searchFilter)
    set({ 
      drinks 
    })    
  },
  viewRecipe: async (id) => {
    const recipe = await getRecipeById(id)
    set({ 
      recipe,
      modal: true
    })
  },
  closeModal: () => set({ 
    modal: false,
    recipe: {} as Recipe
  }),
}))
