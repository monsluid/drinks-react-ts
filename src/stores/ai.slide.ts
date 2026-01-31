import type { StateCreator } from "zustand";

export type AiType = {
  recipe: string
  generateRecipe: (prompt: string) => Promise<void>
}

export const createAiSlide : StateCreator<AiType, [] ,[], AiType> = () => ({
  recipe: '',
  generateRecipe: async (prompt) => {
    console.log('from slide', prompt);
          
  },
})
