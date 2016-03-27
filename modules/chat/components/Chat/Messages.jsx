import { element } from 'deku'

const log = debug('app:Messages')

export function Message ( { dispatch, props: { message }}) {
  const { text = '', from = '' } = message
  return (
    <div class="chat-message">
      <span class="chat-message-from">{ from }: </span>
      <span class="chat-message-text">{ text }</span>
    </div>
  )
}

export function Messages ( { dispatch, props: { messages }}) {
  return (
    <div class="chat-messages">
      { messages.map( message => <Message message={ message } />) }
    </div>
  )
}
