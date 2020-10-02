import FiltersActionTypes from './filters.types'


export const setFieldValue = (field,value)=>({
    type:FiltersActionTypes.SET_FIELD_VALUE,
    field,
    value
})