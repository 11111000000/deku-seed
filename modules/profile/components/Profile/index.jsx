import { element } from 'deku'
import stateful from 'deku-stateful'
import c from 'classnames'
import { setUserName } from 'profile/actions'
import stateUpdater from 'decorators/stateUpdater'
import handler from '@f/event-handler'

import './style'

const log = debug('app:components/Profile')

export default stateful({

  initialState: function () {
    return { userName : ''}
  },

  render ({ context : { profile }, dispatch,
            state, setState }) {

    const updateState = stateUpdater( { state, setState } )

    const send = () => dispatch(setUserName( state.userName ))

    return (
      <div class="skylink">
        <h3>Profile</h3>
        <label for="username">Username: </label>

        <input name="username"
               defaultValue={ state.userName }
               onKeyDown={ handler([ { enter: [ send ] }])}
               onKeyUp={ handler([updateState('userName').byTargetValue ]) }
          />

        <button onClick={ send }>Use</button>

      </div>
    )
  }
})
