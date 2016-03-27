/*
 *  Skylink Actions
 */

const log = debug('app:skylinkActions')

export const SKYLINK_INIT_START = 'SKYLINK_INIT_START'
export const SKYLINK_INIT_ERROR = 'SKYLINK_INIT_ERROR'
export const SKYLINK_INIT_SUCCESS = 'SKYLINK_INIT_SUCCESS'
export const SKYLINK_EVENT = 'SKYLINK_EVENT'

export function skylinkInit() {
   return { type : SKYLINK_INIT_START }
}

export function skylinkEvent(name, params) {
  return function ( dispatch, getState ) {
    dispatch({ type : SKYLINK_EVENT, name, params })
  }
}
