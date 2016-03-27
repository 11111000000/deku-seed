/*
 *  Skylink Service
 */

const log = debug('app:skylink/service')

import 'skylinkjs/publish/skylink.debug.js'

export var skylinkInst = null

export function skylink () {
  return skylinkInst ||
    (skylinkInst = window.skylink = new Skylink())
}

export function init( options = {} ) {

  const hash = CryptoJS.HmacSHA1(roomname + "" + duration + "" +
                                 (new Date()).toISOString(), token)

  const credentials = encodeURIComponent(hash.toString(CryptoJS.enc.Base64))

  return new Promise(function (resolve,reject) {
    AdapterJS.webRTCReady(function( isUsingPlugin ) {

      let s = skylink()

      s.setDebugMode(true)

      s.setLogLevel(s.LOG_LEVEL.DEBUG)

      s.init({...options, credentials}, (error, data) =>
                     (error ? reject(error) : resolve(data) ))

    })
  })
}
