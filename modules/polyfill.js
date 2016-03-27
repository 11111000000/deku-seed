import 'dom4'
import 'core-js/modules/es6.object.assign'
import 'core-js/modules/es6.object.keys'
import 'core-js/modules/es6.array.from'
import 'core-js/modules/es6.array.find'
import 'core-js/modules/es6.array.find-index'

import AdapterJS from 'adapterjs'
import io from 'socket.io-client'

import { polyfill as PromisePolyfill } from 'es6-promise'

PromisePolyfill()

window.AdapterJS = AdapterJS

window.io = io
