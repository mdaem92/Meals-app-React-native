import { combineReducers } from "redux";
import mealsReducer from './meals/meals.reducer'
import favoritesReducer from './favorites/favorites.reducers'
import filtersReducer from './filters/filters.reducer'

export default combineReducers({
    meals:mealsReducer,
    favorites:favoritesReducer,
    filters:filtersReducer
})