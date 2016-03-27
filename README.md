# Deku mobile seed

Deku mobile seed project:

Webpack
Deku
Reux
Cordova
Crosswalk
Skylink

## Development

1. Requires Node.js and NPM
2. [Cordova](https://cordova.apache.org/)
3. Start:

```
  $ npm install
  $ npm start
```
follow https://localhost:1024

## Build bundle in www
```
  $ npm build
```

## Build Android apk:

1. Setup environment: Android SDK, Cordova (`sudo npm -g install cordova`)

2. From project folder:
```
  $ cordova build android
```

## Recent problems

### Crosswalk build

1. If you get `  > Could not find any version that matches com.android.support:support-v4`, try:
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

## Testing

1. install GenyMotion:
```
  $ yaourt genymotion
```
2. setup and run virtual machine, enable USB debugging on it
3. install apk from project folder:
```
  $ adb install -r ./platforms/android/build/outputs/apk/android-debug.apk
```
