export const CHAT_MESSAGE_SEND = 'CHAT_MESSAGE_SEND'
export const CHAT_MESSAGE_RECIEVED = 'CHAT_MESSAGE_RECIEVED'

export function chatMessageRecieved(message) {
  return function ( dispatch ) {
    dispatch({ type : CHAT_MESSAGE_RECIEVED, message })
  }
}

export function chatMessageSend(message) {
  return function ( dispatch ) {
    dispatch({ type : CHAT_MESSAGE_SEND, message})
  }
}
