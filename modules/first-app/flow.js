let log = debug('app flow')

import adapter from 'decorators/adapter'

import { APP_INIT } from './actions'

import { SKYLINK_INIT_SUCCESS, SKYLINK_EVENT, skylinkInit } from 'skylink/actions'
import { CHAT_MESSAGE_SEND, chatMessageRecieved } from 'chat/actions'
import { PROFILE_USERNAME_SET } from 'profile/actions'

import { skylink } from 'skylink/service'

const LAMBDA = () => null

export default adapter({

  [APP_INIT]({ dispatch, getState }, params) {
    dispatch(skylinkInit())
  },

  [CHAT_MESSAGE_SEND]({store}, { message }) {
    skylink().sendP2PMessage( message.text )
  },

  [PROFILE_USERNAME_SET]({dispatch}, { name }) {
    skylink().setUserData({ name })
  },

  [SKYLINK_INIT_SUCCESS]() {

    skylink()
      .joinRoom()

    skylink()
      .getPeers(true,
                ((error, success) =>
                 log('getPeers', error,success)))
  },

  [SKYLINK_EVENT]({dispatch}, { name, params }) {

    ; ({
      ['incomingMessage']([message,peerId,peerInfo]) {

        const name = peerInfo.userData ?
                (peerInfo.userData.name || '') : ''

        dispatch( chatMessageRecieved(
          { text : message.content,
            from: name } ))

      }
    }[name] || LAMBDA)(params)

  }

})
