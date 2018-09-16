import { IonicNativePlugin } from '@ionic-native/core';
/**
 * @name Firebase Crashlytics
 * @description
 * Manage firebase crashlytics.
 *
 * Requires Cordova plugin: `cordova-plugin-firebase-crashlytics`. For more info, please see the [FirebaseCrashlytics plugin docs](https://github.com/ReallySmallSoftware/cordova-plugin-firebase-crashlytics).
 *
 * @usage
 * ```typescript
 * import { FirebaseCrashlytics } from '@ionic-native/firebase-crashlytics/ngx';
 *
 * constructor(private firebaseCrashlytics: FirebaseCrashlytics) { }
 *
 * ...
 *
 * // let firebase crashlytics initialise
 * this.firebaseCrashlytics.initialise();
 *
 * ```
 *
 */
export declare class FirebaseCrashlytics extends IonicNativePlugin {
    initialise(): any;
}
