import { element } from 'deku'

export default function Peers({
  props : {
    peers = {},
    fold = true,
    onClick
  }
}) {
  return (
    <div class='peers'
         onClick={ onClick || LAMBDA }>
      <h4>Peers</h4>
      <ul class={ c([{'folded' : fold}]) }>
        {
          Object.keys(peers).map(
            key => {
              const peer = peers[key],
                    name = peer.userData && peer.userData.name || 'anon'
              return (
                <li>
                  <div class="peer-name">{name}</div>
                </li>
              )}
          )
        }
      </ul>
    </div>
  )
}
