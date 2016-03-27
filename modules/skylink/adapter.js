/*
 *  Skylink Adapter
 */

const log = debug('app:skylink/adapter')

import adapter from 'decorators/adapter'

const LAMBDA = () => null

import { SKYLINK_INIT_START,
         SKYLINK_INIT_ERROR,
         SKYLINK_INIT_SUCCESS,
         SKYLINK_EVENT,
         skylinkEvent,
       } from './actions'

import setupEvents from './events'
import { init, skylink  } from './service'
import options from './options.json'
import events from './events'

export default adapter({

  [SKYLINK_INIT_START]({ dispatch }, {id}) {

    init( options ).then( data => {
      dispatch({ type : SKYLINK_INIT_SUCCESS, data })
    }, error => {
      dispatch({ type : SKYLINK_INIT_ERROR, error })
    })
  },

  [SKYLINK_INIT_SUCCESS]({ dispatch, getState }, { data }) {

    events.forEach(
      name =>
        skylink().on(name, (...params) =>
                     dispatch( skylinkEvent(name,params) )))

  },

  [SKYLINK_INIT_ERROR]({ dispatch, getState}, { error }) {
    log('ERROR',error)
  },

  [SKYLINK_EVENT]({ dispatch, getState }, { name, params }) {
    log('SKYLINK_EVENT',name,params)
    ; ({
      ['peerJoined']([peerId,peerInfo,isSelf]) {

      },
      ['peerLeft']([peerId,peerInfo,isSelf]) {

      },
      ['peerRestart']([peerId,peerInfo,isSelf]) {

      },
      ['peerUpdated']([peerId,peerInfo,isSelf]) {

      }

    }[name] || LAMBDA)(params)
  }


})
