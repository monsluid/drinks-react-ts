import { OpenRouter  } from "@openrouter/sdk";

export const openrouter = new OpenRouter({
  apiKey: import.meta.env.VITE_OPENROUTER_API_KEY,
})
