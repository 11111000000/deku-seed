/*
 *  Skylink Reducers
 */

import { SKYLINK_INIT_START,
         SKYLINK_INIT_ERROR,
         SKYLINK_INIT_SUCCESS,
         SKYLINK_EVENT
       } from './actions'

import { LOADING,
         OK,
         ERROR
       } from './constants'

import reducer from 'decorators/reducer'

let log = debug('app:skylink/reducer')

export default reducer({
  status: null,
  connect: {},
  peers: {}
}, {

  [ SKYLINK_INIT_START ](state, { data } ) {
    return  { ...state, status: LOADING, data : {} }
  },

  [ SKYLINK_INIT_SUCCESS ](state, { data } ) {
    return  { ...state, status: OK, data  }
  },

  [ SKYLINK_INIT_ERROR ](state, { data } ) {
    return  { ...state, status: ERROR, data: {} }
  },

  [ SKYLINK_EVENT ](state, { name, params } ) {

    let peers = {...state.peers}

    ; ({

      ['peerJoined']([peerId,peerInfo,isSelf]) {
        peers[peerId] = peerInfo
      },
      ['peerLeft']([peerId,peerInfo,isSelf]) {
        delete peers[peerId]
      },
      ['peerRestart']([peerId,peerInfo,isSelf]) {
        peers[peerId] = peerInfo
      },
      ['peerUpdated']([peerId,peerInfo,isSelf]) {
        peers[peerId] = peerInfo
      },
      ['getPeersStateChange'](data) {
        log('getPeersStateChange', data)
      }

    }[name] || LAMBDA)(params)

    return  { ...state, peers  }
  },



})
