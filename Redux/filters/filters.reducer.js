import filtersActionTypes from './filters.types'

const filtersDefaultState = {
    glutenFree:true,
    lactoseFree:true,
    vegetarian:true,
    vegan:true
}

export default (state=filtersDefaultState,action)=>{
    switch (action.type) {
        case filtersActionTypes.SET_FIELD_VALUE:
            return{
                ...state,
                [action.field]:action.value
            }
            
        default:
            return state
    }
}