/*
 *  Map Action to Reducer ( { ...initial}, {  } )
 */


export default function(model,actionMap) {

  return function (state = model, action) {

    const reduceFn = actionMap[action.type]

    if (reduceFn) {
      return reduceFn(state, action)
    }

    return state
  }

}
