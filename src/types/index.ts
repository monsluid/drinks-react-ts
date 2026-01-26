import { z } from 'zod';
import type { CategoriesResponseSchema, DrinkResponseSchema, DrinkSchema, RecipeResponseSchema, SearchRecipesFiltetSchema } from '../schemas/recipies-schema';

export type Categories = z.infer<typeof CategoriesResponseSchema>
export type SearchFilter = z.infer<typeof SearchRecipesFiltetSchema>
export type Drink = z.infer<typeof DrinkSchema>
export type DrinkResponse = z.infer<typeof DrinkResponseSchema>
export type Recipe = z.infer<typeof RecipeResponseSchema>

