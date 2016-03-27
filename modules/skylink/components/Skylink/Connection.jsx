import { element } from 'deku'

export default function Connection ({ props : { data = {}, fold = true, onClick } }) {
  return (
    <div class="connection"
         onClick={ onClick || LAMBDA }>

      <h4>Connection</h4>

      <ul class={ c([{'folded' : fold}]) }> {

        Object.keys(data).map(
          key => {
            const type = typeof data[key]
            return (<li>
              <span class='key'>{ key }</span>
              <span class={`value ${type}`}>{ `${data[key]}` }</span>
            </li>)
          }
        )
      } </ul>
    </div>
  )
}
