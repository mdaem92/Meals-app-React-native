import filtersActionTypes from './filters.types'

const filtersDefaultState = {
    glutenFree:false,
    lactoseFree:false,
    vegetarian:false,
    vegan:false
}

export default (state=filtersDefaultState,action)=>{
    switch (action.type) {
        case filtersActionTypes.SET_FIELD_VALUE:
            return{
                ...state,
                [action.field]:action.value
            }
        case filtersActionTypes.RESET_ALL:
            return filtersDefaultState
            
        default:
            return state
    }
}