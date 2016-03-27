/*
 *  Profile Actions
 */

const log = debug('app:profileActions')

export const PROFILE_USERNAME_SET = 'PROFILE_USERNAME_SET'

export function setUserName(name) {
  return function ( dispatch, getState ) {
    dispatch({ type : PROFILE_USERNAME_SET, name })
  }
}
