// const wdio = require("webdriverio");


// // javascript
// const opts = {
//     path: '/wd/hub',
//     port: 19006,
//     capabilities: {
//         // platformName: "Android",
//         platformVersion: "8",
//         deviceName: "Android Emulator",
//         app: "/path/to/the/downloaded/ApiDemos-debug.apk",
//         appPackage: "io.appium.android.apis",
//         appActivity: ".view.TextFields",
//         automationName: "UiAutomator2"
//     }
// };

// async function main() {
//     const client = await wdio.remote(opts);

//     await client.deleteSession();
// }

// main();

let contexts = driver.contexts();
driver.context(contexts[1]);