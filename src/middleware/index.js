import thunk from 'redux-thunk'
import checker from './checker'
import logger from './logger'
import { applyMiddleware } from 'redux'

const middleware = applyMiddleware(
    thunk,
    checker,
    logger
)
export default middleware