const logger = (store) => (next) => (action) => {
    console.group(action.type)
    console.log('The action ', action)
    const response = next(action)
    console.log('New State: ', store.getState())
    console.groupEnd()
    return response
}

export default logger