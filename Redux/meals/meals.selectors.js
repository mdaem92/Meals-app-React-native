import { createSelector } from 'reselect'

const filtersSelector = state => state.filters
const mealsSelector = state => state.meals

export const filteredMealsSelector = createSelector(
    filtersSelector,
    mealsSelector,
    ({ glutenFree, lactoseFree, vegetarian, vegan }, { meals }) => {

        return meals.filter((meal) => {
            const glutenMatch = glutenFree === false ? true:glutenFree ===meal.isGlutenFree
            const lactoseMatch = lactoseFree === false ? true:lactoseFree === meal.isLactoseFree
            const vegetarianMatch = vegetarian === false ? true : vegetarian === meal.isVegetarian
            const veganMatch = vegan === false ? true:vegan ===meal.isVegan
            return glutenMatch && lactoseMatch && vegetarianMatch && veganMatch
        })
    }
)