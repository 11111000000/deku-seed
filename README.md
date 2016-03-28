# Deku mobile seed

Deku mobile seed project:

* [ES6](https://babeljs.io/)
* [Deku](https://github.com/dekujs/deku)
* [Redux](http://redux.js.org/)
* [Webpack](http://webpack.github.io/)
* [PostCSS](https://github.com/postcss/postcss)
* [Stylus](http://stylus-lang.com/)
* [Cordova](https://cordova.apache.org/)
* [Crosswalk](https://crosswalk-project.org/)
* [Skylink](http://skylink.io/)

## Development

1. Requires installed Node.js and NPM and [Cordova](https://cordova.apache.org/)

2. Run local HMR server:

```
  $ npm install
  $ npm start
```

3. Follow [https://localhost:1024](https://localhost:1024) with Webkit-based browser

## Build JS bundle (./www)

```
  $ npm build
```

## Create Android APK:

1. Setup environment: Android SDK, Cordova (`sudo npm -g install cordova`)

2. `$ cordova build android`

## Testing

### Android APK

1. install GenyMotion:
```
  $ yaourt genymotion
```
2. setup and run virtual machine, enable USB debugging on it
3. install apk from project folder:
```
  $ adb install -r ./platforms/android/build/outputs/apk/android-debug.apk
```

## FAQ

1. `  > Could not find any version that matches com.android.support:support-v4`:

try:

```
$ android update sdk --no-ui --all --filter "extra-android-m2repository"
```

2. If you get  `Execution failed for task ':transformClassesWithDexForArmv7Debug'.`
ensure what
```
configurations {
   all*.exclude group: 'com.android.support', module: 'support-v4'
}
```
is in `platforms/android/build.gradle`
(http://stackoverflow.com/questions/32511242/cordova-error-on-build-only-for-android-com-android-dex-dexexception-multiple/32559386#32559386)
