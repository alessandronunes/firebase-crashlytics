var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Injectable } from '@angular/core';
import { IonicNativePlugin, cordova, cordovaPropertyGet, cordovaPropertySet } from '@ionic-native/core';
var FirebaseCrashlytics = /** @class */ (function (_super) {
    __extends(FirebaseCrashlytics, _super);
    function FirebaseCrashlytics() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    FirebaseCrashlytics.prototype.initialise = function () { return cordova(this, "initialise", { "sync": true }, arguments); };
    FirebaseCrashlytics.pluginName = "FirebaseCrashlytics";
    FirebaseCrashlytics.plugin = "cordova-plugin-firebase-crashlytics";
    FirebaseCrashlytics.pluginRef = "FirebaseCrashlytics";
    FirebaseCrashlytics.repo = "https://github.com/ReallySmallSoftware/cordova-plugin-firebase-crashlytics";
    FirebaseCrashlytics.platforms = ["Android", "iOS"];
    FirebaseCrashlytics = __decorate([
        Injectable()
    ], FirebaseCrashlytics);
    return FirebaseCrashlytics;
}(IonicNativePlugin));
export { FirebaseCrashlytics };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi8uLi9zcmMvQGlvbmljLW5hdGl2ZS9wbHVnaW5zL3N0YXR1cy1iYXIvbmd4L2luZGV4LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxPQUFPLEVBQUUsVUFBVSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQzNDLE9BQU8sc0VBQXVELE1BQU0sb0JBQW9CLENBQUM7O0lBaUMxRCw2QkFBaUI7Ozs7SUFnQjlDLG1DQUFlLGFBQUMsV0FBb0I7SUFTcEMsZ0NBQVk7SUFTWixxQ0FBaUI7SUFTakIseUNBQXFCO0lBU3JCLG9DQUFnQjtJQWNoQix5Q0FBcUIsYUFBQyxTQUFpQjtJQWF2Qyw4Q0FBMEIsYUFBQyxTQUFpQjtJQVM1Qyx3QkFBSTtJQVNKLHdCQUFJOzBCQTVGSixnQ0FBUzs7Ozs7Ozs7Ozs7SUFMRSxTQUFTO1FBRHJCLFVBQVUsRUFBRTtPQUNBLFNBQVM7b0JBbEN0QjtFQWtDK0IsaUJBQWlCO1NBQW5DLFNBQVMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb3Jkb3ZhLCBDb3Jkb3ZhUHJvcGVydHksIElvbmljTmF0aXZlUGx1Z2luLCBQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuXG4vKipcbiAqIEBuYW1lIFN0YXR1cyBCYXJcbiAqIEBkZXNjcmlwdGlvblxuICogTWFuYWdlIHRoZSBhcHBlYXJhbmNlIG9mIHRoZSBuYXRpdmUgc3RhdHVzIGJhci5cbiAqXG4gKiBSZXF1aXJlcyBDb3Jkb3ZhIHBsdWdpbjogYGNvcmRvdmEtcGx1Z2luLXN0YXR1c2JhcmAuIEZvciBtb3JlIGluZm8sIHBsZWFzZSBzZWUgdGhlIFtTdGF0dXNCYXIgcGx1Z2luIGRvY3NdKGh0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tc3RhdHVzYmFyKS5cbiAqXG4gKiBAdXNhZ2VcbiAqIGBgYHR5cGVzY3JpcHRcbiAqIGltcG9ydCB7IFN0YXR1c0JhciB9IGZyb20gJ0Bpb25pYy1uYXRpdmUvc3RhdHVzLWJhcic7XG4gKlxuICogY29uc3RydWN0b3IocHJpdmF0ZSBzdGF0dXNCYXI6IFN0YXR1c0JhcikgeyB9XG4gKlxuICogLi4uXG4gKlxuICogLy8gbGV0IHN0YXR1cyBiYXIgb3ZlcmxheSB3ZWJ2aWV3XG4gKiB0aGlzLnN0YXR1c0Jhci5vdmVybGF5c1dlYlZpZXcodHJ1ZSk7XG4gKlxuICogLy8gc2V0IHN0YXR1cyBiYXIgdG8gd2hpdGVcbiAqIHRoaXMuc3RhdHVzQmFyLmJhY2tncm91bmRDb2xvckJ5SGV4U3RyaW5nKCcjZmZmZmZmJyk7XG4gKiBgYGBcbiAqXG4gKi9cbkBQbHVnaW4oe1xuICBwbHVnaW5OYW1lOiAnU3RhdHVzQmFyJyxcbiAgcGx1Z2luOiAnY29yZG92YS1wbHVnaW4tc3RhdHVzYmFyJyxcbiAgcGx1Z2luUmVmOiAnU3RhdHVzQmFyJyxcbiAgcmVwbzogJ2h0dHBzOi8vZ2l0aHViLmNvbS9hcGFjaGUvY29yZG92YS1wbHVnaW4tc3RhdHVzYmFyJyxcbiAgcGxhdGZvcm1zOiBbJ0FuZHJvaWQnLCAnaU9TJywgJ1dpbmRvd3MnXVxufSlcbkBJbmplY3RhYmxlKClcbmV4cG9ydCBjbGFzcyBTdGF0dXNCYXIgZXh0ZW5kcyBJb25pY05hdGl2ZVBsdWdpbiB7XG4gIC8qKlxuICAgKiBXaGV0aGVyIHRoZSBTdGF0dXNCYXIgaXMgY3VycmVudGx5IHZpc2libGUgb3Igbm90LlxuICAgKi9cbiAgQENvcmRvdmFQcm9wZXJ0eSgpXG4gIGlzVmlzaWJsZTogYm9vbGVhbjtcblxuICAvKipcbiAgICogU2V0IHdoZXRoZXIgdGhlIHN0YXR1cyBiYXIgb3ZlcmxheXMgdGhlIG1haW4gYXBwIHZpZXcuIFRoZSBkZWZhdWx0XG4gICAqIGlzIHRydWUuXG4gICAqXG4gICAqIEBwYXJhbSB7Ym9vbGVhbn0gZG9lc092ZXJsYXkgIFdoZXRoZXIgdGhlIHN0YXR1cyBiYXIgb3ZlcmxheXMgdGhlIG1haW4gYXBwIHZpZXcuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZVxuICB9KVxuICBvdmVybGF5c1dlYlZpZXcoZG9lc092ZXJsYXk6IGJvb2xlYW4pIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdGhlIGRlZmF1bHQgc3RhdHVzYmFyIChkYXJrIHRleHQsIGZvciBsaWdodCBiYWNrZ3JvdW5kcykuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZVxuICB9KVxuICBzdHlsZURlZmF1bHQoKSB7XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoZSBsaWdodENvbnRlbnQgc3RhdHVzYmFyIChsaWdodCB0ZXh0LCBmb3IgZGFyayBiYWNrZ3JvdW5kcykuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZVxuICB9KVxuICBzdHlsZUxpZ2h0Q29udGVudCgpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBVc2UgdGhlIGJsYWNrVHJhbnNsdWNlbnQgc3RhdHVzYmFyIChsaWdodCB0ZXh0LCBmb3IgZGFyayBiYWNrZ3JvdW5kcykuXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZVxuICB9KVxuICBzdHlsZUJsYWNrVHJhbnNsdWNlbnQoKSB7XG4gIH1cblxuICAvKipcbiAgICogVXNlIHRoZSBibGFja09wYXF1ZSBzdGF0dXNiYXIgKGxpZ2h0IHRleHQsIGZvciBkYXJrIGJhY2tncm91bmRzKS5cbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIHN0eWxlQmxhY2tPcGFxdWUoKSB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBzdGF0dXMgYmFyIHRvIGEgc3BlY2lmaWMgbmFtZWQgY29sb3IuIFZhbGlkIG9wdGlvbnM6XG4gICAqIGJsYWNrLCBkYXJrR3JheSwgbGlnaHRHcmF5LCB3aGl0ZSwgZ3JheSwgcmVkLCBncmVlbiwgYmx1ZSwgY3lhbiwgeWVsbG93LCBtYWdlbnRhLCBvcmFuZ2UsIHB1cnBsZSwgYnJvd24uXG4gICAqXG4gICAqIGlPUyBub3RlOiB5b3UgbXVzdCBjYWxsIFN0YXR1c0Jhci5vdmVybGF5c1dlYlZpZXcoZmFsc2UpIHRvIGVuYWJsZSBjb2xvciBjaGFuZ2luZy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IGNvbG9yTmFtZSAgVGhlIG5hbWUgb2YgdGhlIGNvbG9yIChmcm9tIGFib3ZlKVxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWVcbiAgfSlcbiAgYmFja2dyb3VuZENvbG9yQnlOYW1lKGNvbG9yTmFtZTogc3RyaW5nKSB7XG4gIH1cblxuICAvKipcbiAgICogU2V0IHRoZSBzdGF0dXMgYmFyIHRvIGEgc3BlY2lmaWMgaGV4IGNvbG9yIChDU1Mgc2hvcnRoYW5kIHN1cHBvcnRlZCEpLlxuICAgKlxuICAgKiBpT1Mgbm90ZTogeW91IG11c3QgY2FsbCBTdGF0dXNCYXIub3ZlcmxheXNXZWJWaWV3KGZhbHNlKSB0byBlbmFibGUgY29sb3IgY2hhbmdpbmcuXG4gICAqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoZXhTdHJpbmcgIFRoZSBoZXggdmFsdWUgb2YgdGhlIGNvbG9yLlxuICAgKi9cbiAgQENvcmRvdmEoe1xuICAgIHN5bmM6IHRydWVcbiAgfSlcbiAgYmFja2dyb3VuZENvbG9yQnlIZXhTdHJpbmcoaGV4U3RyaW5nOiBzdHJpbmcpIHtcbiAgfVxuXG4gIC8qKlxuICAgKiBIaWRlIHRoZSBTdGF0dXNCYXJcbiAgICovXG4gIEBDb3Jkb3ZhKHtcbiAgICBzeW5jOiB0cnVlXG4gIH0pXG4gIGhpZGUoKSB7XG4gIH1cblxuICAvKipcbiAgICogU2hvdyB0aGUgU3RhdHVzQmFyXG4gICAqL1xuICBAQ29yZG92YSh7XG4gICAgc3luYzogdHJ1ZVxuICB9KVxuICBzaG93KCkge1xuICB9XG5cbn1cbiJdfQ==