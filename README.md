timesheet.phonegap
==================

## Introduction

This is our timesheet assistant built to run on Android, IOS, etc.. using Phonegap, AngularJs, Bootstrap, ...

## Development guidelines

Required:
- Node.js
- Yeoman 1.0+ (Bower, Grunt, Yeoman)
- Android SDK
- Java JDK 1.7+

#### Setting up android SDK
1. Download SDK and install at c:\adt for example (https://developer.android.com/sdk/index.html)
2. Using the SDK manager install sdk packages for the latest Android versions
3. Set up your Path variables (Windows only)
	- ANDROID_HOME: C:\adt\sdk\platform-tools
	- Add to Path:  C:\adt\sdk\tools;C:\adt\sdk\platform-tools;

#### Setting up Java SDK
1. Download and install the latest Java SDK (http://www.oracle.com/technetwork/java/javase/downloads/index.html)
2. Set up your Path variables (Windows only):
	- JAVA_HOME: C:\Program Files\Java\jdk1.7.0_45
	- Add to Path: C:\Program Files\Java\jdk1.7.0_45\bin;

#### Setting up Ant
1. Download and install ant at c:\ant for example (http://ant.apache.org/bindownload.cgi)
2. Set up you Path variables (Windows only):
	- C:\ant\bin;

#### Setting up app development
1. Install node packages => npm install
2. Run dev server => grunt server

## Building/running phonegap app

#### Building the app
- Execute => grunt build:phonegap

#### Running on emulator
- Execute => cordova emulate android

#### Running on a device
- Execute => cordova run android

## Useful resources

- https://developers.google.com/chrome-developer-tools/docs/remote-debugging (Chrome extension)
- https://github.com/jrstarke/webview-debug (Cordova plugin for remote debugging)
- http://stackoverflow.com/questions/10761696/running-the-new-intel-emulator-for-android (Intel accelerator - Windows Android emulator)
- https://github.com/Red-Folder/Cordova-Plugin-BackgroundService/tree/master/3.1.0 (Background cordova implementation)
	- http://red-folder.blogspot.be/2012/09/phonegap-service-tutorial-part-1.html
	- http://red-folder.blogspot.be/2012/09/phonegap-service-tutorial-part-2.html
	- http://red-folder.blogspot.be/2012/09/phonegap-service-tutorial-part-3.html