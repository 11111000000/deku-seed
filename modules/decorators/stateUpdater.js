/*
 *  stateUpdater({state, setState}) => 'prop' => { ...methods }
 *  methods : { byIt(value), byTargetValue(event) , ... }
 */

const stateUpdater = ({ state, setState }) => prop =>  {
  return {
    byTargetValue(event) {
      setState( { ...state, [prop] : event.target.value })
    },
    byThat(that) {
      setState( { ...state, [prop] : that })
    }
  }
}

export default stateUpdater
