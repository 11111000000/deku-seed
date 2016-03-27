import { element } from 'deku'

import './style'

import { LOADING, OK, ERROR } from 'skylink/constants'

const log = debug('app:components/Skylink')

import Connection from './Connection'
import Peers from './Peers'

export default stateful({

  initialState() {
    return {
      connectionFold: true,
      peersFold: false
    }
  },

  render ({ context : { skylink }, dispatch , state, setState}) {

    const { status, data } = skylink

    return (
      <div class='skylink'>
        <h3>Skylink</h3>
        <Indicator type='status' status={ status } />

        <Connection data={data}
                    fold={ state.connectionFold }
                    onClick={ ev => setState({...state, connectionFold : !state.connectionFold}) } >
        </Connection>

        <Peers peers={ skylink.peers }
               fold={ state.peersFold }
               onClick={ ev => setState({...state, peersFold : !state.peersFold}) }>
        </Peers>
      </div>)
  }
})

export function Indicator({ props : { type = 'default', status = LOADING } }) {
  return (
    <div class={c(['indicator', type, {
           'loading' : status === LOADING,
           'ok' : status === OK,
           'error' : status === ERROR
         }])} />
  )
}
