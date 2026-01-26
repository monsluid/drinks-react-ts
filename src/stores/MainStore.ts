import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { createRecipesSlide, type RecipesSlideType } from "./recipes.slide";
import { createFavoritesSlice, type FavoritesSliceType } from "./favorites.slide";
import { createNotificationSlice, type NotificationSliceType } from "./notification.slice";

export const useMainStore = create<
  RecipesSlideType & 
  FavoritesSliceType &
  NotificationSliceType
>()(
  devtools((...args) => ({
    ...createRecipesSlide(...args),
    ...createFavoritesSlice(...args),
    ...createNotificationSlice(...args),
  })),
);
