import type { StateCreator } from "zustand";
import aiService from "../services/aiService";

export type AiType = {
  recipe: string
  generateRecipe: (prompt: string) => Promise<void>
}

export const createAiSlide : StateCreator<AiType, [] ,[], AiType> = () => ({
  recipe: '',
  generateRecipe: async (prompt) => {
    await aiService.generateRecipe(prompt)
          
  },
})
