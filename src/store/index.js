import { createStore } from 'redux'
import rootReducers from "../reducers/index";
import middleware from '../middleware'

const store = createStore(rootReducers, middleware)
export default store



