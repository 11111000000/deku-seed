/*
 *  Chat Component
 */

import './style'
import { element } from 'deku'
import stateful from 'deku-stateful'
import { chatMessageSend } from 'chat/actions'
import { Messages } from './Messages'
import handler from '@f/event-handler'

const log = debug('app:Chat')

export default stateful({

  initialState() {
    return {
      input: ''
    }
  },

  onCreate ( { dispatch, path, state, setState } ) {
  },

  render (
    { context : { chat },
      state,
      setState, dispatch
    }) {

    const { input } = state

    function send () {
      dispatch(chatMessageSend({ text : input, from: 'user' }))
      setState({ ...state, input : '' } )
    }

    return (
      <div class='chat'>
        <h3>Chat</h3>
        <Messages messages={ chat.messages } />
        <div class='chat-controls'>
          <input key='chat-input'
                 value={ state.input }
                 onKeyDown={ handler([ { enter: [ send ] } ] ) }
                 onKeyUp={ handler([ event => setState( { input : event.target.value } ) ] ) }
                 />
          <button onClick={ send }>Send</button>
        </div>
      </div>
    )
  }
})
