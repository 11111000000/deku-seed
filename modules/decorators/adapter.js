/*
 *  Adapter flow decorator
 */


export default function (actionsMap) {

  const flow = store => next => action => {

    actionsMap[action.type] &&
      actionsMap[action.type](store, action)

    return next(action)

  }

  return flow

}
