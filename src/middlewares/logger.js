const logger = (store)=> next => action => {
  console.group(action.type)
  console.log("The action: ", action)
  console.log("The new state: ", store.getState());
  next(action)
  console.groupEnd()
}

export default logger;
