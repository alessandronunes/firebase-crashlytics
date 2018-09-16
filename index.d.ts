import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Firebase Crashlytics
 * @description
 * Manage the appearance of the native firebase crashlytics.
 *
 * Requires Cordova plugin: `cordova-plugin-firebase-crashlytics`. For more info, please see the [FirebaseCrashlytics plugin docs](https://github.com/apache/cordova-plugin-firebase-crashlytics).
 *
 * @usage
 * ```typescript
 * import { FirebaseCrashlytics } from '@ionic-native/firebase-crashlytics';
 *
 * constructor(private firebaseCrashlytics: FirebaseCrashlytics) { }
 *
 * ...
 *
 * // let firebase crashlytics overlay webview
 * this.firebaseCrashlytics.initialise();
 * ```
 *
 */
export declare class FirebaseCrashlyticsOriginal extends IonicNativePlugin {
    initialise(): any;
}

export declare const FirebaseCrashlytics: FirebaseCrashlyticsOriginal;