import FavoritesActionTypes from './favorites.types'

const favoritesDefaultState = []

export default (state=favoritesDefaultState,action)=>{
    switch (action.type) {
        case FavoritesActionTypes.ADD_FAVORITE:
            return[
                ...state,
                action.meal
            ]
        case FavoritesActionTypes.REMOVE_FAVORITE:
            return[
                ...state.slice(0,action.index),
                ...state.slice(action.index+1)
            ]
    
        default:
            return state;
    }
}