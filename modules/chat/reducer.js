import { CHAT_MESSAGE_SEND, CHAT_MESSAGE_RECIEVED } from './actions'

import reducer from 'decorators/reducer'

export default reducer({
  messages: [ ]
}, {

  // [ APP_INIT ](state, { data } ) {
  //   return  { ...state, appInit: true }
  // },

  // [ CHAT_MESSAGE_SEND ](state, { message } ) {
  //   const { messages } = state
  //   return  { ...state, messages: [message,...messages] }
  // },

  [ CHAT_MESSAGE_RECIEVED ](state, { message } ) {
    return  { ...state, messages: [ message,...state.messages ] }
  }
})
