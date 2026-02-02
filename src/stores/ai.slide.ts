import type { StateCreator } from "zustand";
import aiService from "../services/aiService";

export type AiType = {
  recipeAI: string;
  isGenerating: boolean;
  generateRecipe: (prompt: string) => Promise<void>;
};

export const createAiSlide: StateCreator<AiType, [], [], AiType> = (set) => ({
  recipeAI: "",
  isGenerating: false,
  generateRecipe: async (prompt) => {
    const stream = await aiService.generateRecipe(prompt);
    set({ recipeAI: "", isGenerating: true }) // Reiniciamos el estado antes de generar una nueva recet

    for await (const chunk of stream) {
      // Extraemos el contenido de forma segura
      const content = chunk.choices?.[0]?.delta?.content || "";

      if (content) {
        // Actualizamos el estado concatenando strings
        set((state) => ({
          recipeAI: state.recipeAI + content,
        }));
      }
    }
    set({ isGenerating: false });
  },
});
