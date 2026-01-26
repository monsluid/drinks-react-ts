import { z } from "zod";

export const CategoriesResponseSchema = z.object({
  drinks: z.array(
    z.object({
      strCategory: z.string()
    })
  )
});

export const SearchRecipesFiltetSchema = z.object({
  ingredient: z.string(),
  category: z.string()
})


// Esquema para un objeto de bebida individual
export const DrinkSchema = z.object({
  strDrink: z.string().min(1),
  strDrinkThumb: z.string(),
  idDrink: z.string()
});

// Esquema para la respuesta completa de la API
export const DrinkResponseSchema = z.object({
  drinks: z.array(DrinkSchema)
});

export const RecipeResponseSchema = z.object({
  idDrink: z.string(),
  strDrink: z.string(),
  strDrinkThumb: z.string(),
  strInstructions: z.string(),
  strIngredient1: z.string().nullable(),
  strIngredient2: z.string().nullable(),
  strIngredient3: z.string().nullable(),
  strIngredient4: z.string().nullable(),
  strIngredient5: z.string().nullable(),
  strIngredient6: z.string().nullable(),
  strMeasure1: z.string().nullable(),
  strMeasure2: z.string().nullable(),
  strMeasure3: z.string().nullable(),
  strMeasure4: z.string().nullable(),
  strMeasure5: z.string().nullable(),
  strMeasure6: z.string().nullable(),
});
