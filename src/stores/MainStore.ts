import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlide, type RecipesSlideType } from "./recipes.slide";
import { createFavoritesSlice, type FavoritesSliceType } from "./favorites.slide";
import { createNotificationSlice, type NotificationSliceType } from "./notification.slice";
import { createAiSlide, type AiType } from "./ai.slide";

export const useMainStore = create<
  RecipesSlideType & 
  FavoritesSliceType &
  NotificationSliceType &
  AiType
>()(
  devtools((...args) => ({
    ...createRecipesSlide(...args),
    ...createFavoritesSlice(...args),
    ...createNotificationSlice(...args),
    ...createAiSlide(...args)
  })),
);
