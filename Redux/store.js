import {createStore , applyMiddleware } from 'redux'
import {logger} from 'redux-logger'
import rootReducer from './rootReducer'
import AsyncStorage from '@react-native-community/async-storage'
import { persistStore, persistReducer } from 'redux-persist';


const middlewares = []
// if(process.env.NODE_ENV === 'development'){
//     middlewares.push(logger)
// }


const persistConfig = {
    key:'mealsApp:root',
    storage:AsyncStorage,
    blackList:['meals']
}
const persistedReducer = persistReducer(persistConfig,rootReducer)
const store = createStore(persistedReducer,applyMiddleware(...middlewares))
export const persistor = persistStore(store)
export default store