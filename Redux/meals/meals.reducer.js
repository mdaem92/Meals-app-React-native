import {MEALS} from '../../data/dummy-data'
import MealsActionTypes from './meals.types'

const mealsDefaultState = {
    meals:MEALS
}
export default (state=mealsDefaultState,action)=>{
    switch (action.type) {
        case MealsActionTypes.ADD_MEAL:
            return [
                ...state.meals,
                action.meal
            ]
        case MealsActionTypes.EDIT_MEAL:
            return [
                ...state.meals.slice(0,action.index),
                {...action.updates},
                ...state.meals.slice(action.index+1)
            ]
        case MealsActionTypes.REMOVE_MEAL:
            return [
                ...state.meals.slice(0,action.index),
                ...state.meals.slice(action.index+1)
            ]
        default:
            return state;
    }
}