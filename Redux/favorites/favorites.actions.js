import FavoritesActionTypes from './favorites.types'

export const addToFavorites = (meal)=>({
    type:FavoritesActionTypes.ADD_FAVORITE,
    meal
})
export const removeFromFavorites = (index)=>({
    type:FavoritesActionTypes.REMOVE_FAVORITE,
    index
})