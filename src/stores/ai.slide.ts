import type { StateCreator } from "zustand";

export type AiType = {
  recipe: string
}

export const createAiSlide : StateCreator<AiType, [] ,[], AiType> = () => ({
  recipe: ''
})
