import { createApp, element } from 'deku'

let cached = null

export default function render (store) {

  const renderer = createApp(document.getElementById('root'), store.dispatch)

  function renderApplication(Component) {

    if (Component)
      cached = Component
    else
      Component = cached

    renderer(<Component />, store.getState())
  }

  renderApplication(require('./components/Application').default)

  store.subscribe(() => renderApplication())

  if (module.hot) {
    module.hot.accept('./components/Application', function () {
      const nextApplication = require('./components/Application').default
      renderApplication(nextApplication)
    })
  }
}
