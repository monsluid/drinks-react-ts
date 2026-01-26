import type { StateCreator } from "zustand"
import type { Recipe } from "../types"
import { createNotificationSlice, type NotificationSliceType } from "./notification.slice"


export type FavoritesSliceType = {
  favorites: Recipe[] 
  handleFavorite: (recipe: Recipe) => void
  favoritesExist: (id: Recipe['idDrink']) => boolean
  loadFavorites: () => void
}

export const createFavoritesSlice: StateCreator<FavoritesSliceType & NotificationSliceType, [], [], FavoritesSliceType> = (set, get, api) => ({
  favorites: [],
  handleFavorite: (recipe) => {
    const favoritesExist = get().favoritesExist(recipe.idDrink)
    if (favoritesExist) {
      set((state) => ({
        favorites: state.favorites.filter(fav => fav.idDrink !== recipe.idDrink),
      }))
      createNotificationSlice(set,get,api).showNotification({
        text: 'Se elimino de favoritos',
        error: false
      })
    } else { 
      set((state) => ({
        favorites: [...state.favorites, recipe],
      }))
      createNotificationSlice(set,get,api).showNotification({
        text: 'Se agrego a favoritos',
        error: false
      })

    }    

    localStorage.setItem('favorites', JSON.stringify(get().favorites))
  },
  favoritesExist: (id) => {
    return get().favorites.some(fav => fav.idDrink === id)
    
  },
  loadFavorites: () => {
    const storedFavorites = localStorage.getItem('favorites')
    if (storedFavorites) {
      set({ favorites: JSON.parse(storedFavorites) })
    }
  }
})
