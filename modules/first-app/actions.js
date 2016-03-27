export const APP_INIT = 'APP_INIT'

let log = debug('app actions')

export function appInit () {
  return function (dispatch, getState ) {
    dispatch({ type : APP_INIT })
  }
}
