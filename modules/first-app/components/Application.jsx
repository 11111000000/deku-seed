import 'styles'

import { element } from 'deku'

import Profile from 'profile/components/Profile'
import Skylink from 'skylink/components/Skylink'
import Chat from 'chat/components/Chat'

export default {
  render() {
    return (
      <main>
        <center><h1>{ VERSION }</h1></center>
        <Skylink />
        <br />
        <Chat />
        <br />
        <Profile />
      </main>
    )
  }
}
