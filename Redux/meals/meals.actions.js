import MealsTypes from "./meals.types";

export const addMeal = (meal)=>({
    type:MealsTypes.ADD_MEAL,
    meal
})
export const removeMeal = (meal,id)=>({
    type:MealsTypes.REMOVE_MEAL,
    meal,
    id
})
export const addMeal = (meal,id,updates)=>({
    type:MealsTypes.EDIT_MEAL,
    meal,
    id,
    updates
})