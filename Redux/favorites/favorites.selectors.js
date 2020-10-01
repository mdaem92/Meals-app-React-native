import {createSelector} from 'reselect'


 const favoritesSelector = state=>{
    return state.favorites
}
export const favesSelector = createSelector(
    favoritesSelector,
    (favs)=>{
        return favs
    }
)