import {createSelector} from 'reselect'


const filtersSelector = state=> state.filters

export const veganSelector = createSelector(
    filtersSelector,
    (filters)=>filters.vegan
)
export const vegetarianSelector = createSelector(
    filtersSelector,
    (filters)=>filters.vegatarian
)
export const lactoseFreeSelector = createSelector(
    filtersSelector,
    (filters)=>filters.lactoseFree
)
export const glutenFreeSelector = createSelector(
    filtersSelector,
    (filters)=>filters.glutenFree
)